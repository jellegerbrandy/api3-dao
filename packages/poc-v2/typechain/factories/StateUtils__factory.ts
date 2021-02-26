/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { StateUtils } from "../StateUtils";

export class StateUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(api3TokenAddress: string, overrides?: Overrides): Promise<StateUtils> {
    return super.deploy(
      api3TokenAddress,
      overrides || {}
    ) as Promise<StateUtils>;
  }
  getDeployTransaction(
    api3TokenAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(api3TokenAddress, overrides || {});
  }
  attach(address: string): StateUtils {
    return super.attach(address) as StateUtils;
  }
  connect(signer: Signer): StateUtils__factory {
    return super.connect(signer) as StateUtils__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StateUtils {
    return new Contract(address, _abi, signerOrProvider) as StateUtils;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "api3TokenAddress",
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
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newApr",
        type: "uint256",
      },
    ],
    name: "Epoch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toEpoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "locked",
        type: "uint256",
      },
    ],
    name: "UserUpdate",
    type: "event",
  },
  {
    inputs: [],
    name: "currentApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "genesisEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUserLocked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "targetEpoch",
        type: "uint256",
      },
    ],
    name: "getUserLockedAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastEpochPaid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "targetEpoch",
        type: "uint256",
      },
    ],
    name: "payReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardEpochLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardVestingPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewards",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "atBlock",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeTarget",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalShares",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unstakeWaitPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updateCoeff",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "targetEpoch",
        type: "uint256",
      },
    ],
    name: "updateUserLocked",
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
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "unstaked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "locked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vesting",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "delegating",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "unstakeScheduledFor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastUpdateEpoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "oldestLockedEpoch",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a0604052622625a060065563047868c06007556a084595161401484a000000600855620f424060095562093a80600a55600654600b553480156200004357600080fd5b506040516200195638038062001956833981810160405260208110156200006957600080fd5b8101908080519060200190929190505050600260405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600360405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200018562093a8042620001b660201b62000e8c1790919060201c565b60808181525050620001a962093a8042620001b660201b62000e8c1790919060201c565b60058190555050620002d3565b60006200020083836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506200020860201b60201c565b905092915050565b60008083118290620002b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156200027c5780820151818401526020810190506200025f565b50505050905090810190601f168015620002aa5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581620002c557fe5b049050809150509392505050565b608051611659620002fd60003980610a4b5280610d615280610ef85280610f2e52506116596000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063917656b9116100a2578063decac4f511610071578063decac4f5146103a4578063e14b5fac146103c2578063e7460a521461041a578063f301af4214610438578063f32ca51f1461048157610116565b8063917656b9146102bf57806392093b36146102dd578063a87430ba146102fb578063b70e6be61461038657610116565b806341cb8c20116100e957806341cb8c20146101ee5780634eb05c47146102375780634f322ae8146102555780637702059e14610273578063784b3c5d146102a157610116565b8063106644131461011b57806313f2dad01461013957806318dbf7331461018257806320a0a0e9146101d0575b600080fd5b6101236104e3565b6040518082815260200191505060405180910390f35b6101656004803603602081101561014f57600080fd5b81019080803590602001909291905050506104e9565b604051808381526020018281526020019250505060405180910390f35b6101ce6004803603604081101561019857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061051a565b005b6101d86105ed565b6040518082815260200191505060405180910390f35b61021a6004803603602081101561020457600080fd5b81019080803590602001909291905050506105f4565b604051808381526020018281526020019250505060405180910390f35b61023f610625565b6040518082815260200191505060405180910390f35b61025d61062b565b6040518082815260200191505060405180910390f35b61029f6004803603602081101561028957600080fd5b8101908080359060200190929190505050610631565b005b6102a96109e2565b6040518082815260200191505060405180910390f35b6102c76109e8565b6040518082815260200191505060405180910390f35b6102e56109ee565b6040518082815260200191505060405180910390f35b61033d6004803603602081101561031157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109f4565b6040518089815260200188815260200187815260200186151581526020018581526020018481526020018381526020018281526020019850505050505050505060405180910390f35b61038e610a49565b6040518082815260200191505060405180910390f35b6103ac610a6d565b6040518082815260200191505060405180910390f35b610404600480360360208110156103d857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a72565b6040518082815260200191505060405180910390f35b610422610a9a565b6040518082815260200191505060405180910390f35b6104646004803603602081101561044e57600080fd5b8101908080359060200190929190505050610aa0565b604051808381526020018281526020019250505060405180910390f35b6104cd6004803603604081101561049757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ac4565b6040518082815260200191505060405180910390f35b60095481565b600281815481106104f657fe5b90600052602060002090600202016000915090508060000154908060010154905082565b60006105268383610ac4565b90506000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905081816002018190555061057c610ed6565b81600b01819055508281600a01819055508373ffffffffffffffffffffffffffffffffffffffff167f6aa46aa24dd78d66eaff80fdc122ff406f1b5afe46204d8008b60282c8ec79af848360020154604051808381526020018281526020019250505060405180910390a250505050565b62093a8081565b6003818154811061060157fe5b90600052602060002090600202016000915090508060000154908060010154905082565b60085481565b600b5481565b8060055410156109df5760006106536001600554610f6d90919063ffffffff16565b905060006106616003610ff5565b905060005b8383116109775760008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bbb30c5d306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156106f457600080fd5b505afa158015610708573d6000803e3d6000fd5b505050506040513d602081101561071e57600080fd5b81019080805190602001909291905050506107c2576040518060400160405280600081526020014381525060046000858152602001908152602001600020600082015181600001556020820151816001015590505083600581905550827fce8f0c0868b3497f8bb005e8ee9d6f967e32053f5290e2c1c3390e106b92cde46000600b54604051808381526020018281526020019250505060405180910390a2610972565b6107cb82611008565b600061080b6305f5e1006107fd60346107ef600b54886111a790919063ffffffff16565b610e8c90919063ffffffff16565b610e8c90919063ffffffff16565b905060405180604001604052808281526020014381525060046000868152602001908152602001600020600082015181600001556020820151816001015590505060008111156109185760008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1930836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156108e657600080fd5b505af11580156108fa573d6000803e3d6000fd5b505050506109118184610f6d90919063ffffffff16565b9250600191505b837fce8f0c0868b3497f8bb005e8ee9d6f967e32053f5290e2c1c3390e106b92cde482600b54604051808381526020018281526020019250505060405180910390a261096e600185610f6d90919063ffffffff16565b9350505b610666565b8260058190555080156109db5760036040518060400160405280438152602001848152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550505b5050505b50565b60065481565b60055481565b60075481565b60016020528060005260406000206000915090508060000154908060020154908060030154908060040160009054906101000a900460ff169080600701549080600801549080600a01549080600b0154905088565b7f000000000000000000000000000000000000000000000000000000000000000081565b603481565b6000610a9382610a8e62093a8042610e8c90919063ffffffff16565b610ac4565b9050919050565b600a5481565b60046020528060005260406000206000915090508060000154908060010154905082565b600080610acf61122d565b9050610ada81610631565b6000610af262093a8042610e8c90919063ffffffff16565b90506000610afe610ed6565b90506000600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600081600a01549050838711158015610b5b57508087115b8015610b6657508287115b610bd8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f496e76616c69642074617267657400000000000000000000000000000000000081525060200191505060405180910390fd5b82811015610c96576000808490505b888111610c885760006004600083815260200190815260200160002090506000610c16600283600101546112a0565b90506000610c2b8760010184600101546112a0565b9050610c68610c5983610c4b8487600001546111a790919063ffffffff16565b610e8c90919063ffffffff16565b86610f6d90919063ffffffff16565b9450505050610c81600182610f6d90919063ffffffff16565b9050610be7565b508096505050505050610e85565b6000826002015490506000610cb5600184610f6d90919063ffffffff16565b90505b888111610d595760006004600083815260200190815260200160002090506000610ce7600283600101546112a0565b90506000610cfc8760010184600101546112a0565b9050610d39610d2a83610d1c8487600001546111a790919063ffffffff16565b610e8c90919063ffffffff16565b86610f6d90919063ffffffff16565b9450505050610d52600182610f6d90919063ffffffff16565b9050610cb8565b50610d8e60347f0000000000000000000000000000000000000000000000000000000000000000610f6d90919063ffffffff16565b8810610e7c57600083600b015490505b610db260018661143290919063ffffffff16565b8111610e7a57600060046000610dd260348561143290919063ffffffff16565b815260200190815260200160002090506000610df3600283600101546112a0565b90506000610e088760010184600101546112a0565b90506000610e3583610e278487600001546111a790919063ffffffff16565b610e8c90919063ffffffff16565b9050808611610e45576000610e59565b610e58818761143290919063ffffffff16565b5b955050505050610e73600182610f6d90919063ffffffff16565b9050610d9e565b505b80965050505050505b5092915050565b6000610ece83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061147c565b905092915050565b600080610eef62093a8042610e8c90919063ffffffff16565b9050610f2560347f0000000000000000000000000000000000000000000000000000000000000000610f6d90919063ffffffff16565b811015610f52577f0000000000000000000000000000000000000000000000000000000000000000610f67565b610f6660348261143290919063ffffffff16565b5b91505090565b600080828401905083811015610feb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600061100182436112a0565b9050919050565b6000600854141561102157600654600b819055506111a4565b60006008548210611046576110416008548361143290919063ffffffff16565b61105c565b61105b8260085461143290919063ffffffff16565b5b9050600061108b60085461107d6305f5e100856111a790919063ffffffff16565b610e8c90919063ffffffff16565b905060006110b9620f42406110ab600954856111a790919063ffffffff16565b610e8c90919063ffffffff16565b9050600060085485101561110f576111086305f5e1006110fa6110e9856305f5e100610f6d90919063ffffffff16565b600b546111a790919063ffffffff16565b610e8c90919063ffffffff16565b9050611166565b816305f5e10011611121576000611163565b6111626305f5e100611154611143856305f5e10061143290919063ffffffff16565b600b546111a790919063ffffffff16565b610e8c90919063ffffffff16565b5b90505b60065481101561117e57600654600b8190555061119f565b60075481111561119657600754600b8190555061119e565b80600b819055505b5b505050505b50565b6000808314156111ba5760009050611227565b60008284029050828482816111cb57fe5b0414611222576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806116036021913960400191505060405180910390fd5b809150505b92915050565b60008061124662093a8042610e8c90919063ffffffff16565b9050600061125f6005548361143290919063ffffffff16565b9050600581111561129757611292611281600283610e8c90919063ffffffff16565b600554610f6d90919063ffffffff16565b611299565b815b9250505090565b600080838054905014156112b7576000905061142c565b826112d06001858054905061143290919063ffffffff16565b815481106112da57fe5b906000526020600020906002020160000154821061132e578261130b6001858054905061143290919063ffffffff16565b8154811061131557fe5b906000526020600020906002020160010154905061142c565b8260008154811061133b57fe5b90600052602060002090600202016000015482101561135d576000905061142c565b6000806113786001868054905061143290919063ffffffff16565b90505b818111156114095760006113be60026113b060016113a28787610f6d90919063ffffffff16565b610f6d90919063ffffffff16565b610e8c90919063ffffffff16565b9050848682815481106113cd57fe5b906000526020600020906002020160000154116113ec57809250611403565b61140060018261143290919063ffffffff16565b91505b5061137b565b84828154811061141557fe5b906000526020600020906002020160010154925050505b92915050565b600061147483836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611542565b905092915050565b60008083118290611528576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156114ed5780820151818401526020810190506114d2565b50505050905090810190601f16801561151a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161153457fe5b049050809150509392505050565b60008383111582906115ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156115b4578082015181840152602081019050611599565b50505050905090810190601f1680156115e15780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838503905080915050939250505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220717905719330cfed45ce0f8b0b65b8594c07d730c7212cea9049dbb5e916645a64736f6c634300060c0033";
