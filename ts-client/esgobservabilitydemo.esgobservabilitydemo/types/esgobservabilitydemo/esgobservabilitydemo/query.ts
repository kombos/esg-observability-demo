/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Manufacturing } from "./manufacturing";
import { MaterialProcessing } from "./material_processing";
import { Params } from "./params";
import { RawMaterialExtraction } from "./raw_material_extraction";
import { Transportation } from "./transportation";

export const protobufPackage = "esgobservabilitydemo.esgobservabilitydemo";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetRawMaterialExtractionRequest {
  id: number;
}

export interface QueryGetRawMaterialExtractionResponse {
  RawMaterialExtraction: RawMaterialExtraction | undefined;
}

export interface QueryAllRawMaterialExtractionRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllRawMaterialExtractionResponse {
  RawMaterialExtraction: RawMaterialExtraction[];
  pagination: PageResponse | undefined;
}

export interface QueryGetManufacturingRequest {
  id: number;
}

export interface QueryGetManufacturingResponse {
  Manufacturing: Manufacturing | undefined;
}

export interface QueryAllManufacturingRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllManufacturingResponse {
  Manufacturing: Manufacturing[];
  pagination: PageResponse | undefined;
}

export interface QueryGetTransportationRequest {
  id: number;
}

export interface QueryGetTransportationResponse {
  Transportation: Transportation | undefined;
}

export interface QueryAllTransportationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllTransportationResponse {
  Transportation: Transportation[];
  pagination: PageResponse | undefined;
}

export interface QueryGetMaterialProcessingRequest {
  id: number;
}

export interface QueryGetMaterialProcessingResponse {
  MaterialProcessing: MaterialProcessing | undefined;
}

export interface QueryAllMaterialProcessingRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMaterialProcessingResponse {
  MaterialProcessing: MaterialProcessing[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetRawMaterialExtractionRequest(): QueryGetRawMaterialExtractionRequest {
  return { id: 0 };
}

export const QueryGetRawMaterialExtractionRequest = {
  encode(message: QueryGetRawMaterialExtractionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRawMaterialExtractionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRawMaterialExtractionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRawMaterialExtractionRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetRawMaterialExtractionRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRawMaterialExtractionRequest>, I>>(
    object: I,
  ): QueryGetRawMaterialExtractionRequest {
    const message = createBaseQueryGetRawMaterialExtractionRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetRawMaterialExtractionResponse(): QueryGetRawMaterialExtractionResponse {
  return { RawMaterialExtraction: undefined };
}

export const QueryGetRawMaterialExtractionResponse = {
  encode(message: QueryGetRawMaterialExtractionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.RawMaterialExtraction !== undefined) {
      RawMaterialExtraction.encode(message.RawMaterialExtraction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRawMaterialExtractionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRawMaterialExtractionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.RawMaterialExtraction = RawMaterialExtraction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRawMaterialExtractionResponse {
    return {
      RawMaterialExtraction: isSet(object.RawMaterialExtraction)
        ? RawMaterialExtraction.fromJSON(object.RawMaterialExtraction)
        : undefined,
    };
  },

  toJSON(message: QueryGetRawMaterialExtractionResponse): unknown {
    const obj: any = {};
    message.RawMaterialExtraction !== undefined && (obj.RawMaterialExtraction = message.RawMaterialExtraction
      ? RawMaterialExtraction.toJSON(message.RawMaterialExtraction)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRawMaterialExtractionResponse>, I>>(
    object: I,
  ): QueryGetRawMaterialExtractionResponse {
    const message = createBaseQueryGetRawMaterialExtractionResponse();
    message.RawMaterialExtraction =
      (object.RawMaterialExtraction !== undefined && object.RawMaterialExtraction !== null)
        ? RawMaterialExtraction.fromPartial(object.RawMaterialExtraction)
        : undefined;
    return message;
  },
};

function createBaseQueryAllRawMaterialExtractionRequest(): QueryAllRawMaterialExtractionRequest {
  return { pagination: undefined };
}

export const QueryAllRawMaterialExtractionRequest = {
  encode(message: QueryAllRawMaterialExtractionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRawMaterialExtractionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRawMaterialExtractionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRawMaterialExtractionRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllRawMaterialExtractionRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllRawMaterialExtractionRequest>, I>>(
    object: I,
  ): QueryAllRawMaterialExtractionRequest {
    const message = createBaseQueryAllRawMaterialExtractionRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllRawMaterialExtractionResponse(): QueryAllRawMaterialExtractionResponse {
  return { RawMaterialExtraction: [], pagination: undefined };
}

export const QueryAllRawMaterialExtractionResponse = {
  encode(message: QueryAllRawMaterialExtractionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.RawMaterialExtraction) {
      RawMaterialExtraction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRawMaterialExtractionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRawMaterialExtractionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.RawMaterialExtraction.push(RawMaterialExtraction.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRawMaterialExtractionResponse {
    return {
      RawMaterialExtraction: Array.isArray(object?.RawMaterialExtraction)
        ? object.RawMaterialExtraction.map((e: any) => RawMaterialExtraction.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllRawMaterialExtractionResponse): unknown {
    const obj: any = {};
    if (message.RawMaterialExtraction) {
      obj.RawMaterialExtraction = message.RawMaterialExtraction.map((e) =>
        e ? RawMaterialExtraction.toJSON(e) : undefined
      );
    } else {
      obj.RawMaterialExtraction = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllRawMaterialExtractionResponse>, I>>(
    object: I,
  ): QueryAllRawMaterialExtractionResponse {
    const message = createBaseQueryAllRawMaterialExtractionResponse();
    message.RawMaterialExtraction = object.RawMaterialExtraction?.map((e) => RawMaterialExtraction.fromPartial(e))
      || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetManufacturingRequest(): QueryGetManufacturingRequest {
  return { id: 0 };
}

export const QueryGetManufacturingRequest = {
  encode(message: QueryGetManufacturingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManufacturingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetManufacturingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetManufacturingRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetManufacturingRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetManufacturingRequest>, I>>(object: I): QueryGetManufacturingRequest {
    const message = createBaseQueryGetManufacturingRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetManufacturingResponse(): QueryGetManufacturingResponse {
  return { Manufacturing: undefined };
}

export const QueryGetManufacturingResponse = {
  encode(message: QueryGetManufacturingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Manufacturing !== undefined) {
      Manufacturing.encode(message.Manufacturing, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManufacturingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetManufacturingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Manufacturing = Manufacturing.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetManufacturingResponse {
    return { Manufacturing: isSet(object.Manufacturing) ? Manufacturing.fromJSON(object.Manufacturing) : undefined };
  },

  toJSON(message: QueryGetManufacturingResponse): unknown {
    const obj: any = {};
    message.Manufacturing !== undefined
      && (obj.Manufacturing = message.Manufacturing ? Manufacturing.toJSON(message.Manufacturing) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetManufacturingResponse>, I>>(
    object: I,
  ): QueryGetManufacturingResponse {
    const message = createBaseQueryGetManufacturingResponse();
    message.Manufacturing = (object.Manufacturing !== undefined && object.Manufacturing !== null)
      ? Manufacturing.fromPartial(object.Manufacturing)
      : undefined;
    return message;
  },
};

function createBaseQueryAllManufacturingRequest(): QueryAllManufacturingRequest {
  return { pagination: undefined };
}

export const QueryAllManufacturingRequest = {
  encode(message: QueryAllManufacturingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllManufacturingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllManufacturingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllManufacturingRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllManufacturingRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllManufacturingRequest>, I>>(object: I): QueryAllManufacturingRequest {
    const message = createBaseQueryAllManufacturingRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllManufacturingResponse(): QueryAllManufacturingResponse {
  return { Manufacturing: [], pagination: undefined };
}

export const QueryAllManufacturingResponse = {
  encode(message: QueryAllManufacturingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Manufacturing) {
      Manufacturing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllManufacturingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllManufacturingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Manufacturing.push(Manufacturing.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllManufacturingResponse {
    return {
      Manufacturing: Array.isArray(object?.Manufacturing)
        ? object.Manufacturing.map((e: any) => Manufacturing.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllManufacturingResponse): unknown {
    const obj: any = {};
    if (message.Manufacturing) {
      obj.Manufacturing = message.Manufacturing.map((e) => e ? Manufacturing.toJSON(e) : undefined);
    } else {
      obj.Manufacturing = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllManufacturingResponse>, I>>(
    object: I,
  ): QueryAllManufacturingResponse {
    const message = createBaseQueryAllManufacturingResponse();
    message.Manufacturing = object.Manufacturing?.map((e) => Manufacturing.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetTransportationRequest(): QueryGetTransportationRequest {
  return { id: 0 };
}

export const QueryGetTransportationRequest = {
  encode(message: QueryGetTransportationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTransportationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTransportationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTransportationRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetTransportationRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetTransportationRequest>, I>>(
    object: I,
  ): QueryGetTransportationRequest {
    const message = createBaseQueryGetTransportationRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetTransportationResponse(): QueryGetTransportationResponse {
  return { Transportation: undefined };
}

export const QueryGetTransportationResponse = {
  encode(message: QueryGetTransportationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Transportation !== undefined) {
      Transportation.encode(message.Transportation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTransportationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTransportationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Transportation = Transportation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTransportationResponse {
    return {
      Transportation: isSet(object.Transportation) ? Transportation.fromJSON(object.Transportation) : undefined,
    };
  },

  toJSON(message: QueryGetTransportationResponse): unknown {
    const obj: any = {};
    message.Transportation !== undefined
      && (obj.Transportation = message.Transportation ? Transportation.toJSON(message.Transportation) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetTransportationResponse>, I>>(
    object: I,
  ): QueryGetTransportationResponse {
    const message = createBaseQueryGetTransportationResponse();
    message.Transportation = (object.Transportation !== undefined && object.Transportation !== null)
      ? Transportation.fromPartial(object.Transportation)
      : undefined;
    return message;
  },
};

function createBaseQueryAllTransportationRequest(): QueryAllTransportationRequest {
  return { pagination: undefined };
}

export const QueryAllTransportationRequest = {
  encode(message: QueryAllTransportationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTransportationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTransportationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTransportationRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllTransportationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllTransportationRequest>, I>>(
    object: I,
  ): QueryAllTransportationRequest {
    const message = createBaseQueryAllTransportationRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllTransportationResponse(): QueryAllTransportationResponse {
  return { Transportation: [], pagination: undefined };
}

export const QueryAllTransportationResponse = {
  encode(message: QueryAllTransportationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Transportation) {
      Transportation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTransportationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTransportationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Transportation.push(Transportation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTransportationResponse {
    return {
      Transportation: Array.isArray(object?.Transportation)
        ? object.Transportation.map((e: any) => Transportation.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllTransportationResponse): unknown {
    const obj: any = {};
    if (message.Transportation) {
      obj.Transportation = message.Transportation.map((e) => e ? Transportation.toJSON(e) : undefined);
    } else {
      obj.Transportation = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllTransportationResponse>, I>>(
    object: I,
  ): QueryAllTransportationResponse {
    const message = createBaseQueryAllTransportationResponse();
    message.Transportation = object.Transportation?.map((e) => Transportation.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetMaterialProcessingRequest(): QueryGetMaterialProcessingRequest {
  return { id: 0 };
}

export const QueryGetMaterialProcessingRequest = {
  encode(message: QueryGetMaterialProcessingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMaterialProcessingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMaterialProcessingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMaterialProcessingRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetMaterialProcessingRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMaterialProcessingRequest>, I>>(
    object: I,
  ): QueryGetMaterialProcessingRequest {
    const message = createBaseQueryGetMaterialProcessingRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetMaterialProcessingResponse(): QueryGetMaterialProcessingResponse {
  return { MaterialProcessing: undefined };
}

export const QueryGetMaterialProcessingResponse = {
  encode(message: QueryGetMaterialProcessingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.MaterialProcessing !== undefined) {
      MaterialProcessing.encode(message.MaterialProcessing, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMaterialProcessingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMaterialProcessingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.MaterialProcessing = MaterialProcessing.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMaterialProcessingResponse {
    return {
      MaterialProcessing: isSet(object.MaterialProcessing)
        ? MaterialProcessing.fromJSON(object.MaterialProcessing)
        : undefined,
    };
  },

  toJSON(message: QueryGetMaterialProcessingResponse): unknown {
    const obj: any = {};
    message.MaterialProcessing !== undefined && (obj.MaterialProcessing = message.MaterialProcessing
      ? MaterialProcessing.toJSON(message.MaterialProcessing)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMaterialProcessingResponse>, I>>(
    object: I,
  ): QueryGetMaterialProcessingResponse {
    const message = createBaseQueryGetMaterialProcessingResponse();
    message.MaterialProcessing = (object.MaterialProcessing !== undefined && object.MaterialProcessing !== null)
      ? MaterialProcessing.fromPartial(object.MaterialProcessing)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMaterialProcessingRequest(): QueryAllMaterialProcessingRequest {
  return { pagination: undefined };
}

export const QueryAllMaterialProcessingRequest = {
  encode(message: QueryAllMaterialProcessingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMaterialProcessingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMaterialProcessingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMaterialProcessingRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllMaterialProcessingRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMaterialProcessingRequest>, I>>(
    object: I,
  ): QueryAllMaterialProcessingRequest {
    const message = createBaseQueryAllMaterialProcessingRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMaterialProcessingResponse(): QueryAllMaterialProcessingResponse {
  return { MaterialProcessing: [], pagination: undefined };
}

export const QueryAllMaterialProcessingResponse = {
  encode(message: QueryAllMaterialProcessingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.MaterialProcessing) {
      MaterialProcessing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMaterialProcessingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMaterialProcessingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.MaterialProcessing.push(MaterialProcessing.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMaterialProcessingResponse {
    return {
      MaterialProcessing: Array.isArray(object?.MaterialProcessing)
        ? object.MaterialProcessing.map((e: any) => MaterialProcessing.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllMaterialProcessingResponse): unknown {
    const obj: any = {};
    if (message.MaterialProcessing) {
      obj.MaterialProcessing = message.MaterialProcessing.map((e) => e ? MaterialProcessing.toJSON(e) : undefined);
    } else {
      obj.MaterialProcessing = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMaterialProcessingResponse>, I>>(
    object: I,
  ): QueryAllMaterialProcessingResponse {
    const message = createBaseQueryAllMaterialProcessingResponse();
    message.MaterialProcessing = object.MaterialProcessing?.map((e) => MaterialProcessing.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of RawMaterialExtraction items. */
  RawMaterialExtraction(request: QueryGetRawMaterialExtractionRequest): Promise<QueryGetRawMaterialExtractionResponse>;
  RawMaterialExtractionAll(
    request: QueryAllRawMaterialExtractionRequest,
  ): Promise<QueryAllRawMaterialExtractionResponse>;
  /** Queries a list of Manufacturing items. */
  Manufacturing(request: QueryGetManufacturingRequest): Promise<QueryGetManufacturingResponse>;
  ManufacturingAll(request: QueryAllManufacturingRequest): Promise<QueryAllManufacturingResponse>;
  /** Queries a list of Transportation items. */
  Transportation(request: QueryGetTransportationRequest): Promise<QueryGetTransportationResponse>;
  TransportationAll(request: QueryAllTransportationRequest): Promise<QueryAllTransportationResponse>;
  /** Queries a list of MaterialProcessing items. */
  MaterialProcessing(request: QueryGetMaterialProcessingRequest): Promise<QueryGetMaterialProcessingResponse>;
  MaterialProcessingAll(request: QueryAllMaterialProcessingRequest): Promise<QueryAllMaterialProcessingResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.RawMaterialExtraction = this.RawMaterialExtraction.bind(this);
    this.RawMaterialExtractionAll = this.RawMaterialExtractionAll.bind(this);
    this.Manufacturing = this.Manufacturing.bind(this);
    this.ManufacturingAll = this.ManufacturingAll.bind(this);
    this.Transportation = this.Transportation.bind(this);
    this.TransportationAll = this.TransportationAll.bind(this);
    this.MaterialProcessing = this.MaterialProcessing.bind(this);
    this.MaterialProcessingAll = this.MaterialProcessingAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("esgobservabilitydemo.esgobservabilitydemo.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  RawMaterialExtraction(request: QueryGetRawMaterialExtractionRequest): Promise<QueryGetRawMaterialExtractionResponse> {
    const data = QueryGetRawMaterialExtractionRequest.encode(request).finish();
    const promise = this.rpc.request("esgobservabilitydemo.esgobservabilitydemo.Query", "RawMaterialExtraction", data);
    return promise.then((data) => QueryGetRawMaterialExtractionResponse.decode(new _m0.Reader(data)));
  }

  RawMaterialExtractionAll(
    request: QueryAllRawMaterialExtractionRequest,
  ): Promise<QueryAllRawMaterialExtractionResponse> {
    const data = QueryAllRawMaterialExtractionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "esgobservabilitydemo.esgobservabilitydemo.Query",
      "RawMaterialExtractionAll",
      data,
    );
    return promise.then((data) => QueryAllRawMaterialExtractionResponse.decode(new _m0.Reader(data)));
  }

  Manufacturing(request: QueryGetManufacturingRequest): Promise<QueryGetManufacturingResponse> {
    const data = QueryGetManufacturingRequest.encode(request).finish();
    const promise = this.rpc.request("esgobservabilitydemo.esgobservabilitydemo.Query", "Manufacturing", data);
    return promise.then((data) => QueryGetManufacturingResponse.decode(new _m0.Reader(data)));
  }

  ManufacturingAll(request: QueryAllManufacturingRequest): Promise<QueryAllManufacturingResponse> {
    const data = QueryAllManufacturingRequest.encode(request).finish();
    const promise = this.rpc.request("esgobservabilitydemo.esgobservabilitydemo.Query", "ManufacturingAll", data);
    return promise.then((data) => QueryAllManufacturingResponse.decode(new _m0.Reader(data)));
  }

  Transportation(request: QueryGetTransportationRequest): Promise<QueryGetTransportationResponse> {
    const data = QueryGetTransportationRequest.encode(request).finish();
    const promise = this.rpc.request("esgobservabilitydemo.esgobservabilitydemo.Query", "Transportation", data);
    return promise.then((data) => QueryGetTransportationResponse.decode(new _m0.Reader(data)));
  }

  TransportationAll(request: QueryAllTransportationRequest): Promise<QueryAllTransportationResponse> {
    const data = QueryAllTransportationRequest.encode(request).finish();
    const promise = this.rpc.request("esgobservabilitydemo.esgobservabilitydemo.Query", "TransportationAll", data);
    return promise.then((data) => QueryAllTransportationResponse.decode(new _m0.Reader(data)));
  }

  MaterialProcessing(request: QueryGetMaterialProcessingRequest): Promise<QueryGetMaterialProcessingResponse> {
    const data = QueryGetMaterialProcessingRequest.encode(request).finish();
    const promise = this.rpc.request("esgobservabilitydemo.esgobservabilitydemo.Query", "MaterialProcessing", data);
    return promise.then((data) => QueryGetMaterialProcessingResponse.decode(new _m0.Reader(data)));
  }

  MaterialProcessingAll(request: QueryAllMaterialProcessingRequest): Promise<QueryAllMaterialProcessingResponse> {
    const data = QueryAllMaterialProcessingRequest.encode(request).finish();
    const promise = this.rpc.request("esgobservabilitydemo.esgobservabilitydemo.Query", "MaterialProcessingAll", data);
    return promise.then((data) => QueryAllMaterialProcessingResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
