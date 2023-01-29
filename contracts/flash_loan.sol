// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "@aave/core-v3/contracts/flashloan/base/FlashLoanSimpleReceiverBase.sol";
import "@aave/core-v3/contracts/interfaces/IPoolAddressesProvider.sol";
import "@aave/core-v3/contracts/dependencies/openzeppelin/contracts/IERC20.sol";


contract FlashLoan is FlashLoanSimpleReceiverBase {

    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }

    constructor(address _addressProvider) FlashLoanSimpleReceiverBase(IPoolAddressesProvider(_addressProvider)) {
        owner = msg.sender;
    }

    function flashLoan(address _token, uint256 _amount) external onlyOwner {

        bytes memory data = "";
        POOL.flashLoanSimple(address(this), _token, _amount, data, 0);

    }

    function executeOperation(
        address asset,
        uint256 amount,
        uint256 premium,
        address initiator,
        bytes calldata params
    ) external override returns (bool) {
      

        // Do nothing for now


        uint totalDebt = amount + premium;
        IERC20(asset).approve(address(POOL), totalDebt);

        return true;

    }
}