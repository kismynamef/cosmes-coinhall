// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/permissions/v1beta1/permissions.proto (package injective.permissions.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * each Action enum value should be a power of two
 *
 * @generated from enum injective.permissions.v1beta1.Action
 */
export enum Action {
  /**
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: MINT = 1;
   */
  MINT = 1,

  /**
   * @generated from enum value: RECEIVE = 2;
   */
  RECEIVE = 2,

  /**
   * @generated from enum value: BURN = 4;
   */
  BURN = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(Action)
proto3.util.setEnumType(Action, "injective.permissions.v1beta1.Action", [
  { no: 0, name: "UNSPECIFIED" },
  { no: 1, name: "MINT" },
  { no: 2, name: "RECEIVE" },
  { no: 4, name: "BURN" },
]);

/**
 * Namespace defines a permissions namespace
 *
 * @generated from message injective.permissions.v1beta1.Namespace
 */
export class Namespace extends Message<Namespace> {
  /**
   * tokenfactory denom to which this namespace applies to
   *
   * @generated from field: string denom = 1;
   */
  denom = "";

  /**
   * address of smart contract to apply code-based restrictions
   *
   * @generated from field: string wasm_hook = 2;
   */
  wasmHook = "";

  /**
   * @generated from field: bool mints_paused = 3;
   */
  mintsPaused = false;

  /**
   * @generated from field: bool sends_paused = 4;
   */
  sendsPaused = false;

  /**
   * @generated from field: bool burns_paused = 5;
   */
  burnsPaused = false;

  /**
   * permissions for each role
   *
   * @generated from field: map<string, uint32> role_permissions = 6;
   */
  rolePermissions: { [key: string]: number } = {};

  /**
   * @generated from field: map<string, injective.permissions.v1beta1.Roles> address_roles = 7;
   */
  addressRoles: { [key: string]: Roles } = {};

  constructor(data?: PartialMessage<Namespace>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.permissions.v1beta1.Namespace";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "wasm_hook", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "mints_paused", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "sends_paused", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "burns_paused", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "role_permissions", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 13 /* ScalarType.UINT32 */} },
    { no: 7, name: "address_roles", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Roles} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Namespace {
    return new Namespace().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Namespace {
    return new Namespace().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Namespace {
    return new Namespace().fromJsonString(jsonString, options);
  }

  static equals(a: Namespace | PlainMessage<Namespace> | undefined, b: Namespace | PlainMessage<Namespace> | undefined): boolean {
    return proto3.util.equals(Namespace, a, b);
  }
}

/**
 * Role is only used for storage
 *
 * @generated from message injective.permissions.v1beta1.Role
 */
export class Role extends Message<Role> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: uint32 permissions = 2;
   */
  permissions = 0;

  constructor(data?: PartialMessage<Role>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.permissions.v1beta1.Role";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "permissions", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Role {
    return new Role().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Role {
    return new Role().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Role {
    return new Role().fromJsonString(jsonString, options);
  }

  static equals(a: Role | PlainMessage<Role> | undefined, b: Role | PlainMessage<Role> | undefined): boolean {
    return proto3.util.equals(Role, a, b);
  }
}

/**
 * @generated from message injective.permissions.v1beta1.Roles
 */
export class Roles extends Message<Roles> {
  /**
   * @generated from field: repeated string roles = 1;
   */
  roles: string[] = [];

  constructor(data?: PartialMessage<Roles>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.permissions.v1beta1.Roles";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "roles", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Roles {
    return new Roles().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Roles {
    return new Roles().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Roles {
    return new Roles().fromJsonString(jsonString, options);
  }

  static equals(a: Roles | PlainMessage<Roles> | undefined, b: Roles | PlainMessage<Roles> | undefined): boolean {
    return proto3.util.equals(Roles, a, b);
  }
}

/**
 * used in storage
 *
 * @generated from message injective.permissions.v1beta1.RoleIDs
 */
export class RoleIDs extends Message<RoleIDs> {
  /**
   * @generated from field: repeated uint32 role_ids = 1;
   */
  roleIds: number[] = [];

  constructor(data?: PartialMessage<RoleIDs>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.permissions.v1beta1.RoleIDs";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "role_ids", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoleIDs {
    return new RoleIDs().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoleIDs {
    return new RoleIDs().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoleIDs {
    return new RoleIDs().fromJsonString(jsonString, options);
  }

  static equals(a: RoleIDs | PlainMessage<RoleIDs> | undefined, b: RoleIDs | PlainMessage<RoleIDs> | undefined): boolean {
    return proto3.util.equals(RoleIDs, a, b);
  }
}

/**
 * @generated from message injective.permissions.v1beta1.Voucher
 */
export class Voucher extends Message<Voucher> {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 1;
   */
  coins: Coin[] = [];

  constructor(data?: PartialMessage<Voucher>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.permissions.v1beta1.Voucher";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "coins", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Voucher {
    return new Voucher().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Voucher {
    return new Voucher().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Voucher {
    return new Voucher().fromJsonString(jsonString, options);
  }

  static equals(a: Voucher | PlainMessage<Voucher> | undefined, b: Voucher | PlainMessage<Voucher> | undefined): boolean {
    return proto3.util.equals(Voucher, a, b);
  }
}

