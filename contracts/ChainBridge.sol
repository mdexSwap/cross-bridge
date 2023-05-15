// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./BridgeProxy.sol";
import "./interface/IERC20.sol";
import "./libraries/TransferHelper.sol";

contract ChainBridge is BridgeProxy {
    mapping(bytes32 => bool) public depositRecords;
    mapping(bytes32 => bool) public vaultRecords;

    event ChainBridgeDeposit(
        bytes32 indexed bridgeHash,
        address indexed user,
        address indexed token,
        address receiver,
        uint256 srcChainId,
        uint256 destChainId,
        uint256 amount
    );

    event ChainBridgeVault(
        bytes32 indexed bridgeHash,
        address indexed receiver,
        address indexed token,
        uint256 amount,
        uint256 mintAmount
    );

    constructor(
        address _fee,
        address _token
    ) EIP712("Mdex Chain Bridge", "1.0.0") {
        feeTo = _fee;
        supportTokens[_token] = true;

        executors[msg.sender] = true;
        verifiers[msg.sender] = true;
    }

    function performDepositChain(
        BridgeDeposit memory _order
    )
        external
        payable
        verifyBridgeDeposit(_order)
        checkDeadline(_order.deadline)
        whenNotPaused
    {
        require(!depositRecords[_order.bridgeHash], "already completed");

        _depositChain(_order);

        emit ChainBridgeDeposit(
            _order.bridgeHash,
            _order.user,
            _order.token,
            _order.receiver,
            _order.srcChainId,
            _order.destChainId,
            _order.amount
        );
    }

    function performVaultChain(
        BridgeVault memory _vault
    )
        external
        verifyBridgeVault(_vault)
        checkDeadline(_vault.deadline)
        whenNotPaused
    {
        require(!vaultRecords[_vault.bridgeHash], "already completed");

        uint256 balance = IERC20(_vault.token).balanceOf(address(this));
        require(balance >= _vault.amount, "insufficient balance");

        _vaultChain(_vault);

        emit ChainBridgeVault(
            _vault.bridgeHash,
            _vault.receiver,
            _vault.token,
            _vault.amount,
            _vault.mintAmount
        );
    }

    function _depositChain(BridgeDeposit memory _order) internal {
        depositRecords[_order.bridgeHash] = true;

        if (_order.gasFee > 0) {
            require(_order.gasFee <= msg.value, "wrong gas fee");
            TransferHelper.safeTransferETH(feeTo, msg.value);
        }

        if (_order.supportMinting) {
            IERC20(_order.token).burnFrom(msg.sender, _order.amount);
        } else {
            TransferHelper.safeTransferFrom(
                _order.token,
                msg.sender,
                address(this),
                _order.amount
            );
        }
    }

    function _vaultChain(BridgeVault memory _vault) internal {
        vaultRecords[_vault.bridgeHash] = true;

        if (_vault.amount > 0) {
            uint256 balance = IERC20(_vault.token).balanceOf(address(this));
            require(balance >= _vault.amount, "insufficient balance");

            TransferHelper.safeTransfer(
                _vault.token,
                _vault.receiver,
                _vault.amount
            );
        }

        if (_vault.mintAmount > 0) {
            require(_vault.supportMinting, "chain does not support minting");

            IERC20(_vault.token).mint(_vault.receiver, _vault.mintAmount);
        }
    }
}
