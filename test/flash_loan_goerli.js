const {ethers} = require("hardhat");
require('dotenv').config();

const contract_address = "0x1DA505C8D4BAab63ca7b3BE841b1cB12Be1dfC09";


async function interactWithContract() {

    const provider = new ethers.providers.InfuraProvider("goerli",process.env.API_INFURA);
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    let ABI = ["function flashLoan(address _token, uint256 _amount)"];
    let iface = new ethers.utils.Interface(ABI);
    let data = iface.encodeFunctionData("flashLoan", [ "0x65aFADD39029741B3b8f0756952C74678c9cEC93" , "1"]);

    await signer.sendTransaction({to:contract_address, data: data, gasLimit: 12000000});

}

interactWithContract().then(() => process.exit(0))
                      .catch(error => {
                        console.error(error);
                        process.exit(1);
                        });

