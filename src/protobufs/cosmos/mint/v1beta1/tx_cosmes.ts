// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file cosmos/mint/v1beta1/tx.proto (package cosmos.mint.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";

const TYPE_NAME = "cosmos.mint.v1beta1.Msg";

/**
 * UpdateParams defines a governance operation for updating the x/mint module
 * parameters. The authority is defaults to the x/gov module account.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.mint.v1beta1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;
