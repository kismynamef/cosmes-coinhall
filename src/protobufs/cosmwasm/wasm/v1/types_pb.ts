// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmwasm/wasm/v1/types.proto (package cosmwasm.wasm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * AccessType permission types
 *
 * @generated from enum cosmwasm.wasm.v1.AccessType
 */
export enum AccessType {
  /**
   * AccessTypeUnspecified placeholder for empty value
   *
   * @generated from enum value: ACCESS_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * AccessTypeNobody forbidden
   *
   * @generated from enum value: ACCESS_TYPE_NOBODY = 1;
   */
  NOBODY = 1,

  /**
   * AccessTypeEverybody unrestricted
   *
   * @generated from enum value: ACCESS_TYPE_EVERYBODY = 3;
   */
  EVERYBODY = 3,

  /**
   * AccessTypeAnyOfAddresses allow any of the addresses
   *
   * @generated from enum value: ACCESS_TYPE_ANY_OF_ADDRESSES = 4;
   */
  ANY_OF_ADDRESSES = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(AccessType)
proto3.util.setEnumType(AccessType, "cosmwasm.wasm.v1.AccessType", [
  { no: 0, name: "ACCESS_TYPE_UNSPECIFIED" },
  { no: 1, name: "ACCESS_TYPE_NOBODY" },
  { no: 3, name: "ACCESS_TYPE_EVERYBODY" },
  { no: 4, name: "ACCESS_TYPE_ANY_OF_ADDRESSES" },
]);

/**
 * ContractCodeHistoryOperationType actions that caused a code change
 *
 * @generated from enum cosmwasm.wasm.v1.ContractCodeHistoryOperationType
 */
export enum ContractCodeHistoryOperationType {
  /**
   * ContractCodeHistoryOperationTypeUnspecified placeholder for empty value
   *
   * @generated from enum value: CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * ContractCodeHistoryOperationTypeInit on chain contract instantiation
   *
   * @generated from enum value: CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1;
   */
  INIT = 1,

  /**
   * ContractCodeHistoryOperationTypeMigrate code migration
   *
   * @generated from enum value: CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2;
   */
  MIGRATE = 2,

  /**
   * ContractCodeHistoryOperationTypeGenesis based on genesis data
   *
   * @generated from enum value: CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3;
   */
  GENESIS = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(ContractCodeHistoryOperationType)
proto3.util.setEnumType(ContractCodeHistoryOperationType, "cosmwasm.wasm.v1.ContractCodeHistoryOperationType", [
  { no: 0, name: "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED" },
  { no: 1, name: "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT" },
  { no: 2, name: "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE" },
  { no: 3, name: "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS" },
]);

/**
 * AccessTypeParam
 *
 * @generated from message cosmwasm.wasm.v1.AccessTypeParam
 */
export class AccessTypeParam extends Message<AccessTypeParam> {
  /**
   * @generated from field: cosmwasm.wasm.v1.AccessType value = 1;
   */
  value = AccessType.UNSPECIFIED;

  constructor(data?: PartialMessage<AccessTypeParam>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.AccessTypeParam";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "enum", T: proto3.getEnumType(AccessType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccessTypeParam {
    return new AccessTypeParam().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccessTypeParam {
    return new AccessTypeParam().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccessTypeParam {
    return new AccessTypeParam().fromJsonString(jsonString, options);
  }

  static equals(a: AccessTypeParam | PlainMessage<AccessTypeParam> | undefined, b: AccessTypeParam | PlainMessage<AccessTypeParam> | undefined): boolean {
    return proto3.util.equals(AccessTypeParam, a, b);
  }
}

/**
 * AccessConfig access control type.
 *
 * @generated from message cosmwasm.wasm.v1.AccessConfig
 */
export class AccessConfig extends Message<AccessConfig> {
  /**
   * @generated from field: cosmwasm.wasm.v1.AccessType permission = 1;
   */
  permission = AccessType.UNSPECIFIED;

  /**
   * @generated from field: repeated string addresses = 3;
   */
  addresses: string[] = [];

  constructor(data?: PartialMessage<AccessConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.AccessConfig";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "permission", kind: "enum", T: proto3.getEnumType(AccessType) },
    { no: 3, name: "addresses", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccessConfig {
    return new AccessConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccessConfig {
    return new AccessConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccessConfig {
    return new AccessConfig().fromJsonString(jsonString, options);
  }

  static equals(a: AccessConfig | PlainMessage<AccessConfig> | undefined, b: AccessConfig | PlainMessage<AccessConfig> | undefined): boolean {
    return proto3.util.equals(AccessConfig, a, b);
  }
}

/**
 * Params defines the set of wasm parameters.
 *
 * @generated from message cosmwasm.wasm.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * @generated from field: cosmwasm.wasm.v1.AccessConfig code_upload_access = 1;
   */
  codeUploadAccess?: AccessConfig;

  /**
   * @generated from field: cosmwasm.wasm.v1.AccessType instantiate_default_permission = 2;
   */
  instantiateDefaultPermission = AccessType.UNSPECIFIED;

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "code_upload_access", kind: "message", T: AccessConfig },
    { no: 2, name: "instantiate_default_permission", kind: "enum", T: proto3.getEnumType(AccessType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params {
    return new Params().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJsonString(jsonString, options);
  }

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean {
    return proto3.util.equals(Params, a, b);
  }
}

/**
 * CodeInfo is data for the uploaded contract WASM code
 *
 * @generated from message cosmwasm.wasm.v1.CodeInfo
 */
export class CodeInfo extends Message<CodeInfo> {
  /**
   * CodeHash is the unique identifier created by wasmvm
   *
   * @generated from field: bytes code_hash = 1;
   */
  codeHash = new Uint8Array(0);

  /**
   * Creator address who initially stored the code
   *
   * @generated from field: string creator = 2;
   */
  creator = "";

  /**
   * InstantiateConfig access control to apply on contract creation, optional
   *
   * @generated from field: cosmwasm.wasm.v1.AccessConfig instantiate_config = 5;
   */
  instantiateConfig?: AccessConfig;

  constructor(data?: PartialMessage<CodeInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.CodeInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "code_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "instantiate_config", kind: "message", T: AccessConfig },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CodeInfo {
    return new CodeInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CodeInfo {
    return new CodeInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CodeInfo {
    return new CodeInfo().fromJsonString(jsonString, options);
  }

  static equals(a: CodeInfo | PlainMessage<CodeInfo> | undefined, b: CodeInfo | PlainMessage<CodeInfo> | undefined): boolean {
    return proto3.util.equals(CodeInfo, a, b);
  }
}

/**
 * ContractInfo stores a WASM contract instance
 *
 * @generated from message cosmwasm.wasm.v1.ContractInfo
 */
export class ContractInfo extends Message<ContractInfo> {
  /**
   * CodeID is the reference to the stored Wasm code
   *
   * @generated from field: uint64 code_id = 1;
   */
  codeId = protoInt64.zero;

  /**
   * Creator address who initially instantiated the contract
   *
   * @generated from field: string creator = 2;
   */
  creator = "";

  /**
   * Admin is an optional address that can execute migrations
   *
   * @generated from field: string admin = 3;
   */
  admin = "";

  /**
   * Label is optional metadata to be stored with a contract instance.
   *
   * @generated from field: string label = 4;
   */
  label = "";

  /**
   * Created Tx position when the contract was instantiated.
   *
   * @generated from field: cosmwasm.wasm.v1.AbsoluteTxPosition created = 5;
   */
  created?: AbsoluteTxPosition;

  /**
   * @generated from field: string ibc_port_id = 6;
   */
  ibcPortId = "";

  /**
   * Extension is an extension point to store custom metadata within the
   * persistence model.
   *
   * @generated from field: google.protobuf.Any extension = 7;
   */
  extension?: Any;

  constructor(data?: PartialMessage<ContractInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.ContractInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "code_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "created", kind: "message", T: AbsoluteTxPosition },
    { no: 6, name: "ibc_port_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "extension", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContractInfo {
    return new ContractInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContractInfo {
    return new ContractInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContractInfo {
    return new ContractInfo().fromJsonString(jsonString, options);
  }

  static equals(a: ContractInfo | PlainMessage<ContractInfo> | undefined, b: ContractInfo | PlainMessage<ContractInfo> | undefined): boolean {
    return proto3.util.equals(ContractInfo, a, b);
  }
}

/**
 * ContractCodeHistoryEntry metadata to a contract.
 *
 * @generated from message cosmwasm.wasm.v1.ContractCodeHistoryEntry
 */
export class ContractCodeHistoryEntry extends Message<ContractCodeHistoryEntry> {
  /**
   * @generated from field: cosmwasm.wasm.v1.ContractCodeHistoryOperationType operation = 1;
   */
  operation = ContractCodeHistoryOperationType.UNSPECIFIED;

  /**
   * CodeID is the reference to the stored WASM code
   *
   * @generated from field: uint64 code_id = 2;
   */
  codeId = protoInt64.zero;

  /**
   * Updated Tx position when the operation was executed.
   *
   * @generated from field: cosmwasm.wasm.v1.AbsoluteTxPosition updated = 3;
   */
  updated?: AbsoluteTxPosition;

  /**
   * @generated from field: bytes msg = 4;
   */
  msg = new Uint8Array(0);

  constructor(data?: PartialMessage<ContractCodeHistoryEntry>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.ContractCodeHistoryEntry";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "operation", kind: "enum", T: proto3.getEnumType(ContractCodeHistoryOperationType) },
    { no: 2, name: "code_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "updated", kind: "message", T: AbsoluteTxPosition },
    { no: 4, name: "msg", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContractCodeHistoryEntry {
    return new ContractCodeHistoryEntry().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContractCodeHistoryEntry {
    return new ContractCodeHistoryEntry().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContractCodeHistoryEntry {
    return new ContractCodeHistoryEntry().fromJsonString(jsonString, options);
  }

  static equals(a: ContractCodeHistoryEntry | PlainMessage<ContractCodeHistoryEntry> | undefined, b: ContractCodeHistoryEntry | PlainMessage<ContractCodeHistoryEntry> | undefined): boolean {
    return proto3.util.equals(ContractCodeHistoryEntry, a, b);
  }
}

/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 *
 * @generated from message cosmwasm.wasm.v1.AbsoluteTxPosition
 */
export class AbsoluteTxPosition extends Message<AbsoluteTxPosition> {
  /**
   * BlockHeight is the block the contract was created at
   *
   * @generated from field: uint64 block_height = 1;
   */
  blockHeight = protoInt64.zero;

  /**
   * TxIndex is a monotonic counter within the block (actual transaction index,
   * or gas consumed)
   *
   * @generated from field: uint64 tx_index = 2;
   */
  txIndex = protoInt64.zero;

  constructor(data?: PartialMessage<AbsoluteTxPosition>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.AbsoluteTxPosition";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "block_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "tx_index", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbsoluteTxPosition {
    return new AbsoluteTxPosition().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbsoluteTxPosition {
    return new AbsoluteTxPosition().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbsoluteTxPosition {
    return new AbsoluteTxPosition().fromJsonString(jsonString, options);
  }

  static equals(a: AbsoluteTxPosition | PlainMessage<AbsoluteTxPosition> | undefined, b: AbsoluteTxPosition | PlainMessage<AbsoluteTxPosition> | undefined): boolean {
    return proto3.util.equals(AbsoluteTxPosition, a, b);
  }
}

/**
 * Model is a struct that holds a KV pair
 *
 * @generated from message cosmwasm.wasm.v1.Model
 */
export class Model extends Message<Model> {
  /**
   * hex-encode key to read it better (this is often ascii)
   *
   * @generated from field: bytes key = 1;
   */
  key = new Uint8Array(0);

  /**
   * base64-encode raw value
   *
   * @generated from field: bytes value = 2;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<Model>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.Model";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Model {
    return new Model().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Model {
    return new Model().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Model {
    return new Model().fromJsonString(jsonString, options);
  }

  static equals(a: Model | PlainMessage<Model> | undefined, b: Model | PlainMessage<Model> | undefined): boolean {
    return proto3.util.equals(Model, a, b);
  }
}

