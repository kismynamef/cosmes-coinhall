// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/insurance/v1beta1/insurance.proto (package injective.insurance.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { OracleType } from "../../oracle/v1beta1/oracle_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * @generated from message injective.insurance.v1beta1.Params
 */
export class Params extends Message<Params> {
  /**
   * default_redemption_notice_period_duration defines the default minimum
   * notice period duration that must pass after an underwriter sends a
   * redemption request before the underwriter can claim his tokens
   *
   * @generated from field: google.protobuf.Duration default_redemption_notice_period_duration = 1;
   */
  defaultRedemptionNoticePeriodDuration?: Duration;

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "default_redemption_notice_period_duration", kind: "message", T: Duration },
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
 * @generated from message injective.insurance.v1beta1.InsuranceFund
 */
export class InsuranceFund extends Message<InsuranceFund> {
  /**
   * deposit denomination for the given insurance fund
   *
   * @generated from field: string deposit_denom = 1;
   */
  depositDenom = "";

  /**
   * insurance fund pool token denomination for the given insurance fund
   *
   * @generated from field: string insurance_pool_token_denom = 2;
   */
  insurancePoolTokenDenom = "";

  /**
   * redemption_notice_period_duration defines the minimum notice period
   * duration that must pass after an underwriter sends a redemption request
   * before the underwriter can claim his tokens
   *
   * @generated from field: google.protobuf.Duration redemption_notice_period_duration = 3;
   */
  redemptionNoticePeriodDuration?: Duration;

  /**
   * balance of fund
   *
   * @generated from field: string balance = 4;
   */
  balance = "";

  /**
   * total share tokens minted
   *
   * @generated from field: string total_share = 5;
   */
  totalShare = "";

  /**
   * marketID of the derivative market
   *
   * @generated from field: string market_id = 6;
   */
  marketId = "";

  /**
   * ticker of the derivative market
   *
   * @generated from field: string market_ticker = 7;
   */
  marketTicker = "";

  /**
   * Oracle base currency of the derivative market OR the oracle symbol for the
   * binary options market.
   *
   * @generated from field: string oracle_base = 8;
   */
  oracleBase = "";

  /**
   * Oracle quote currency of the derivative market OR the oracle provider for
   * the binary options market.
   *
   * @generated from field: string oracle_quote = 9;
   */
  oracleQuote = "";

  /**
   * Oracle type of the binary options or derivative market
   *
   * @generated from field: injective.oracle.v1beta1.OracleType oracle_type = 10;
   */
  oracleType = OracleType.Unspecified;

  /**
   * Expiration time of the derivative market. Should be -1 for perpetual or -2
   * for binary options markets.
   *
   * @generated from field: int64 expiry = 11;
   */
  expiry = protoInt64.zero;

  constructor(data?: PartialMessage<InsuranceFund>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.InsuranceFund";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "deposit_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "insurance_pool_token_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "redemption_notice_period_duration", kind: "message", T: Duration },
    { no: 4, name: "balance", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "total_share", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "market_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "market_ticker", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "oracle_base", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "oracle_quote", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "oracle_type", kind: "enum", T: proto3.getEnumType(OracleType) },
    { no: 11, name: "expiry", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InsuranceFund {
    return new InsuranceFund().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InsuranceFund {
    return new InsuranceFund().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InsuranceFund {
    return new InsuranceFund().fromJsonString(jsonString, options);
  }

  static equals(a: InsuranceFund | PlainMessage<InsuranceFund> | undefined, b: InsuranceFund | PlainMessage<InsuranceFund> | undefined): boolean {
    return proto3.util.equals(InsuranceFund, a, b);
  }
}

/**
 * @generated from message injective.insurance.v1beta1.RedemptionSchedule
 */
export class RedemptionSchedule extends Message<RedemptionSchedule> {
  /**
   * id of redemption schedule
   *
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  /**
   * marketId of insurance fund for the redemption
   *
   * @generated from field: string marketId = 2;
   */
  marketId = "";

  /**
   * address of the redeemer
   *
   * @generated from field: string redeemer = 3;
   */
  redeemer = "";

  /**
   * the time after which the redemption can be claimed
   *
   * @generated from field: google.protobuf.Timestamp claimable_redemption_time = 4;
   */
  claimableRedemptionTime?: Timestamp;

  /**
   * the insurance_pool_token amount to redeem
   *
   * @generated from field: cosmos.base.v1beta1.Coin redemption_amount = 5;
   */
  redemptionAmount?: Coin;

  constructor(data?: PartialMessage<RedemptionSchedule>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.RedemptionSchedule";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "marketId", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "redeemer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "claimable_redemption_time", kind: "message", T: Timestamp },
    { no: 5, name: "redemption_amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RedemptionSchedule {
    return new RedemptionSchedule().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RedemptionSchedule {
    return new RedemptionSchedule().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RedemptionSchedule {
    return new RedemptionSchedule().fromJsonString(jsonString, options);
  }

  static equals(a: RedemptionSchedule | PlainMessage<RedemptionSchedule> | undefined, b: RedemptionSchedule | PlainMessage<RedemptionSchedule> | undefined): boolean {
    return proto3.util.equals(RedemptionSchedule, a, b);
  }
}
