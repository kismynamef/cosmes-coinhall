// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/peggy/v1/genesis.proto (package injective.peggy.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { ERC20ToDenom, Valset } from "./types_pb.js";
import { MsgConfirmBatch, MsgSetOrchestratorAddresses, MsgValsetConfirm } from "./msgs_pb.js";
import { OutgoingTransferTx, OutgoingTxBatch } from "./batch_pb.js";
import { Attestation } from "./attestation_pb.js";

/**
 * GenesisState struct
 *
 * @generated from message injective.peggy.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * @generated from field: injective.peggy.v1.Params params = 1;
   */
  params?: Params;

  /**
   * @generated from field: uint64 last_observed_nonce = 2;
   */
  lastObservedNonce = protoInt64.zero;

  /**
   * @generated from field: repeated injective.peggy.v1.Valset valsets = 3;
   */
  valsets: Valset[] = [];

  /**
   * @generated from field: repeated injective.peggy.v1.MsgValsetConfirm valset_confirms = 4;
   */
  valsetConfirms: MsgValsetConfirm[] = [];

  /**
   * @generated from field: repeated injective.peggy.v1.OutgoingTxBatch batches = 5;
   */
  batches: OutgoingTxBatch[] = [];

  /**
   * @generated from field: repeated injective.peggy.v1.MsgConfirmBatch batch_confirms = 6;
   */
  batchConfirms: MsgConfirmBatch[] = [];

  /**
   * @generated from field: repeated injective.peggy.v1.Attestation attestations = 7;
   */
  attestations: Attestation[] = [];

  /**
   * @generated from field: repeated injective.peggy.v1.MsgSetOrchestratorAddresses orchestrator_addresses = 8;
   */
  orchestratorAddresses: MsgSetOrchestratorAddresses[] = [];

  /**
   * @generated from field: repeated injective.peggy.v1.ERC20ToDenom erc20_to_denoms = 9;
   */
  erc20ToDenoms: ERC20ToDenom[] = [];

  /**
   * @generated from field: repeated injective.peggy.v1.OutgoingTransferTx unbatched_transfers = 10;
   */
  unbatchedTransfers: OutgoingTransferTx[] = [];

  /**
   * @generated from field: uint64 last_observed_ethereum_height = 11;
   */
  lastObservedEthereumHeight = protoInt64.zero;

  /**
   * @generated from field: uint64 last_outgoing_batch_id = 12;
   */
  lastOutgoingBatchId = protoInt64.zero;

  /**
   * @generated from field: uint64 last_outgoing_pool_id = 13;
   */
  lastOutgoingPoolId = protoInt64.zero;

  /**
   * @generated from field: injective.peggy.v1.Valset last_observed_valset = 14;
   */
  lastObservedValset?: Valset;

  /**
   * @generated from field: repeated string ethereum_blacklist = 15;
   */
  ethereumBlacklist: string[] = [];

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.peggy.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "last_observed_nonce", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "valsets", kind: "message", T: Valset, repeated: true },
    { no: 4, name: "valset_confirms", kind: "message", T: MsgValsetConfirm, repeated: true },
    { no: 5, name: "batches", kind: "message", T: OutgoingTxBatch, repeated: true },
    { no: 6, name: "batch_confirms", kind: "message", T: MsgConfirmBatch, repeated: true },
    { no: 7, name: "attestations", kind: "message", T: Attestation, repeated: true },
    { no: 8, name: "orchestrator_addresses", kind: "message", T: MsgSetOrchestratorAddresses, repeated: true },
    { no: 9, name: "erc20_to_denoms", kind: "message", T: ERC20ToDenom, repeated: true },
    { no: 10, name: "unbatched_transfers", kind: "message", T: OutgoingTransferTx, repeated: true },
    { no: 11, name: "last_observed_ethereum_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 12, name: "last_outgoing_batch_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 13, name: "last_outgoing_pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 14, name: "last_observed_valset", kind: "message", T: Valset },
    { no: 15, name: "ethereum_blacklist", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState {
    return new GenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean {
    return proto3.util.equals(GenesisState, a, b);
  }
}
