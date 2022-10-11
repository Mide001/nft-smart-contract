require("@nomicfoundation/hardhat-toolbox");


const ALCHEMY_API_KEY = "6E_CVYpd_td1FCMtnPzjZeCJduaIvQ9z";
const GOERLI_PRIVATE_KEY = "d1c3c102915d6a68df8c42482f609abf821aa9d043f29e6be025a905cbb3d85c";


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
