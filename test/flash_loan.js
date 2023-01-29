const {ethers} = require("hardhat");
const {expect} = require("chai");

describe("FlashLoan", function () {

    let flashLoan;

    it("should deploy and perform a flash loan", async function () {

        const [owner] = await ethers.getSigners();
        const FlashLoan = await ethers.getContractFactory("FlashLoan");
        flashLoan = await FlashLoan.deploy();

        // 1) Send 1 ETH to the contract
        //await owner.sendTransaction({value: ethers.utils.parseEther("2"), to: flashLoan.address});

        // 2) Approve the AAVE lending pool to get back the 1 ETH + fee

        // Wrap 1 ether
        WETH_address = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
        owner.signTransaction({value: ethers.utils.parseEther("1"), to: WETH_address});

        
        
    });

});