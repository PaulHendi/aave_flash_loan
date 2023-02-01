const {ethers} = require("hardhat");
require('dotenv').config();

const contract_address = "0x4D1C8aA254082F81d9e6c5B5Faa14d11c698B46e";


async function interactWithContract() {

    //const provider = new ethers.providers.InfuraProvider("goerli",process.env.API_INFURA);
    const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/fantom_testnet");
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    // Address pool USDC goerli : 0x65aFADD39029741B3b8f0756952C74678c9cEC93
    // Address pool WFTM fantom testnet : 0x654a628265B614E50BBd79a2FD8A804637DBedd8
    let ABI = ["function flashLoan(address _token, uint256 _amount)"];
    let iface = new ethers.utils.Interface(ABI);
    let data = iface.encodeFunctionData("flashLoan", [ "0x654a628265B614E50BBd79a2FD8A804637DBedd8" , ethers.utils.parseEther("1.0")]);

    await signer.sendTransaction({to:contract_address, data: data, gasLimit: 12000000});

}

interactWithContract().then(() => process.exit(0))
                      .catch(error => {
                        console.error(error);
                        process.exit(1);
                        });

