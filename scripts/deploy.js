const hre = require("hardhat");
require("dotenv").config();

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  // We get the contract to deploy
  // const factory = await hre.ethers.getContractFactory("WardenswapFactory");
  // const factoryInstance = await factory.deploy(deployer.address);

  // await factoryInstance.deployed();

  // console.log("Warden Factory deployed to:", factoryInstance.address);

  const router = await hre.ethers.getContractFactory("WardenswapRouter02");
  const routerInstance = await router.deploy("0xca26E3BD694c12F5367c09f68bAA274a992b9613", process.env.WAVAX_ADDRESS);
  //const routerInstance = await router.deploy(factoryInstance.address, process.env.WAVAX_ADDRESS);

  await routerInstance.deployed();

  console.log("Warden Router deployed to:", routerInstance.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
