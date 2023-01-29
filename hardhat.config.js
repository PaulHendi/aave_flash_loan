require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/" + process.env.API_INFURA,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
