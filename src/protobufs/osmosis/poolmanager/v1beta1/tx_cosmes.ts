// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file osmosis/poolmanager/v1beta1/tx.proto (package osmosis.poolmanager.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgSetDenomPairTakerFee, MsgSetDenomPairTakerFeeResponse, MsgSplitRouteSwapExactAmountIn, MsgSplitRouteSwapExactAmountInResponse, MsgSplitRouteSwapExactAmountOut, MsgSplitRouteSwapExactAmountOutResponse, MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse } from "./tx_pb.js";

const TYPE_NAME = "osmosis.poolmanager.v1beta1.Msg";

/**
 * @generated from rpc osmosis.poolmanager.v1beta1.Msg.SwapExactAmountIn
 */
export const MsgSwapExactAmountInService = {
  typeName: TYPE_NAME,
  method: "SwapExactAmountIn",
  Request: MsgSwapExactAmountIn,
  Response: MsgSwapExactAmountInResponse,
} as const;

/**
 * @generated from rpc osmosis.poolmanager.v1beta1.Msg.SwapExactAmountOut
 */
export const MsgSwapExactAmountOutService = {
  typeName: TYPE_NAME,
  method: "SwapExactAmountOut",
  Request: MsgSwapExactAmountOut,
  Response: MsgSwapExactAmountOutResponse,
} as const;

/**
 * @generated from rpc osmosis.poolmanager.v1beta1.Msg.SplitRouteSwapExactAmountIn
 */
export const MsgSplitRouteSwapExactAmountInService = {
  typeName: TYPE_NAME,
  method: "SplitRouteSwapExactAmountIn",
  Request: MsgSplitRouteSwapExactAmountIn,
  Response: MsgSplitRouteSwapExactAmountInResponse,
} as const;

/**
 * @generated from rpc osmosis.poolmanager.v1beta1.Msg.SplitRouteSwapExactAmountOut
 */
export const MsgSplitRouteSwapExactAmountOutService = {
  typeName: TYPE_NAME,
  method: "SplitRouteSwapExactAmountOut",
  Request: MsgSplitRouteSwapExactAmountOut,
  Response: MsgSplitRouteSwapExactAmountOutResponse,
} as const;

/**
 * @generated from rpc osmosis.poolmanager.v1beta1.Msg.SetDenomPairTakerFee
 */
export const MsgSetDenomPairTakerFeeService = {
  typeName: TYPE_NAME,
  method: "SetDenomPairTakerFee",
  Request: MsgSetDenomPairTakerFee,
  Response: MsgSetDenomPairTakerFeeResponse,
} as const;

