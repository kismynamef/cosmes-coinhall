// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/peggy/v1/proposal.proto (package injective.peggy.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message injective.peggy.v1.BlacklistEthereumAddressesProposal
 */
export class BlacklistEthereumAddressesProposal extends Message<BlacklistEthereumAddressesProposal> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: repeated string blacklist_addresses = 3;
   */
  blacklistAddresses: string[] = [];

  constructor(data?: PartialMessage<BlacklistEthereumAddressesProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.peggy.v1.BlacklistEthereumAddressesProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "blacklist_addresses", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlacklistEthereumAddressesProposal {
    return new BlacklistEthereumAddressesProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlacklistEthereumAddressesProposal {
    return new BlacklistEthereumAddressesProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlacklistEthereumAddressesProposal {
    return new BlacklistEthereumAddressesProposal().fromJsonString(jsonString, options);
  }

  static equals(a: BlacklistEthereumAddressesProposal | PlainMessage<BlacklistEthereumAddressesProposal> | undefined, b: BlacklistEthereumAddressesProposal | PlainMessage<BlacklistEthereumAddressesProposal> | undefined): boolean {
    return proto3.util.equals(BlacklistEthereumAddressesProposal, a, b);
  }
}

/**
 * @generated from message injective.peggy.v1.RevokeEthereumBlacklistProposal
 */
export class RevokeEthereumBlacklistProposal extends Message<RevokeEthereumBlacklistProposal> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: repeated string blacklist_addresses = 3;
   */
  blacklistAddresses: string[] = [];

  constructor(data?: PartialMessage<RevokeEthereumBlacklistProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.peggy.v1.RevokeEthereumBlacklistProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "blacklist_addresses", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RevokeEthereumBlacklistProposal {
    return new RevokeEthereumBlacklistProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RevokeEthereumBlacklistProposal {
    return new RevokeEthereumBlacklistProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RevokeEthereumBlacklistProposal {
    return new RevokeEthereumBlacklistProposal().fromJsonString(jsonString, options);
  }

  static equals(a: RevokeEthereumBlacklistProposal | PlainMessage<RevokeEthereumBlacklistProposal> | undefined, b: RevokeEthereumBlacklistProposal | PlainMessage<RevokeEthereumBlacklistProposal> | undefined): boolean {
    return proto3.util.equals(RevokeEthereumBlacklistProposal, a, b);
  }
}

