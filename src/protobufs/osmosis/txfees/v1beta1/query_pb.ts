// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/txfees/v1beta1/query.proto (package osmosis.txfees.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { FeeToken } from "./feetoken_pb.js";

/**
 * @generated from message osmosis.txfees.v1beta1.QueryFeeTokensRequest
 */
export class QueryFeeTokensRequest extends Message<QueryFeeTokensRequest> {
  constructor(data?: PartialMessage<QueryFeeTokensRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.txfees.v1beta1.QueryFeeTokensRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeeTokensRequest {
    return new QueryFeeTokensRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeeTokensRequest {
    return new QueryFeeTokensRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeeTokensRequest {
    return new QueryFeeTokensRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryFeeTokensRequest | PlainMessage<QueryFeeTokensRequest> | undefined, b: QueryFeeTokensRequest | PlainMessage<QueryFeeTokensRequest> | undefined): boolean {
    return proto3.util.equals(QueryFeeTokensRequest, a, b);
  }
}

/**
 * @generated from message osmosis.txfees.v1beta1.QueryFeeTokensResponse
 */
export class QueryFeeTokensResponse extends Message<QueryFeeTokensResponse> {
  /**
   * @generated from field: repeated osmosis.txfees.v1beta1.FeeToken fee_tokens = 1;
   */
  feeTokens: FeeToken[] = [];

  constructor(data?: PartialMessage<QueryFeeTokensResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.txfees.v1beta1.QueryFeeTokensResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "fee_tokens", kind: "message", T: FeeToken, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeeTokensResponse {
    return new QueryFeeTokensResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeeTokensResponse {
    return new QueryFeeTokensResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeeTokensResponse {
    return new QueryFeeTokensResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryFeeTokensResponse | PlainMessage<QueryFeeTokensResponse> | undefined, b: QueryFeeTokensResponse | PlainMessage<QueryFeeTokensResponse> | undefined): boolean {
    return proto3.util.equals(QueryFeeTokensResponse, a, b);
  }
}

/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 *
 * @generated from message osmosis.txfees.v1beta1.QueryDenomSpotPriceRequest
 */
export class QueryDenomSpotPriceRequest extends Message<QueryDenomSpotPriceRequest> {
  /**
   * @generated from field: string denom = 1;
   */
  denom = "";

  constructor(data?: PartialMessage<QueryDenomSpotPriceRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.txfees.v1beta1.QueryDenomSpotPriceRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomSpotPriceRequest {
    return new QueryDenomSpotPriceRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomSpotPriceRequest {
    return new QueryDenomSpotPriceRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomSpotPriceRequest {
    return new QueryDenomSpotPriceRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDenomSpotPriceRequest | PlainMessage<QueryDenomSpotPriceRequest> | undefined, b: QueryDenomSpotPriceRequest | PlainMessage<QueryDenomSpotPriceRequest> | undefined): boolean {
    return proto3.util.equals(QueryDenomSpotPriceRequest, a, b);
  }
}

/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 *
 * @generated from message osmosis.txfees.v1beta1.QueryDenomSpotPriceResponse
 */
export class QueryDenomSpotPriceResponse extends Message<QueryDenomSpotPriceResponse> {
  /**
   * @generated from field: uint64 poolID = 1;
   */
  poolID = protoInt64.zero;

  /**
   * @generated from field: string spot_price = 2;
   */
  spotPrice = "";

  constructor(data?: PartialMessage<QueryDenomSpotPriceResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.txfees.v1beta1.QueryDenomSpotPriceResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "poolID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "spot_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomSpotPriceResponse {
    return new QueryDenomSpotPriceResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomSpotPriceResponse {
    return new QueryDenomSpotPriceResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomSpotPriceResponse {
    return new QueryDenomSpotPriceResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDenomSpotPriceResponse | PlainMessage<QueryDenomSpotPriceResponse> | undefined, b: QueryDenomSpotPriceResponse | PlainMessage<QueryDenomSpotPriceResponse> | undefined): boolean {
    return proto3.util.equals(QueryDenomSpotPriceResponse, a, b);
  }
}

/**
 * @generated from message osmosis.txfees.v1beta1.QueryDenomPoolIdRequest
 */
export class QueryDenomPoolIdRequest extends Message<QueryDenomPoolIdRequest> {
  /**
   * @generated from field: string denom = 1;
   */
  denom = "";

  constructor(data?: PartialMessage<QueryDenomPoolIdRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.txfees.v1beta1.QueryDenomPoolIdRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomPoolIdRequest {
    return new QueryDenomPoolIdRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomPoolIdRequest {
    return new QueryDenomPoolIdRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomPoolIdRequest {
    return new QueryDenomPoolIdRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDenomPoolIdRequest | PlainMessage<QueryDenomPoolIdRequest> | undefined, b: QueryDenomPoolIdRequest | PlainMessage<QueryDenomPoolIdRequest> | undefined): boolean {
    return proto3.util.equals(QueryDenomPoolIdRequest, a, b);
  }
}

/**
 * @generated from message osmosis.txfees.v1beta1.QueryDenomPoolIdResponse
 */
export class QueryDenomPoolIdResponse extends Message<QueryDenomPoolIdResponse> {
  /**
   * @generated from field: uint64 poolID = 1;
   */
  poolID = protoInt64.zero;

  constructor(data?: PartialMessage<QueryDenomPoolIdResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.txfees.v1beta1.QueryDenomPoolIdResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "poolID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomPoolIdResponse {
    return new QueryDenomPoolIdResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomPoolIdResponse {
    return new QueryDenomPoolIdResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomPoolIdResponse {
    return new QueryDenomPoolIdResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDenomPoolIdResponse | PlainMessage<QueryDenomPoolIdResponse> | undefined, b: QueryDenomPoolIdResponse | PlainMessage<QueryDenomPoolIdResponse> | undefined): boolean {
    return proto3.util.equals(QueryDenomPoolIdResponse, a, b);
  }
}

/**
 * @generated from message osmosis.txfees.v1beta1.QueryBaseDenomRequest
 */
export class QueryBaseDenomRequest extends Message<QueryBaseDenomRequest> {
  constructor(data?: PartialMessage<QueryBaseDenomRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.txfees.v1beta1.QueryBaseDenomRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBaseDenomRequest {
    return new QueryBaseDenomRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBaseDenomRequest {
    return new QueryBaseDenomRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBaseDenomRequest {
    return new QueryBaseDenomRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryBaseDenomRequest | PlainMessage<QueryBaseDenomRequest> | undefined, b: QueryBaseDenomRequest | PlainMessage<QueryBaseDenomRequest> | undefined): boolean {
    return proto3.util.equals(QueryBaseDenomRequest, a, b);
  }
}

/**
 * @generated from message osmosis.txfees.v1beta1.QueryBaseDenomResponse
 */
export class QueryBaseDenomResponse extends Message<QueryBaseDenomResponse> {
  /**
   * @generated from field: string base_denom = 1;
   */
  baseDenom = "";

  constructor(data?: PartialMessage<QueryBaseDenomResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.txfees.v1beta1.QueryBaseDenomResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBaseDenomResponse {
    return new QueryBaseDenomResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBaseDenomResponse {
    return new QueryBaseDenomResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBaseDenomResponse {
    return new QueryBaseDenomResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryBaseDenomResponse | PlainMessage<QueryBaseDenomResponse> | undefined, b: QueryBaseDenomResponse | PlainMessage<QueryBaseDenomResponse> | undefined): boolean {
    return proto3.util.equals(QueryBaseDenomResponse, a, b);
  }
}

/**
 * @generated from message osmosis.txfees.v1beta1.QueryEipBaseFeeRequest
 */
export class QueryEipBaseFeeRequest extends Message<QueryEipBaseFeeRequest> {
  constructor(data?: PartialMessage<QueryEipBaseFeeRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.txfees.v1beta1.QueryEipBaseFeeRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEipBaseFeeRequest {
    return new QueryEipBaseFeeRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEipBaseFeeRequest {
    return new QueryEipBaseFeeRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEipBaseFeeRequest {
    return new QueryEipBaseFeeRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryEipBaseFeeRequest | PlainMessage<QueryEipBaseFeeRequest> | undefined, b: QueryEipBaseFeeRequest | PlainMessage<QueryEipBaseFeeRequest> | undefined): boolean {
    return proto3.util.equals(QueryEipBaseFeeRequest, a, b);
  }
}

/**
 * @generated from message osmosis.txfees.v1beta1.QueryEipBaseFeeResponse
 */
export class QueryEipBaseFeeResponse extends Message<QueryEipBaseFeeResponse> {
  /**
   * @generated from field: string base_fee = 1;
   */
  baseFee = "";

  constructor(data?: PartialMessage<QueryEipBaseFeeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.txfees.v1beta1.QueryEipBaseFeeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEipBaseFeeResponse {
    return new QueryEipBaseFeeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEipBaseFeeResponse {
    return new QueryEipBaseFeeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEipBaseFeeResponse {
    return new QueryEipBaseFeeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryEipBaseFeeResponse | PlainMessage<QueryEipBaseFeeResponse> | undefined, b: QueryEipBaseFeeResponse | PlainMessage<QueryEipBaseFeeResponse> | undefined): boolean {
    return proto3.util.equals(QueryEipBaseFeeResponse, a, b);
  }
}
