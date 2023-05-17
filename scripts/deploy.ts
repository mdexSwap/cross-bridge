import { ethers } from "hardhat";

async function main() {
    // 部署跨链代币合约
    const BridgeToken = await ethers.getContractFactory("MdxToken");
    const bridgeToken = await BridgeToken.deploy();
    await bridgeToken.deployed();
    console.log(`BridgeToken contract deployed to ${bridgeToken.address}`);

    // 部署跨链桥合约
    const fee_to = "0x6bc9115d6E95BCCaE8E16f5294BBF8524bB70BBB";
    const ChainBridge = await ethers.getContractFactory("ChainBridge");
    const chainBridge = await ChainBridge.deploy(fee_to, bridgeToken.address);
    await chainBridge.deployed();
    console.log(`ChainBridge contract deployed to ${chainBridge.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
