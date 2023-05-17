import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract } from "@ethersproject/contracts";
import { MaxUint256 } from '@ethersproject/constants';
import { _TypedDataEncoder } from '@ethersproject/hash';
import { IDepositOrder, IVaultOrder, SignerUser } from "./utils/helper.interface";
import { getSigners, deployNew, getDomain, createBridgeExcetorSig, createVaultExectorSig, createVaultVeriferSig } from "./utils/helper";
import dayjs from "dayjs";

describe("ChainBridge", function () {
    let fee_to: string;
    let bridge_user: string;
    let signer_user: SignerUser;

    let bridgeToken: Contract;
    let otherToken: Contract;
    let chainBridge: Contract;

    let domain: any;
    let deadline: number;
    let bridgeDepositOrder: IDepositOrder, bridgeVaultOrder: IVaultOrder;

    before(async () => {
        signer_user = await getSigners();

        bridge_user = signer_user.user3.address;
        fee_to = signer_user.user4.address;

        deadline = dayjs().add(10, 'minute').unix();
    });

    beforeEach(async () => {
        bridgeToken = await deployNew("MdxToken", []);
        otherToken = await deployNew("MdxToken", []);
        chainBridge = await deployNew("ChainBridge", [fee_to, bridgeToken.address]);

        const network = await ethers.provider.getNetwork();
        domain = getDomain(network.chainId, chainBridge.address);

        await bridgeToken.addMiner(signer_user.owner.address);
        await bridgeToken.mint(bridge_user, ethers.utils.parseEther("10000"));

        bridgeDepositOrder = {
            bridgeHash: '0x',
            user: bridge_user,
            receiver: bridge_user,
            srcChainId: 128,
            destChainId: 1,
            token: bridgeToken.address,
            supportMinting: true,
            amount: ethers.utils.parseEther("100"),
            gasFee: ethers.utils.parseEther("1"),
            nonce: dayjs().valueOf(),
            deadline,
            execSig: '0x'
        }

        const sig_info = await createBridgeExcetorSig(signer_user.owner, domain, bridgeDepositOrder);
        bridgeDepositOrder.bridgeHash = sig_info.hash;
        bridgeDepositOrder.execSig = sig_info.signature;

        bridgeVaultOrder = {
            bridgeHash: '0x',
            sourceHash: sig_info.hash,
            receiver: bridge_user,
            token: bridgeToken.address,
            supportMinting: true,
            amount: ethers.utils.parseEther("0"),
            mintAmount: ethers.utils.parseEther("100"),
            nonce: dayjs().valueOf(),
            deadline,
            execSig: '0x',
            verifySig: '0x'
        }
        const exector_sig_info = await createVaultExectorSig(signer_user.owner, domain, bridgeVaultOrder);
        bridgeVaultOrder.bridgeHash = exector_sig_info.hash;
        bridgeVaultOrder.execSig = exector_sig_info.signature;

        const veriier_sig_info = await createVaultVeriferSig(signer_user.owner, domain, bridgeVaultOrder);
        bridgeVaultOrder.verifySig = veriier_sig_info.signature;
    });

    describe("Verify the contract initialization setting value", () => {
        it("feeTo()", async () => {
            expect(await chainBridge.feeTo()).to.equal(fee_to);
        });

        it("supportTokens()", async () => {
            expect(await chainBridge.supportTokens(bridgeToken.address)).to.equal(true);
        });


        it("executors()", async () => {
            expect(await chainBridge.executors(signer_user.owner.address)).to.equal(true);
        });

        it("verifiers()", async () => {
            expect(await chainBridge.verifiers(signer_user.owner.address)).to.equal(true);
        });
    });

    describe("Verify the setup operation of the contract", () => {
        it("setFeeTo() - The fee address should be set to the new user address", async () => {
            await chainBridge.setFeeTo(signer_user.alice.address);

            expect(await chainBridge.feeTo()).not.equal(fee_to);
            expect(await chainBridge.feeTo()).to.equal(signer_user.alice.address);
        });

        it("setExecutors() - The executor address should be set to the new user address", async () => {
            await chainBridge.setExecutors([signer_user.bob.address], true);
            expect(await chainBridge.executors(signer_user.bob.address)).to.equal(true);

            await chainBridge.setExecutors([signer_user.owner.address], false);
            expect(await chainBridge.executors(signer_user.owner.address)).to.equal(false);
        });

        it("setVerifiers() - The verifier address should be set to the new user address", async () => {
            await chainBridge.setVerifiers([signer_user.alice.address], true);
            expect(await chainBridge.verifiers(signer_user.alice.address)).to.equal(true);

            await chainBridge.setVerifiers([signer_user.owner.address], false);
            expect(await chainBridge.verifiers(signer_user.owner.address)).to.equal(false);
        });

        it("setBridgeTokens() - The cross-chain token should be set to the new token address", async () => {
            await chainBridge.setBridgeTokens([otherToken.address], true);
            expect(await chainBridge.supportTokens(otherToken.address)).to.equal(true);

            await chainBridge.setBridgeTokens([bridgeToken.address], false);
            expect(await chainBridge.supportTokens(bridgeToken.address)).to.equal(false);
        });
    });

    describe("Perform deposit chain", () => {
        it("Should revert with the right error if the wrong token is cross-chained", async () => {
            bridgeDepositOrder.token = otherToken.address;
            await expect(chainBridge.performDepositChain(bridgeDepositOrder)).to.be.revertedWith("unsupported cross-chain tokens");
        })

        it("Should return wrong bridgeHash if order value is inconsistent", async () => {
            bridgeDepositOrder.receiver = signer_user.badUser1.address;

            await expect(chainBridge.performDepositChain(bridgeDepositOrder)).to.be.revertedWith("invalid deposit order bridge hash");
        })

        it("Should return correct error if non-executor's signature", async () => {
            const sig_info = await createBridgeExcetorSig(signer_user.badUser2, domain, bridgeDepositOrder);
            bridgeDepositOrder.bridgeHash = sig_info.hash;
            bridgeDepositOrder.execSig = sig_info.signature;

            await expect(chainBridge.performDepositChain(bridgeDepositOrder)).to.be.revertedWith("failed to verify executor signature");
        })

        it("Overdue deposit orders should be rejected", async () => {
            bridgeDepositOrder.deadline = dayjs().subtract(1, 'second').unix();
            const sig_info = await createBridgeExcetorSig(signer_user.owner, domain, bridgeDepositOrder);
            bridgeDepositOrder.bridgeHash = sig_info.hash;
            bridgeDepositOrder.execSig = sig_info.signature;

            await expect(chainBridge.performDepositChain(bridgeDepositOrder)).to.be.revertedWith("Transaction too old");
        })

        it("Should return the correct error if the wrong gas fee was paid", async () => {
            await expect(chainBridge.performDepositChain(bridgeDepositOrder)).to.be.revertedWith("wrong gas fee");
        })

        it("Should return insufficient allowance if the cross-chain token is not approved", async () => {
            await expect(chainBridge.performDepositChain(bridgeDepositOrder, { value: bridgeDepositOrder.gasFee })).to.be.revertedWith("ERC20: insufficient allowance");
        })

        it("Perform deposit chain successfully", async () => {
            await bridgeToken.connect(signer_user.user3).approve(chainBridge.address, MaxUint256);

            await expect(
                chainBridge.connect(signer_user.user3).performDepositChain(bridgeDepositOrder, { value: bridgeDepositOrder.gasFee })
            ).to.emit(chainBridge, "ChainBridgeDeposit").withArgs(
                bridgeDepositOrder.bridgeHash,
                bridgeDepositOrder.user,
                bridgeDepositOrder.token,
                bridgeDepositOrder.receiver,
                bridgeDepositOrder.srcChainId,
                bridgeDepositOrder.destChainId,
                bridgeDepositOrder.amount
            );

            const amount = ethers.utils.parseEther("9900");
            expect(await bridgeToken.balanceOf(bridge_user)).to.equal(amount);

            expect(
                await bridgeToken.balanceOf(chainBridge.address)
            ).to.equal(0);
        })

        it("Duplicate cross-chain deposit orders should be rejected", async () => {
            await bridgeToken.connect(signer_user.user3).approve(chainBridge.address, MaxUint256);

            await expect(
                chainBridge.connect(signer_user.user3).performDepositChain(bridgeDepositOrder, { value: bridgeDepositOrder.gasFee })
            ).to.emit(chainBridge, "ChainBridgeDeposit");

            await expect(
                chainBridge.connect(signer_user.user3).performDepositChain(bridgeDepositOrder, { value: bridgeDepositOrder.gasFee })
            ).to.be.revertedWith("already completed");
        })

        it("Deposit order for minting are not supported, tokens should be locked", async () => {
            bridgeDepositOrder.supportMinting = false;
            await bridgeToken.connect(signer_user.user3).approve(chainBridge.address, MaxUint256);

            const sig_info = await createBridgeExcetorSig(signer_user.owner, domain, bridgeDepositOrder);
            bridgeDepositOrder.bridgeHash = sig_info.hash;
            bridgeDepositOrder.execSig = sig_info.signature;

            await expect(
                chainBridge.connect(signer_user.user3).performDepositChain(bridgeDepositOrder, { value: bridgeDepositOrder.gasFee })
            ).to.emit(chainBridge, "ChainBridgeDeposit");

            expect(
                await bridgeToken.balanceOf(chainBridge.address)
            ).to.equal(bridgeDepositOrder.amount);
        })
    })

    describe("Perform vault chain", () => {
        it("Should revert with the right error if the wrong token is cross-chained", async () => {
            bridgeVaultOrder.token = otherToken.address;

            await expect(chainBridge.performVaultChain(bridgeVaultOrder)).to.be.revertedWith("unsupported cross-chain tokens");
        })

        it("Should return wrong bridgeHash if order value is inconsistent", async () => {
            bridgeVaultOrder.receiver = signer_user.badUser1.address;

            await expect(chainBridge.performVaultChain(bridgeVaultOrder)).to.be.revertedWith("invalid vault order bridge hash");
        })

        it("Should return correct error if non-executor's signature", async () => {
            const exector_sig_info = await createVaultExectorSig(signer_user.badUser1, domain, bridgeVaultOrder);
            bridgeVaultOrder.bridgeHash = exector_sig_info.hash;
            bridgeVaultOrder.execSig = exector_sig_info.signature;

            await expect(chainBridge.performVaultChain(bridgeVaultOrder)).to.be.revertedWith("failed to verify executor signature");
        })

        it("Should return correct error if non-verifer's signature", async () => {
            const veriier_sig_info = await createVaultVeriferSig(signer_user.badUser1, domain, bridgeVaultOrder);
            bridgeVaultOrder.verifySig = veriier_sig_info.signature;

            await expect(chainBridge.performVaultChain(bridgeVaultOrder)).to.be.revertedWith("failed to verify verifer signature");
        })

        it("Overdue vault orders should be rejected", async () => {
            bridgeVaultOrder.deadline = dayjs().subtract(1, 'second').unix();

            const exector_sig_info = await createVaultExectorSig(signer_user.owner, domain, bridgeVaultOrder);
            bridgeVaultOrder.bridgeHash = exector_sig_info.hash;
            bridgeVaultOrder.execSig = exector_sig_info.signature;

            const veriier_sig_info = await createVaultVeriferSig(signer_user.owner, domain, bridgeVaultOrder);
            bridgeVaultOrder.verifySig = veriier_sig_info.signature;

            await expect(chainBridge.performVaultChain(bridgeVaultOrder)).to.be.revertedWith("Transaction too old");
        })

        it("Should return correct error if caller is not the miner'", async () => {
            await expect(chainBridge.performVaultChain(bridgeVaultOrder)).to.be.revertedWith("caller is not the miner");
        })

        it("Perform vault chain successfully", async () => {
            await bridgeToken.addMiner(chainBridge.address);

            await expect(
                chainBridge.performVaultChain(bridgeVaultOrder)
            ).to.emit(chainBridge, "ChainBridgeVault").withArgs(
                bridgeVaultOrder.bridgeHash,
                bridgeVaultOrder.receiver,
                bridgeVaultOrder.token,
                bridgeVaultOrder.amount,
                bridgeVaultOrder.mintAmount
            );
        })

        it("Duplicate cross-chain vault orders should be rejected", async () => {
            await bridgeToken.addMiner(chainBridge.address);

            await expect(
                chainBridge.performVaultChain(bridgeVaultOrder)
            ).to.emit(chainBridge, "ChainBridgeVault")

            await expect(
                chainBridge.performVaultChain(bridgeVaultOrder)
            ).to.be.revertedWith("already completed");
        })
    })
});
