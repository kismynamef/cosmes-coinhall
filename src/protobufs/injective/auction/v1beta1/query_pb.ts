// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/auction/v1beta1/query.proto (package injective.auction.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./auction_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { GenesisState } from "./genesis_pb.js";

/**
 * QueryAuctionParamsRequest is the request type for the Query/AuctionParams RPC
 * method.
 *
 * @generated from message injective.auction.v1beta1.QueryAuctionParamsRequest
 */
export class QueryAuctionParamsRequest extends Message<QueryAuctionParamsRequest> {
  constructor(data?: PartialMessage<QueryAuctionParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.auction.v1beta1.QueryAuctionParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAuctionParamsRequest {
    return new QueryAuctionParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAuctionParamsRequest {
    return new QueryAuctionParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAuctionParamsRequest {
    return new QueryAuctionParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAuctionParamsRequest | PlainMessage<QueryAuctionParamsRequest> | undefined, b: QueryAuctionParamsRequest | PlainMessage<QueryAuctionParamsRequest> | undefined): boolean {
    return proto3.util.equals(QueryAuctionParamsRequest, a, b);
  }
}

/**
 * QueryAuctionParamsRequest is the response type for the Query/AuctionParams
 * RPC method.
 *
 * @generated from message injective.auction.v1beta1.QueryAuctionParamsResponse
 */
export class QueryAuctionParamsResponse extends Message<QueryAuctionParamsResponse> {
  /**
   * @generated from field: injective.auction.v1beta1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryAuctionParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.auction.v1beta1.QueryAuctionParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAuctionParamsResponse {
    return new QueryAuctionParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAuctionParamsResponse {
    return new QueryAuctionParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAuctionParamsResponse {
    return new QueryAuctionParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAuctionParamsResponse | PlainMessage<QueryAuctionParamsResponse> | undefined, b: QueryAuctionParamsResponse | PlainMessage<QueryAuctionParamsResponse> | undefined): boolean {
    return proto3.util.equals(QueryAuctionParamsResponse, a, b);
  }
}

/**
 * QueryCurrentAuctionBasketRequest is the request type for the
 * Query/CurrentAuctionBasket RPC method.
 *
 * @generated from message injective.auction.v1beta1.QueryCurrentAuctionBasketRequest
 */
export class QueryCurrentAuctionBasketRequest extends Message<QueryCurrentAuctionBasketRequest> {
  constructor(data?: PartialMessage<QueryCurrentAuctionBasketRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.auction.v1beta1.QueryCurrentAuctionBasketRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCurrentAuctionBasketRequest {
    return new QueryCurrentAuctionBasketRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCurrentAuctionBasketRequest {
    return new QueryCurrentAuctionBasketRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCurrentAuctionBasketRequest {
    return new QueryCurrentAuctionBasketRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCurrentAuctionBasketRequest | PlainMessage<QueryCurrentAuctionBasketRequest> | undefined, b: QueryCurrentAuctionBasketRequest | PlainMessage<QueryCurrentAuctionBasketRequest> | undefined): boolean {
    return proto3.util.equals(QueryCurrentAuctionBasketRequest, a, b);
  }
}

/**
 * QueryCurrentAuctionBasketResponse is the response type for the
 * Query/CurrentAuctionBasket RPC method.
 *
 * @generated from message injective.auction.v1beta1.QueryCurrentAuctionBasketResponse
 */
export class QueryCurrentAuctionBasketResponse extends Message<QueryCurrentAuctionBasketResponse> {
  /**
   * amount describes the amount put on auction
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
   */
  amount: Coin[] = [];

  /**
   * auctionRound describes current auction round
   *
   * @generated from field: uint64 auctionRound = 2;
   */
  auctionRound = protoInt64.zero;

  /**
   * auctionClosingTime describes auction close time for the round
   *
   * @generated from field: int64 auctionClosingTime = 3;
   */
  auctionClosingTime = protoInt64.zero;

  /**
   * highestBidder describes highest bidder on current round
   *
   * @generated from field: string highestBidder = 4;
   */
  highestBidder = "";

  /**
   * highestBidAmount describes highest bid amount on current round
   *
   * @generated from field: string highestBidAmount = 5;
   */
  highestBidAmount = "";

  constructor(data?: PartialMessage<QueryCurrentAuctionBasketResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.auction.v1beta1.QueryCurrentAuctionBasketResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "auctionRound", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "auctionClosingTime", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "highestBidder", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "highestBidAmount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCurrentAuctionBasketResponse {
    return new QueryCurrentAuctionBasketResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCurrentAuctionBasketResponse {
    return new QueryCurrentAuctionBasketResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCurrentAuctionBasketResponse {
    return new QueryCurrentAuctionBasketResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCurrentAuctionBasketResponse | PlainMessage<QueryCurrentAuctionBasketResponse> | undefined, b: QueryCurrentAuctionBasketResponse | PlainMessage<QueryCurrentAuctionBasketResponse> | undefined): boolean {
    return proto3.util.equals(QueryCurrentAuctionBasketResponse, a, b);
  }
}

/**
 * QueryModuleStateRequest is the request type for the Query/AuctionModuleState
 * RPC method.
 *
 * @generated from message injective.auction.v1beta1.QueryModuleStateRequest
 */
export class QueryModuleStateRequest extends Message<QueryModuleStateRequest> {
  constructor(data?: PartialMessage<QueryModuleStateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.auction.v1beta1.QueryModuleStateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleStateRequest {
    return new QueryModuleStateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleStateRequest {
    return new QueryModuleStateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleStateRequest {
    return new QueryModuleStateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryModuleStateRequest | PlainMessage<QueryModuleStateRequest> | undefined, b: QueryModuleStateRequest | PlainMessage<QueryModuleStateRequest> | undefined): boolean {
    return proto3.util.equals(QueryModuleStateRequest, a, b);
  }
}

/**
 * QueryModuleStateResponse is the response type for the
 * Query/AuctionModuleState RPC method.
 *
 * @generated from message injective.auction.v1beta1.QueryModuleStateResponse
 */
export class QueryModuleStateResponse extends Message<QueryModuleStateResponse> {
  /**
   * @generated from field: injective.auction.v1beta1.GenesisState state = 1;
   */
  state?: GenesisState;

  constructor(data?: PartialMessage<QueryModuleStateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.auction.v1beta1.QueryModuleStateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "state", kind: "message", T: GenesisState },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleStateResponse {
    return new QueryModuleStateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleStateResponse {
    return new QueryModuleStateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleStateResponse {
    return new QueryModuleStateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryModuleStateResponse | PlainMessage<QueryModuleStateResponse> | undefined, b: QueryModuleStateResponse | PlainMessage<QueryModuleStateResponse> | undefined): boolean {
    return proto3.util.equals(QueryModuleStateResponse, a, b);
  }
}

