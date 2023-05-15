// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);

    function mint(address to, uint256 amount) external;

    function burnFrom(address account, uint256 amount) external;
}
