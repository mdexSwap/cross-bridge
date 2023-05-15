/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ChainBridge,
  ChainBridgeInterface,
} from "../../contracts/ChainBridge";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_fee",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "bridgeHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "srcChainId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "destChainId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ChainBridgeDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "bridgeHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mintAmount",
        type: "uint256",
      },
    ],
    name: "ChainBridgeVault",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "BRIDGE_DEPOSIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BRIDGE_VAULT_EXECUTOR_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BRIDGE_VAULT_VERIFER_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "depositRecords",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "executors",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeTo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "bridgeHash",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "srcChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "destChainId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "bool",
            name: "supportMinting",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "execSig",
            type: "bytes",
          },
        ],
        internalType: "struct BridgeProxy.BridgeDeposit",
        name: "_order",
        type: "tuple",
      },
    ],
    name: "performDepositChain",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "bridgeHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "sourceHash",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "bool",
            name: "supportMinting",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mintAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "execSig",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "verifySig",
            type: "bytes",
          },
        ],
        internalType: "struct BridgeProxy.BridgeVault",
        name: "_vault",
        type: "tuple",
      },
    ],
    name: "performVaultChain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_tokens",
        type: "address[]",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "setBridgeTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_executors",
        type: "address[]",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "setExecutors",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newFeeTo",
        type: "address",
      },
    ],
    name: "setFeeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_verifiers",
        type: "address[]",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "setVerifiers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "supportTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "vaultRecords",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "verifiers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101406040523480156200001257600080fd5b506040516200219d3803806200219d833981016040819052620000359162000200565b60408051808201825260118152704d64657820436861696e2042726964676560781b602080830191909152825180840190935260058352640312e302e360dc1b908301526000805460ff19169055906200008f336200018a565b815160208084019190912082518383012060e08290526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81880181905281830187905260608201869052608082019490945230818401528151808203909301835260c00190528051940193909320919290916080523060c052610120525050600180546001600160a01b0319166001600160a01b03958616178155929093166000908152600460209081526040808320805460ff1990811687179091553384526002835281842080548216871790556003909252909120805490911690921790915550620002389050565b600080546001600160a01b03838116610100818102610100600160a81b0319851617855560405193049190911692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35050565b80516001600160a01b0381168114620001fb57600080fd5b919050565b600080604083850312156200021457600080fd5b6200021f83620001e3565b91506200022f60208401620001e3565b90509250929050565b60805160a05160c05160e0516101005161012051611f1562000288600039600061138f015260006113de015260006113b9015260006113120152600061133c015260006113660152611f156000f3fe6080604052600436106101145760003560e01c80638a0737a0116100a0578063c00731d611610064578063c00731d61461035d578063cf50cb6b1461037d578063d8880677146103ad578063f2fde38b146103e1578063f46901ed1461040157600080fd5b80638a0737a01461029a5780638da5cb5b146102ca5780639ac2a011146102ed578063bdfea0d61461031d578063be0cc2531461033d57600080fd5b80634a9cfe25116100e75780634a9cfe25146101ee5780635c975abb146102015780636c82448714610225578063715018a614610255578063875e698f1461026a57600080fd5b8063017e7e5814610119578063245f13281461015657806337016ad1146101985780633965f7be146101ba575b600080fd5b34801561012557600080fd5b50600154610139906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561016257600080fd5b5061018a7ff10f70e3f4d488b1005163f73b93e8e0304a90ddc02092bff474b021b2032fc481565b60405190815260200161014d565b3480156101a457600080fd5b506101b86101b3366004611a8f565b610421565b005b3480156101c657600080fd5b5061018a7f3191c066306fbba702ed414da37d24dacb7c3d4a0f875c5b4a95156e9f468aa081565b6101b86101fc366004611bbe565b610495565b34801561020d57600080fd5b5060005460ff165b604051901515815260200161014d565b34801561023157600080fd5b50610215610240366004611cbd565b60036020526000908152604090205460ff1681565b34801561026157600080fd5b506101b86107e7565b34801561027657600080fd5b50610215610285366004611cdf565b60066020526000908152604090205460ff1681565b3480156102a657600080fd5b506102156102b5366004611cbd565b60046020526000908152604090205460ff1681565b3480156102d657600080fd5b5060005461010090046001600160a01b0316610139565b3480156102f957600080fd5b50610215610308366004611cbd565b60026020526000908152604090205460ff1681565b34801561032957600080fd5b506101b8610338366004611a8f565b6107fb565b34801561034957600080fd5b506101b8610358366004611a8f565b61086a565b34801561036957600080fd5b506101b8610378366004611cf8565b6108d9565b34801561038957600080fd5b50610215610398366004611cdf565b60056020526000908152604090205460ff1681565b3480156103b957600080fd5b5061018a7fdb10cf656589626ba2d812f12dc77a537cf56e484655948c964f14339ed2f8e781565b3480156103ed57600080fd5b506101b86103fc366004611cbd565b610dcb565b34801561040d57600080fd5b506101b861041c366004611cbd565b610e44565b610429610eb3565b60005b825181101561049057816002600085848151811061044c5761044c611de4565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff19169115159190911790558061048881611dfa565b91505061042c565b505050565b60a08101516001600160a01b0316600090815260046020526040902054819060ff166105085760405162461bcd60e51b815260206004820152601e60248201527f756e737570706f727465642063726f73732d636861696e20746f6b656e73000060448201526064015b60405180910390fd5b60006105f67ff10f70e3f4d488b1005163f73b93e8e0304a90ddc02092bff474b021b2032fc483602001518460400151856060015186608001518760a001518860c001518960e001518a61010001518b61012001518c61014001516040516020016105db9b9a999897969594939291909a8b526001600160a01b03998a1660208c015297891660408b015260608a019690965260808901949094529190951660a087015293151560c086015260e08501939093526101008401929092526101208301919091526101408201526101600190565b60405160208183030381529060405280519060200120610f13565b825190915081146106535760405162461bcd60e51b815260206004820152602160248201527f696e76616c6964206465706f736974206f7264657220627269646765206861736044820152600d60fb1b60648201526084016104ff565b600061066482846101600151610f67565b6001600160a01b03811660009081526002602052604090205490915060ff1661069f5760405162461bcd60e51b81526004016104ff90611e21565b610140840151804211156106eb5760405162461bcd60e51b8152602060048201526013602482015272151c985b9cd858dd1a5bdb881d1bdbc81bdb19606a1b60448201526064016104ff565b6106f3610f8b565b845160009081526005602052604090205460ff16156107485760405162461bcd60e51b8152602060048201526011602482015270185b1c9958591e4818dbdb5c1b195d1959607a1b60448201526064016104ff565b61075185610fd1565b8460a001516001600160a01b031685602001516001600160a01b031686600001517f406f4d398dfec2b3c6f286d3089e5250d060a2f83c86f7926d5516353b33142e886040015189606001518a608001518b60e001516040516107d894939291906001600160a01b0394909416845260208401929092526040830152606082015260800190565b60405180910390a45050505050565b6107ef610eb3565b6107f960006110e2565b565b610803610eb3565b60005b825181101561049057816003600085848151811061082657610826611de4565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff19169115159190911790558061086281611dfa565b915050610806565b610872610eb3565b60005b825181101561049057816004600085848151811061089557610895611de4565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055806108d181611dfa565b915050610875565b60608101516001600160a01b0316600090815260046020526040902054819060ff166109475760405162461bcd60e51b815260206004820152601e60248201527f756e737570706f727465642063726f73732d636861696e20746f6b656e73000060448201526064016104ff565b60006109f47f3191c066306fbba702ed414da37d24dacb7c3d4a0f875c5b4a95156e9f468aa083602001518460400151856060015186608001518760a001518860c001518960e001518a61010001516040516020016105db9998979695949392919098895260208901979097526001600160a01b039586166040890152939094166060870152901515608086015260a085015260c084019190915260e08301526101008201526101200190565b82519091508114610a475760405162461bcd60e51b815260206004820152601f60248201527f696e76616c6964207661756c74206f726465722062726964676520686173680060448201526064016104ff565b6000610a5882846101200151610f67565b6001600160a01b03811660009081526002602052604090205490915060ff16610a935760405162461bcd60e51b81526004016104ff90611e21565b6000610b5f7fdb10cf656589626ba2d812f12dc77a537cf56e484655948c964f14339ed2f8e78486602001518760400151886060015189608001518a60a001518b60c001518c60e001518d61010001518e6101200151805190602001206040516020016105db9b9a999897969594939291909a8b5260208b019990995260408a01979097526001600160a01b0395861660608a015293909416608088015290151560a087015260c086015260e08501919091526101008401526101208301526101408201526101600190565b90506000610b7282866101400151610f67565b6001600160a01b03811660009081526003602052604090205490915060ff16610be85760405162461bcd60e51b815260206004820152602260248201527f6661696c656420746f207665726966792076657269666572207369676e617475604482015261726560f01b60648201526084016104ff565b61010086015180421115610c345760405162461bcd60e51b8152602060048201526013602482015272151c985b9cd858dd1a5bdb881d1bdbc81bdb19606a1b60448201526064016104ff565b610c3c610f8b565b865160009081526006602052604090205460ff1615610c915760405162461bcd60e51b8152602060048201526011602482015270185b1c9958591e4818dbdb5c1b195d1959607a1b60448201526064016104ff565b60608701516040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610cdc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d009190611e64565b90508760a00151811015610d4d5760405162461bcd60e51b8152602060048201526014602482015273696e73756666696369656e742062616c616e636560601b60448201526064016104ff565b610d568861113b565b87606001516001600160a01b031688604001516001600160a01b031689600001517f25f8e5272f6fb8240a1fc130bc24e4eb7da45ac748ab84656aecc9a2f1c432788b60a001518c60c00151604051610db9929190918252602082015260400190565b60405180910390a45050505050505050565b610dd3610eb3565b6001600160a01b038116610e385760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104ff565b610e41816110e2565b50565b610e4c610eb3565b6001600160a01b038116610e915760405162461bcd60e51b815260206004820152600c60248201526b7a65726f206164647265737360a01b60448201526064016104ff565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b036101009091041633146107f95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104ff565b6000610f61610f20611305565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b92915050565b6000806000610f76858561142c565b91509150610f8381611471565b509392505050565b60005460ff16156107f95760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104ff565b61010081015115611037573481610100015111156110215760405162461bcd60e51b815260206004820152600d60248201526c77726f6e67206761732066656560981b60448201526064016104ff565b600154611037906001600160a01b0316346115bb565b8060c00151156110b25760a081015160e082015160405163079cc67960e41b815233600482015260248101919091526001600160a01b03909116906379cc679090604401600060405180830381600087803b15801561109557600080fd5b505af11580156110a9573d6000803e3d6000fd5b505050506110c6565b6110c68160a0015133308460e00151611694565b516000908152600560205260409020805460ff19166001179055565b600080546001600160a01b03838116610100818102610100600160a81b0319851617855560405193049190911692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35050565b60a08101511561121a5760608101516040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015611190573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111b49190611e64565b90508160a001518110156112015760405162461bcd60e51b8152602060048201526014602482015273696e73756666696369656e742062616c616e636560601b60448201526064016104ff565b611218826060015183604001518460a001516117d1565b505b60c0810151156112e95780608001516112755760405162461bcd60e51b815260206004820152601e60248201527f636861696e20646f6573206e6f7420737570706f7274206d696e74696e67000060448201526064016104ff565b606081015160408083015160c084015191516340c10f1960e01b81526001600160a01b0391821660048201526024810192909252909116906340c10f1990604401600060405180830381600087803b1580156112d057600080fd5b505af11580156112e4573d6000803e3d6000fd5b505050505b516000908152600660205260409020805460ff19166001179055565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561135e57507f000000000000000000000000000000000000000000000000000000000000000046145b1561138857507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b60008082516041036114625760208301516040840151606085015160001a61145687828585611901565b9450945050505061146a565b506000905060025b9250929050565b600081600481111561148557611485611e7d565b0361148d5750565b60018160048111156114a1576114a1611e7d565b036114ee5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016104ff565b600281600481111561150257611502611e7d565b0361154f5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016104ff565b600381600481111561156357611563611e7d565b03610e415760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016104ff565b604080516000808252602082019092526001600160a01b0384169083906040516115e59190611e93565b60006040518083038185875af1925050503d8060008114611622576040519150601f19603f3d011682016040523d82523d6000602084013e611627565b606091505b50509050806104905760405162461bcd60e51b815260206004820152603360248201527f5472616e7366657248656c7065723a736166655472616e736665724554483a20604482015272115512081d1c985b9cd9995c8819985a5b1959606a1b60648201526084016104ff565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392908816916116f89190611e93565b6000604051808303816000865af19150503d8060008114611735576040519150601f19603f3d011682016040523d82523d6000602084013e61173a565b606091505b50915091508180156117645750805115806117645750808060200190518101906117649190611ec2565b6117c95760405162461bcd60e51b815260206004820152603060248201527f5472616e7366657248656c7065723a7472616e7366657246726f6d3a2074726160448201526f1b9cd9995c919c9bdb4819985a5b195960821b60648201526084016104ff565b505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283929087169161182d9190611e93565b6000604051808303816000865af19150503d806000811461186a576040519150601f19603f3d011682016040523d82523d6000602084013e61186f565b606091505b50915091508180156118995750805115806118995750808060200190518101906118999190611ec2565b6118fa5760405162461bcd60e51b815260206004820152602c60248201527f5472616e7366657248656c7065723a736166655472616e736665723a2074726160448201526b1b9cd9995c8819985a5b195960a21b60648201526084016104ff565b5050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561193857506000905060036119bc565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561198c573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166119b5576000600192509250506119bc565b9150600090505b94509492505050565b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff811182821017156119ff576119ff6119c5565b60405290565b604051610160810167ffffffffffffffff811182821017156119ff576119ff6119c5565b604051601f8201601f1916810167ffffffffffffffff81118282101715611a5257611a526119c5565b604052919050565b80356001600160a01b0381168114611a7157600080fd5b919050565b8015158114610e4157600080fd5b8035611a7181611a76565b60008060408385031215611aa257600080fd5b823567ffffffffffffffff80821115611aba57600080fd5b818501915085601f830112611ace57600080fd5b8135602082821115611ae257611ae26119c5565b8160051b9250611af3818401611a29565b8281529284018101928181019089851115611b0d57600080fd5b948201945b84861015611b3257611b2386611a5a565b82529482019490820190611b12565b9650611b419050878201611a84565b9450505050509250929050565b600082601f830112611b5f57600080fd5b813567ffffffffffffffff811115611b7957611b796119c5565b611b8c601f8201601f1916602001611a29565b818152846020838601011115611ba157600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215611bd057600080fd5b813567ffffffffffffffff80821115611be857600080fd5b908301906101808286031215611bfd57600080fd5b611c056119db565b82358152611c1560208401611a5a565b6020820152611c2660408401611a5a565b60408201526060830135606082015260808301356080820152611c4b60a08401611a5a565b60a0820152611c5c60c08401611a84565b60c082015260e083810135908201526101008084013590820152610120808401359082015261014080840135908201526101608084013583811115611ca057600080fd5b611cac88828701611b4e565b918301919091525095945050505050565b600060208284031215611ccf57600080fd5b611cd882611a5a565b9392505050565b600060208284031215611cf157600080fd5b5035919050565b600060208284031215611d0a57600080fd5b813567ffffffffffffffff80821115611d2257600080fd5b908301906101608286031215611d3757600080fd5b611d3f611a05565b8235815260208301356020820152611d5960408401611a5a565b6040820152611d6a60608401611a5a565b6060820152611d7b60808401611a84565b608082015260a083013560a082015260c083013560c082015260e083013560e08201526101008084013581830152506101208084013583811115611dbe57600080fd5b611dca88828701611b4e565b8284015250506101408084013583811115611ca057600080fd5b634e487b7160e01b600052603260045260246000fd5b600060018201611e1a57634e487b7160e01b600052601160045260246000fd5b5060010190565b60208082526023908201527f6661696c656420746f20766572696679206578656375746f72207369676e617460408201526275726560e81b606082015260800190565b600060208284031215611e7657600080fd5b5051919050565b634e487b7160e01b600052602160045260246000fd5b6000825160005b81811015611eb45760208186018101518583015201611e9a565b506000920191825250919050565b600060208284031215611ed457600080fd5b8151611cd881611a7656fea264697066735822122026af8dcb0a4e70c48de31f87b1a9bfb8a70d2aeda7b2dda9ccda314d54511f3364736f6c63430008110033";

type ChainBridgeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChainBridgeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChainBridge__factory extends ContractFactory {
  constructor(...args: ChainBridgeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _fee: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ChainBridge> {
    return super.deploy(_fee, _token, overrides || {}) as Promise<ChainBridge>;
  }
  override getDeployTransaction(
    _fee: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_fee, _token, overrides || {});
  }
  override attach(address: string): ChainBridge {
    return super.attach(address) as ChainBridge;
  }
  override connect(signer: Signer): ChainBridge__factory {
    return super.connect(signer) as ChainBridge__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChainBridgeInterface {
    return new utils.Interface(_abi) as ChainBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainBridge {
    return new Contract(address, _abi, signerOrProvider) as ChainBridge;
  }
}
