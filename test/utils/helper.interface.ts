import { BigNumber } from '@ethersproject/bignumber';
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

export interface SignerUser {
    owner: SignerWithAddress;
    bob: SignerWithAddress;
    alice: SignerWithAddress;
    user3: SignerWithAddress;
    user4: SignerWithAddress;
    badUser1: SignerWithAddress;
    badUser2: SignerWithAddress;
    executor: SignerWithAddress;
    verifier: SignerWithAddress;
}

export interface BridgeSigInfo {
    hash: string;
    signature: string;
}

export interface IDepositOrder {
    bridgeHash: string;
    user: string;
    receiver: string;
    srcChainId: number;
    destChainId: number;
    token: string;
    supportMinting: boolean;
    amount: BigNumber;
    gasFee: BigNumber;
    nonce: number;
    deadline: number;
    execSig: string;
}

export interface IVaultOrder {
    bridgeHash: string;
    sourceHash: string;
    receiver: string;
    token: string;
    supportMinting: boolean;
    amount: BigNumber;
    mintAmount: BigNumber;
    nonce: number;
    deadline: number;
    execSig: string;
    verifySig: string;
}