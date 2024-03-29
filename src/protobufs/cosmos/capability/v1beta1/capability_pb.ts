// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/capability/v1beta1/capability.proto (package cosmos.capability.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 *
 * @generated from message cosmos.capability.v1beta1.Capability
 */
export class Capability extends Message<Capability> {
  /**
   * @generated from field: uint64 index = 1;
   */
  index = protoInt64.zero;

  constructor(data?: PartialMessage<Capability>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.capability.v1beta1.Capability";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "index", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Capability {
    return new Capability().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Capability {
    return new Capability().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Capability {
    return new Capability().fromJsonString(jsonString, options);
  }

  static equals(a: Capability | PlainMessage<Capability> | undefined, b: Capability | PlainMessage<Capability> | undefined): boolean {
    return proto3.util.equals(Capability, a, b);
  }
}

/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 *
 * @generated from message cosmos.capability.v1beta1.Owner
 */
export class Owner extends Message<Owner> {
  /**
   * @generated from field: string module = 1;
   */
  module = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  constructor(data?: PartialMessage<Owner>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.capability.v1beta1.Owner";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "module", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Owner {
    return new Owner().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Owner {
    return new Owner().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Owner {
    return new Owner().fromJsonString(jsonString, options);
  }

  static equals(a: Owner | PlainMessage<Owner> | undefined, b: Owner | PlainMessage<Owner> | undefined): boolean {
    return proto3.util.equals(Owner, a, b);
  }
}

/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 *
 * @generated from message cosmos.capability.v1beta1.CapabilityOwners
 */
export class CapabilityOwners extends Message<CapabilityOwners> {
  /**
   * @generated from field: repeated cosmos.capability.v1beta1.Owner owners = 1;
   */
  owners: Owner[] = [];

  constructor(data?: PartialMessage<CapabilityOwners>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.capability.v1beta1.CapabilityOwners";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owners", kind: "message", T: Owner, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CapabilityOwners {
    return new CapabilityOwners().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CapabilityOwners {
    return new CapabilityOwners().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CapabilityOwners {
    return new CapabilityOwners().fromJsonString(jsonString, options);
  }

  static equals(a: CapabilityOwners | PlainMessage<CapabilityOwners> | undefined, b: CapabilityOwners | PlainMessage<CapabilityOwners> | undefined): boolean {
    return proto3.util.equals(CapabilityOwners, a, b);
  }
}

