async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const FlashLoan = await ethers.getContractFactory("FlashLoan");
    // GOERLI : 0xC911B590248d127aD18546B186cC6B324e99F02c 
    // FANTOM testnet : 0xC809bea009Ca8DAA680f6A1c4Ca020D550210736
    const FlashLoanDeployed = await FlashLoan.deploy('0xC809bea009Ca8DAA680f6A1c4Ca020D550210736');
  
    console.log("SC address:", FlashLoanDeployed.address);   
}

main().then(() => process.exit(0)).catch(error => {console.error(error);
    process.exit(1);
  });
  