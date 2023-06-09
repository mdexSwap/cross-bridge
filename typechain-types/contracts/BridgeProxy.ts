/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface BridgeProxyInterface extends utils.Interface {
  functions: {
    "BRIDGE_DEPOSIT_TYPEHASH()": FunctionFragment;
    "BRIDGE_VAULT_EXECUTOR_TYPEHASH()": FunctionFragment;
    "BRIDGE_VAULT_VERIFER_TYPEHASH()": FunctionFragment;
    "executors(address)": FunctionFragment;
    "feeTo()": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setBridgeTokens(address[],bool)": FunctionFragment;
    "setExecutors(address[],bool)": FunctionFragment;
    "setFeeTo(address)": FunctionFragment;
    "setVerifiers(address[],bool)": FunctionFragment;
    "supportTokens(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "verifiers(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BRIDGE_DEPOSIT_TYPEHASH"
      | "BRIDGE_VAULT_EXECUTOR_TYPEHASH"
      | "BRIDGE_VAULT_VERIFER_TYPEHASH"
      | "executors"
      | "feeTo"
      | "owner"
      | "pause"
      | "paused"
      | "renounceOwnership"
      | "setBridgeTokens"
      | "setExecutors"
      | "setFeeTo"
      | "setVerifiers"
      | "supportTokens"
      | "transferOwnership"
      | "unpause"
      | "verifiers"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BRIDGE_DEPOSIT_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BRIDGE_VAULT_EXECUTOR_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BRIDGE_VAULT_VERIFER_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executors",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBridgeTokens",
    values: [PromiseOrValue<string>[], PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setExecutors",
    values: [PromiseOrValue<string>[], PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeTo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setVerifiers",
    values: [PromiseOrValue<string>[], PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportTokens",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "verifiers",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "BRIDGE_DEPOSIT_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BRIDGE_VAULT_EXECUTOR_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BRIDGE_VAULT_VERIFER_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "executors", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBridgeTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExecutors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFeeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setVerifiers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verifiers", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface BridgeProxy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BridgeProxyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BRIDGE_DEPOSIT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    BRIDGE_VAULT_EXECUTOR_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<[string]>;

    BRIDGE_VAULT_VERIFER_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    executors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    feeTo(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBridgeTokens(
      _tokens: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setExecutors(
      _executors: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFeeTo(
      _newFeeTo: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setVerifiers(
      _verifiers: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verifiers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  BRIDGE_DEPOSIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  BRIDGE_VAULT_EXECUTOR_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  BRIDGE_VAULT_VERIFER_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  executors(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  feeTo(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBridgeTokens(
    _tokens: PromiseOrValue<string>[],
    _status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setExecutors(
    _executors: PromiseOrValue<string>[],
    _status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFeeTo(
    _newFeeTo: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setVerifiers(
    _verifiers: PromiseOrValue<string>[],
    _status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportTokens(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verifiers(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    BRIDGE_DEPOSIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    BRIDGE_VAULT_EXECUTOR_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    BRIDGE_VAULT_VERIFER_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    executors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    feeTo(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setBridgeTokens(
      _tokens: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setExecutors(
      _executors: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeTo(
      _newFeeTo: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setVerifiers(
      _verifiers: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    verifiers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    BRIDGE_DEPOSIT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    BRIDGE_VAULT_EXECUTOR_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    BRIDGE_VAULT_VERIFER_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feeTo(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBridgeTokens(
      _tokens: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setExecutors(
      _executors: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFeeTo(
      _newFeeTo: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setVerifiers(
      _verifiers: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verifiers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BRIDGE_DEPOSIT_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    BRIDGE_VAULT_EXECUTOR_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    BRIDGE_VAULT_VERIFER_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBridgeTokens(
      _tokens: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setExecutors(
      _executors: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFeeTo(
      _newFeeTo: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setVerifiers(
      _verifiers: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verifiers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
