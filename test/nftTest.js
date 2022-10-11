const { Signer } = require('ethers');
const { ethers } = require('hardhat');

async function addUri() {
    const deployedAddress = "0x9B2fB528Ba770868a2553d3354e4095167B28566";
    const hiddenUri = "ipfs://QmPiZMrvvtbURh8WuRjfpGKwNgfA5V2RfKXi29B8ZvFue5";
    const api = (await ethers.getContractFactory('nftContract')).interface;
    const [signer] = await ethers.getSigners();
    const nftContract = new ethers.Contract(deployedAddress, api, signer);

    async function setUri() {
        const seturlfunction = await nftContract.setHiddenUri(hiddenUri);
        const receipt = await seturlfunction.wait();
        console.log(receipt)
    }

    await setUri();
}

addUri().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})