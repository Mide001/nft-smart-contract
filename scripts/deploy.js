const { ethers } = require('hardhat');



async function main () {
  const nftContractFactory = await ethers.getContractFactory('nftContract');
  const nftContract = await nftContractFactory.deploy('Nft Contract', 'NCT', '0xA113472D21c92A833414BC573b544c5858462CDA');
  const deployedAddress = await nftContract.deployed();
  console.log(`The nftContract was deployed to: ${deployedAddress.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})