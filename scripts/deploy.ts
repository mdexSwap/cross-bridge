import { ethers } from "hardhat";

async function main() {
    const bridge_config = {
        fee_to: "0x0000000000000000000000000000000000000000",
        bridge_token: "0x0000000000000000000000000000000000000000"
    }

    const ChainBridge = await ethers.getContractFactory("ChainBridge");
    const chainBridge = await ChainBridge.deploy(bridge_config.fee_to, bridge_config.bridge_token);
    await chainBridge.deployed();

    console.log(`ChainBridge contract deployed to ${chainBridge.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
