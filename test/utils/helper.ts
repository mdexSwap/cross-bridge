import { ethers } from "hardhat";
import { Contract } from '@ethersproject/contracts';
import { _TypedDataEncoder } from '@ethersproject/hash';
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { BridgeSigInfo, IDepositOrder, IVaultOrder, SignerUser } from "./helper.interface";

export const getSigners = async (): Promise<SignerUser> => {
    const [owner, bob, alice, user3, user4, badUser1, badUser2, executor, verifier] = await ethers.getSigners()

    return {
        owner,
        bob,
        alice,
        user3,
        user4,
        badUser1,
        badUser2,
        executor,
        verifier,
    }
}

export const deployNew = async (contractName: string, params: any[] = []): Promise<Contract> => {
    const C = await ethers.getContractFactory(contractName)
    return await C.deploy(...params)
}

export const createBridgeExcetorSig = async (exector_signer: SignerWithAddress, domain: any, bridge_order: IDepositOrder): Promise<BridgeSigInfo> => {
    const types = getBridgeDepositTypes();

    const hash = _TypedDataEncoder.hash(domain, types, bridge_order);
    const signature = await exector_signer._signTypedData(domain, types, bridge_order);

    return { hash, signature };
}

export const createVaultExectorSig = async (exector_signer: SignerWithAddress, domain: any, bridge_order: IVaultOrder): Promise<BridgeSigInfo> => {
    const types = getBridgeVaultExectorTypes();

    const hash = _TypedDataEncoder.hash(domain, types, bridge_order);
    const signature = await exector_signer._signTypedData(domain, types, bridge_order);

    return { hash, signature };
}

export const createVaultVeriferSig = async (verifer_signer: SignerWithAddress, domain: any, bridge_order: IVaultOrder): Promise<BridgeSigInfo> => {
    const types = getBridgeVaultVeriferTypes();

    const hash = _TypedDataEncoder.hash(domain, types, bridge_order);
    const signature = await verifer_signer._signTypedData(domain, types, bridge_order);

    return { hash, signature };
}


export const getDomain = (chain_id: number, contractAddress: string): any => {
    return {
        name: "Mdex Chain Bridge",
        version: "1.0.0",
        chainId: chain_id,
        verifyingContract: contractAddress
    }
}

export const getBridgeDepositTypes = (): any => {
    return {
        BridgeDeposit: [
            { name: 'user', type: 'address' },
            { name: 'receiver', type: 'address' },
            { name: 'srcChainId', type: 'uint256' },
            { name: 'destChainId', type: 'uint256' },
            { name: 'token', type: 'address' },
            { name: 'supportMinting', type: 'bool' },
            { name: 'amount', type: 'uint256' },
            { name: 'gasFee', type: 'uint256' },
            { name: 'nonce', type: 'uint256' },
            { name: 'deadline', type: 'uint256' }
        ]
    }
}

export const getBridgeVaultExectorTypes = (): any => {
    return {
        BridgeVaultExector: [
            { name: 'sourceHash', type: 'bytes32' },
            { name: 'receiver', type: 'address' },
            { name: 'token', type: 'address' },
            { name: 'supportMinting', type: 'bool' },
            { name: 'amount', type: 'uint256' },
            { name: 'mintAmount', type: 'uint256' },
            { name: 'nonce', type: 'uint256' },
            { name: 'deadline', type: 'uint256' }
        ]
    }
}

export const getBridgeVaultVeriferTypes = (): any => {
    return {
        BridgeVaultVerifer: [
            { name: 'bridgeHash', type: 'bytes32' },
            { name: 'sourceHash', type: 'bytes32' },
            { name: 'receiver', type: 'address' },
            { name: 'token', type: 'address' },
            { name: 'supportMinting', type: 'bool' },
            { name: 'amount', type: 'uint256' },
            { name: 'mintAmount', type: 'uint256' },
            { name: 'nonce', type: 'uint256' },
            { name: 'deadline', type: 'uint256' },
            { name: 'execSig', type: 'bytes' }
        ]
    }
}