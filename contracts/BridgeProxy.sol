// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "./utils/Validation.sol";

abstract contract BridgeProxy is Validation, Pausable, Ownable, EIP712 {
    bytes32 public constant BRIDGE_DEPOSIT_TYPEHASH =
        keccak256(
            "BridgeDeposit(address user,address receiver,uint256 srcChainId,uint256 destChainId,address token,bool supportMinting,uint256 amount,uint256 gasFee,uint256 nonce,uint256 deadline)"
        );
    bytes32 public constant BRIDGE_VAULT_EXECUTOR_TYPEHASH =
        keccak256(
            "BridgeVaultExector(bytes32 sourceHash,address receiver,address token,bool supportMinting,uint256 amount,uint256 mintAmount,uint256 nonce,uint256 deadline)"
        );
    bytes32 public constant BRIDGE_VAULT_VERIFER_TYPEHASH =
        keccak256(
            "BridgeVaultVerifer(bytes32 bridgeHash,bytes32 sourceHash,address receiver,address token,bool supportMinting,uint256 amount,uint256 mintAmount,uint256 nonce,uint256 deadline,bytes execSig)"
        );

    address public feeTo;
    mapping(address => bool) public executors;
    mapping(address => bool) public verifiers;
    mapping(address => bool) public supportTokens;

    struct BridgeDeposit {
        bytes32 bridgeHash;
        address user;
        address receiver;
        uint256 srcChainId;
        uint256 destChainId;
        address token;
        bool supportMinting;
        uint256 amount;
        uint256 gasFee;
        uint256 nonce;
        uint256 deadline;
        bytes execSig;
    }

    struct BridgeVault {
        bytes32 bridgeHash;
        bytes32 sourceHash;
        address receiver;
        address token;
        bool supportMinting;
        uint256 amount;
        uint256 mintAmount;
        uint256 nonce;
        uint256 deadline;
        bytes execSig;
        bytes verifySig;
    }

    modifier verifyBridgeDeposit(BridgeDeposit memory _order) {
        require(supportTokens[_order.token], "unsupported cross-chain tokens");

        bytes32 bridgeHash = _hashTypedDataV4(
            keccak256(
                abi.encode(
                    BRIDGE_DEPOSIT_TYPEHASH,
                    _order.user,
                    _order.receiver,
                    _order.srcChainId,
                    _order.destChainId,
                    _order.token,
                    _order.supportMinting,
                    _order.amount,
                    _order.gasFee,
                    _order.nonce,
                    _order.deadline
                )
            )
        );
        require(
            bridgeHash == _order.bridgeHash,
            "invalid deposit order bridge hash"
        );

        address executor = ECDSA.recover(bridgeHash, _order.execSig);
        require(executors[executor], "failed to verify executor signature");

        _;
    }

    modifier verifyBridgeVault(BridgeVault memory _vault) {
        require(supportTokens[_vault.token], "unsupported cross-chain tokens");

        bytes32 bridgeHash = _hashTypedDataV4(
            keccak256(
                abi.encode(
                    BRIDGE_VAULT_EXECUTOR_TYPEHASH,
                    _vault.sourceHash,
                    _vault.receiver,
                    _vault.token,
                    _vault.supportMinting,
                    _vault.amount,
                    _vault.mintAmount,
                    _vault.nonce,
                    _vault.deadline
                )
            )
        );
        require(
            bridgeHash == _vault.bridgeHash,
            "invalid vault order bridge hash"
        );

        address executor = ECDSA.recover(bridgeHash, _vault.execSig);
        require(executors[executor], "failed to verify executor signature");

        bytes32 digest = _hashTypedDataV4(
            keccak256(
                abi.encode(
                    BRIDGE_VAULT_VERIFER_TYPEHASH,
                    bridgeHash,
                    _vault.sourceHash,
                    _vault.receiver,
                    _vault.token,
                    _vault.supportMinting,
                    _vault.amount,
                    _vault.mintAmount,
                    _vault.nonce,
                    _vault.deadline,
                    keccak256(_vault.execSig)
                )
            )
        );
        address verifer = ECDSA.recover(digest, _vault.verifySig);
        require(verifiers[verifer], "failed to verify verifer signature");

        _;
    }

    function setFeeTo(address _newFeeTo) external onlyOwner {
        require(_newFeeTo != address(0), "zero address");

        feeTo = _newFeeTo;
    }

    function setExecutors(
        address[] memory _executors,
        bool _status
    ) external onlyOwner {
        for (uint256 i = 0; i < _executors.length; i++) {
            executors[_executors[i]] = _status;
        }
    }

    function setVerifiers(
        address[] memory _verifiers,
        bool _status
    ) external onlyOwner {
        for (uint256 i = 0; i < _verifiers.length; i++) {
            verifiers[_verifiers[i]] = _status;
        }
    }

    function setBridgeTokens(
        address[] memory _tokens,
        bool _status
    ) external onlyOwner {
        for (uint256 i = 0; i < _tokens.length; i++) {
            supportTokens[_tokens[i]] = _status;
        }
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }
}
