/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "esgobservabilitydemo.esgobservabilitydemo";

export interface MsgCreateRawMaterialExtraction {
  creator: string;
  resourceType: string;
  waterUse: string;
  emissions: string;
}

export interface MsgCreateRawMaterialExtractionResponse {
  id: number;
}

export interface MsgUpdateRawMaterialExtraction {
  creator: string;
  id: number;
  resourceType: string;
  waterUse: string;
  emissions: string;
}

export interface MsgUpdateRawMaterialExtractionResponse {
}

export interface MsgDeleteRawMaterialExtraction {
  creator: string;
  id: number;
}

export interface MsgDeleteRawMaterialExtractionResponse {
}

export interface MsgCreateManufacturing {
  creator: string;
  componentType: string;
  waterUse: string;
  emissions: string;
}

export interface MsgCreateManufacturingResponse {
  id: number;
}

export interface MsgUpdateManufacturing {
  creator: string;
  id: number;
  componentType: string;
  waterUse: string;
  emissions: string;
}

export interface MsgUpdateManufacturingResponse {
}

export interface MsgDeleteManufacturing {
  creator: string;
  id: number;
}

export interface MsgDeleteManufacturingResponse {
}

export interface MsgCreateTransportation {
  creator: string;
  transportationType: string;
  fuelUse: string;
  emissions: string;
}

export interface MsgCreateTransportationResponse {
  id: number;
}

export interface MsgUpdateTransportation {
  creator: string;
  id: number;
  transportationType: string;
  fuelUse: string;
  emissions: string;
}

export interface MsgUpdateTransportationResponse {
}

export interface MsgDeleteTransportation {
  creator: string;
  id: number;
}

export interface MsgDeleteTransportationResponse {
}

export interface MsgCreateMaterialProcessing {
  creator: string;
  materialType: string;
  waterUse: string;
  emissions: string;
}

export interface MsgCreateMaterialProcessingResponse {
  id: number;
}

export interface MsgUpdateMaterialProcessing {
  creator: string;
  id: number;
  materialType: string;
  waterUse: string;
  emissions: string;
}

export interface MsgUpdateMaterialProcessingResponse {
}

export interface MsgDeleteMaterialProcessing {
  creator: string;
  id: number;
}

export interface MsgDeleteMaterialProcessingResponse {
}

function createBaseMsgCreateRawMaterialExtraction(): MsgCreateRawMaterialExtraction {
  return { creator: "", resourceType: "", waterUse: "", emissions: "" };
}

export const MsgCreateRawMaterialExtraction = {
  encode(message: MsgCreateRawMaterialExtraction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.resourceType !== "") {
      writer.uint32(18).string(message.resourceType);
    }
    if (message.waterUse !== "") {
      writer.uint32(26).string(message.waterUse);
    }
    if (message.emissions !== "") {
      writer.uint32(34).string(message.emissions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRawMaterialExtraction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRawMaterialExtraction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.resourceType = reader.string();
          break;
        case 3:
          message.waterUse = reader.string();
          break;
        case 4:
          message.emissions = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRawMaterialExtraction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      resourceType: isSet(object.resourceType) ? String(object.resourceType) : "",
      waterUse: isSet(object.waterUse) ? String(object.waterUse) : "",
      emissions: isSet(object.emissions) ? String(object.emissions) : "",
    };
  },

  toJSON(message: MsgCreateRawMaterialExtraction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.resourceType !== undefined && (obj.resourceType = message.resourceType);
    message.waterUse !== undefined && (obj.waterUse = message.waterUse);
    message.emissions !== undefined && (obj.emissions = message.emissions);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateRawMaterialExtraction>, I>>(
    object: I,
  ): MsgCreateRawMaterialExtraction {
    const message = createBaseMsgCreateRawMaterialExtraction();
    message.creator = object.creator ?? "";
    message.resourceType = object.resourceType ?? "";
    message.waterUse = object.waterUse ?? "";
    message.emissions = object.emissions ?? "";
    return message;
  },
};

function createBaseMsgCreateRawMaterialExtractionResponse(): MsgCreateRawMaterialExtractionResponse {
  return { id: 0 };
}

export const MsgCreateRawMaterialExtractionResponse = {
  encode(message: MsgCreateRawMaterialExtractionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRawMaterialExtractionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRawMaterialExtractionResponse();
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

  fromJSON(object: any): MsgCreateRawMaterialExtractionResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateRawMaterialExtractionResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateRawMaterialExtractionResponse>, I>>(
    object: I,
  ): MsgCreateRawMaterialExtractionResponse {
    const message = createBaseMsgCreateRawMaterialExtractionResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateRawMaterialExtraction(): MsgUpdateRawMaterialExtraction {
  return { creator: "", id: 0, resourceType: "", waterUse: "", emissions: "" };
}

export const MsgUpdateRawMaterialExtraction = {
  encode(message: MsgUpdateRawMaterialExtraction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.resourceType !== "") {
      writer.uint32(26).string(message.resourceType);
    }
    if (message.waterUse !== "") {
      writer.uint32(34).string(message.waterUse);
    }
    if (message.emissions !== "") {
      writer.uint32(42).string(message.emissions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRawMaterialExtraction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRawMaterialExtraction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.resourceType = reader.string();
          break;
        case 4:
          message.waterUse = reader.string();
          break;
        case 5:
          message.emissions = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateRawMaterialExtraction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      resourceType: isSet(object.resourceType) ? String(object.resourceType) : "",
      waterUse: isSet(object.waterUse) ? String(object.waterUse) : "",
      emissions: isSet(object.emissions) ? String(object.emissions) : "",
    };
  },

  toJSON(message: MsgUpdateRawMaterialExtraction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.resourceType !== undefined && (obj.resourceType = message.resourceType);
    message.waterUse !== undefined && (obj.waterUse = message.waterUse);
    message.emissions !== undefined && (obj.emissions = message.emissions);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateRawMaterialExtraction>, I>>(
    object: I,
  ): MsgUpdateRawMaterialExtraction {
    const message = createBaseMsgUpdateRawMaterialExtraction();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.resourceType = object.resourceType ?? "";
    message.waterUse = object.waterUse ?? "";
    message.emissions = object.emissions ?? "";
    return message;
  },
};

function createBaseMsgUpdateRawMaterialExtractionResponse(): MsgUpdateRawMaterialExtractionResponse {
  return {};
}

export const MsgUpdateRawMaterialExtractionResponse = {
  encode(_: MsgUpdateRawMaterialExtractionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRawMaterialExtractionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRawMaterialExtractionResponse();
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

  fromJSON(_: any): MsgUpdateRawMaterialExtractionResponse {
    return {};
  },

  toJSON(_: MsgUpdateRawMaterialExtractionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateRawMaterialExtractionResponse>, I>>(
    _: I,
  ): MsgUpdateRawMaterialExtractionResponse {
    const message = createBaseMsgUpdateRawMaterialExtractionResponse();
    return message;
  },
};

function createBaseMsgDeleteRawMaterialExtraction(): MsgDeleteRawMaterialExtraction {
  return { creator: "", id: 0 };
}

export const MsgDeleteRawMaterialExtraction = {
  encode(message: MsgDeleteRawMaterialExtraction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRawMaterialExtraction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteRawMaterialExtraction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteRawMaterialExtraction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteRawMaterialExtraction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteRawMaterialExtraction>, I>>(
    object: I,
  ): MsgDeleteRawMaterialExtraction {
    const message = createBaseMsgDeleteRawMaterialExtraction();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteRawMaterialExtractionResponse(): MsgDeleteRawMaterialExtractionResponse {
  return {};
}

export const MsgDeleteRawMaterialExtractionResponse = {
  encode(_: MsgDeleteRawMaterialExtractionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRawMaterialExtractionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteRawMaterialExtractionResponse();
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

  fromJSON(_: any): MsgDeleteRawMaterialExtractionResponse {
    return {};
  },

  toJSON(_: MsgDeleteRawMaterialExtractionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteRawMaterialExtractionResponse>, I>>(
    _: I,
  ): MsgDeleteRawMaterialExtractionResponse {
    const message = createBaseMsgDeleteRawMaterialExtractionResponse();
    return message;
  },
};

function createBaseMsgCreateManufacturing(): MsgCreateManufacturing {
  return { creator: "", componentType: "", waterUse: "", emissions: "" };
}

export const MsgCreateManufacturing = {
  encode(message: MsgCreateManufacturing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.componentType !== "") {
      writer.uint32(18).string(message.componentType);
    }
    if (message.waterUse !== "") {
      writer.uint32(26).string(message.waterUse);
    }
    if (message.emissions !== "") {
      writer.uint32(34).string(message.emissions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateManufacturing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateManufacturing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.componentType = reader.string();
          break;
        case 3:
          message.waterUse = reader.string();
          break;
        case 4:
          message.emissions = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateManufacturing {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      componentType: isSet(object.componentType) ? String(object.componentType) : "",
      waterUse: isSet(object.waterUse) ? String(object.waterUse) : "",
      emissions: isSet(object.emissions) ? String(object.emissions) : "",
    };
  },

  toJSON(message: MsgCreateManufacturing): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.componentType !== undefined && (obj.componentType = message.componentType);
    message.waterUse !== undefined && (obj.waterUse = message.waterUse);
    message.emissions !== undefined && (obj.emissions = message.emissions);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateManufacturing>, I>>(object: I): MsgCreateManufacturing {
    const message = createBaseMsgCreateManufacturing();
    message.creator = object.creator ?? "";
    message.componentType = object.componentType ?? "";
    message.waterUse = object.waterUse ?? "";
    message.emissions = object.emissions ?? "";
    return message;
  },
};

function createBaseMsgCreateManufacturingResponse(): MsgCreateManufacturingResponse {
  return { id: 0 };
}

export const MsgCreateManufacturingResponse = {
  encode(message: MsgCreateManufacturingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateManufacturingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateManufacturingResponse();
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

  fromJSON(object: any): MsgCreateManufacturingResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateManufacturingResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateManufacturingResponse>, I>>(
    object: I,
  ): MsgCreateManufacturingResponse {
    const message = createBaseMsgCreateManufacturingResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateManufacturing(): MsgUpdateManufacturing {
  return { creator: "", id: 0, componentType: "", waterUse: "", emissions: "" };
}

export const MsgUpdateManufacturing = {
  encode(message: MsgUpdateManufacturing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.componentType !== "") {
      writer.uint32(26).string(message.componentType);
    }
    if (message.waterUse !== "") {
      writer.uint32(34).string(message.waterUse);
    }
    if (message.emissions !== "") {
      writer.uint32(42).string(message.emissions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateManufacturing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateManufacturing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.componentType = reader.string();
          break;
        case 4:
          message.waterUse = reader.string();
          break;
        case 5:
          message.emissions = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateManufacturing {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      componentType: isSet(object.componentType) ? String(object.componentType) : "",
      waterUse: isSet(object.waterUse) ? String(object.waterUse) : "",
      emissions: isSet(object.emissions) ? String(object.emissions) : "",
    };
  },

  toJSON(message: MsgUpdateManufacturing): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.componentType !== undefined && (obj.componentType = message.componentType);
    message.waterUse !== undefined && (obj.waterUse = message.waterUse);
    message.emissions !== undefined && (obj.emissions = message.emissions);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateManufacturing>, I>>(object: I): MsgUpdateManufacturing {
    const message = createBaseMsgUpdateManufacturing();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.componentType = object.componentType ?? "";
    message.waterUse = object.waterUse ?? "";
    message.emissions = object.emissions ?? "";
    return message;
  },
};

function createBaseMsgUpdateManufacturingResponse(): MsgUpdateManufacturingResponse {
  return {};
}

export const MsgUpdateManufacturingResponse = {
  encode(_: MsgUpdateManufacturingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateManufacturingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateManufacturingResponse();
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

  fromJSON(_: any): MsgUpdateManufacturingResponse {
    return {};
  },

  toJSON(_: MsgUpdateManufacturingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateManufacturingResponse>, I>>(_: I): MsgUpdateManufacturingResponse {
    const message = createBaseMsgUpdateManufacturingResponse();
    return message;
  },
};

function createBaseMsgDeleteManufacturing(): MsgDeleteManufacturing {
  return { creator: "", id: 0 };
}

export const MsgDeleteManufacturing = {
  encode(message: MsgDeleteManufacturing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteManufacturing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteManufacturing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteManufacturing {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteManufacturing): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteManufacturing>, I>>(object: I): MsgDeleteManufacturing {
    const message = createBaseMsgDeleteManufacturing();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteManufacturingResponse(): MsgDeleteManufacturingResponse {
  return {};
}

export const MsgDeleteManufacturingResponse = {
  encode(_: MsgDeleteManufacturingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteManufacturingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteManufacturingResponse();
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

  fromJSON(_: any): MsgDeleteManufacturingResponse {
    return {};
  },

  toJSON(_: MsgDeleteManufacturingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteManufacturingResponse>, I>>(_: I): MsgDeleteManufacturingResponse {
    const message = createBaseMsgDeleteManufacturingResponse();
    return message;
  },
};

function createBaseMsgCreateTransportation(): MsgCreateTransportation {
  return { creator: "", transportationType: "", fuelUse: "", emissions: "" };
}

export const MsgCreateTransportation = {
  encode(message: MsgCreateTransportation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.transportationType !== "") {
      writer.uint32(18).string(message.transportationType);
    }
    if (message.fuelUse !== "") {
      writer.uint32(26).string(message.fuelUse);
    }
    if (message.emissions !== "") {
      writer.uint32(34).string(message.emissions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTransportation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTransportation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.transportationType = reader.string();
          break;
        case 3:
          message.fuelUse = reader.string();
          break;
        case 4:
          message.emissions = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTransportation {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      transportationType: isSet(object.transportationType) ? String(object.transportationType) : "",
      fuelUse: isSet(object.fuelUse) ? String(object.fuelUse) : "",
      emissions: isSet(object.emissions) ? String(object.emissions) : "",
    };
  },

  toJSON(message: MsgCreateTransportation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.transportationType !== undefined && (obj.transportationType = message.transportationType);
    message.fuelUse !== undefined && (obj.fuelUse = message.fuelUse);
    message.emissions !== undefined && (obj.emissions = message.emissions);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateTransportation>, I>>(object: I): MsgCreateTransportation {
    const message = createBaseMsgCreateTransportation();
    message.creator = object.creator ?? "";
    message.transportationType = object.transportationType ?? "";
    message.fuelUse = object.fuelUse ?? "";
    message.emissions = object.emissions ?? "";
    return message;
  },
};

function createBaseMsgCreateTransportationResponse(): MsgCreateTransportationResponse {
  return { id: 0 };
}

export const MsgCreateTransportationResponse = {
  encode(message: MsgCreateTransportationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTransportationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTransportationResponse();
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

  fromJSON(object: any): MsgCreateTransportationResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateTransportationResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateTransportationResponse>, I>>(
    object: I,
  ): MsgCreateTransportationResponse {
    const message = createBaseMsgCreateTransportationResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateTransportation(): MsgUpdateTransportation {
  return { creator: "", id: 0, transportationType: "", fuelUse: "", emissions: "" };
}

export const MsgUpdateTransportation = {
  encode(message: MsgUpdateTransportation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.transportationType !== "") {
      writer.uint32(26).string(message.transportationType);
    }
    if (message.fuelUse !== "") {
      writer.uint32(34).string(message.fuelUse);
    }
    if (message.emissions !== "") {
      writer.uint32(42).string(message.emissions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTransportation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTransportation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.transportationType = reader.string();
          break;
        case 4:
          message.fuelUse = reader.string();
          break;
        case 5:
          message.emissions = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTransportation {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      transportationType: isSet(object.transportationType) ? String(object.transportationType) : "",
      fuelUse: isSet(object.fuelUse) ? String(object.fuelUse) : "",
      emissions: isSet(object.emissions) ? String(object.emissions) : "",
    };
  },

  toJSON(message: MsgUpdateTransportation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.transportationType !== undefined && (obj.transportationType = message.transportationType);
    message.fuelUse !== undefined && (obj.fuelUse = message.fuelUse);
    message.emissions !== undefined && (obj.emissions = message.emissions);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateTransportation>, I>>(object: I): MsgUpdateTransportation {
    const message = createBaseMsgUpdateTransportation();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.transportationType = object.transportationType ?? "";
    message.fuelUse = object.fuelUse ?? "";
    message.emissions = object.emissions ?? "";
    return message;
  },
};

function createBaseMsgUpdateTransportationResponse(): MsgUpdateTransportationResponse {
  return {};
}

export const MsgUpdateTransportationResponse = {
  encode(_: MsgUpdateTransportationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTransportationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTransportationResponse();
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

  fromJSON(_: any): MsgUpdateTransportationResponse {
    return {};
  },

  toJSON(_: MsgUpdateTransportationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateTransportationResponse>, I>>(_: I): MsgUpdateTransportationResponse {
    const message = createBaseMsgUpdateTransportationResponse();
    return message;
  },
};

function createBaseMsgDeleteTransportation(): MsgDeleteTransportation {
  return { creator: "", id: 0 };
}

export const MsgDeleteTransportation = {
  encode(message: MsgDeleteTransportation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteTransportation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteTransportation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteTransportation {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteTransportation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteTransportation>, I>>(object: I): MsgDeleteTransportation {
    const message = createBaseMsgDeleteTransportation();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteTransportationResponse(): MsgDeleteTransportationResponse {
  return {};
}

export const MsgDeleteTransportationResponse = {
  encode(_: MsgDeleteTransportationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteTransportationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteTransportationResponse();
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

  fromJSON(_: any): MsgDeleteTransportationResponse {
    return {};
  },

  toJSON(_: MsgDeleteTransportationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteTransportationResponse>, I>>(_: I): MsgDeleteTransportationResponse {
    const message = createBaseMsgDeleteTransportationResponse();
    return message;
  },
};

function createBaseMsgCreateMaterialProcessing(): MsgCreateMaterialProcessing {
  return { creator: "", materialType: "", waterUse: "", emissions: "" };
}

export const MsgCreateMaterialProcessing = {
  encode(message: MsgCreateMaterialProcessing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.materialType !== "") {
      writer.uint32(18).string(message.materialType);
    }
    if (message.waterUse !== "") {
      writer.uint32(26).string(message.waterUse);
    }
    if (message.emissions !== "") {
      writer.uint32(34).string(message.emissions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMaterialProcessing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMaterialProcessing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.materialType = reader.string();
          break;
        case 3:
          message.waterUse = reader.string();
          break;
        case 4:
          message.emissions = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMaterialProcessing {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      materialType: isSet(object.materialType) ? String(object.materialType) : "",
      waterUse: isSet(object.waterUse) ? String(object.waterUse) : "",
      emissions: isSet(object.emissions) ? String(object.emissions) : "",
    };
  },

  toJSON(message: MsgCreateMaterialProcessing): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.materialType !== undefined && (obj.materialType = message.materialType);
    message.waterUse !== undefined && (obj.waterUse = message.waterUse);
    message.emissions !== undefined && (obj.emissions = message.emissions);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateMaterialProcessing>, I>>(object: I): MsgCreateMaterialProcessing {
    const message = createBaseMsgCreateMaterialProcessing();
    message.creator = object.creator ?? "";
    message.materialType = object.materialType ?? "";
    message.waterUse = object.waterUse ?? "";
    message.emissions = object.emissions ?? "";
    return message;
  },
};

function createBaseMsgCreateMaterialProcessingResponse(): MsgCreateMaterialProcessingResponse {
  return { id: 0 };
}

export const MsgCreateMaterialProcessingResponse = {
  encode(message: MsgCreateMaterialProcessingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMaterialProcessingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMaterialProcessingResponse();
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

  fromJSON(object: any): MsgCreateMaterialProcessingResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateMaterialProcessingResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateMaterialProcessingResponse>, I>>(
    object: I,
  ): MsgCreateMaterialProcessingResponse {
    const message = createBaseMsgCreateMaterialProcessingResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateMaterialProcessing(): MsgUpdateMaterialProcessing {
  return { creator: "", id: 0, materialType: "", waterUse: "", emissions: "" };
}

export const MsgUpdateMaterialProcessing = {
  encode(message: MsgUpdateMaterialProcessing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.materialType !== "") {
      writer.uint32(26).string(message.materialType);
    }
    if (message.waterUse !== "") {
      writer.uint32(34).string(message.waterUse);
    }
    if (message.emissions !== "") {
      writer.uint32(42).string(message.emissions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMaterialProcessing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMaterialProcessing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.materialType = reader.string();
          break;
        case 4:
          message.waterUse = reader.string();
          break;
        case 5:
          message.emissions = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMaterialProcessing {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      materialType: isSet(object.materialType) ? String(object.materialType) : "",
      waterUse: isSet(object.waterUse) ? String(object.waterUse) : "",
      emissions: isSet(object.emissions) ? String(object.emissions) : "",
    };
  },

  toJSON(message: MsgUpdateMaterialProcessing): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.materialType !== undefined && (obj.materialType = message.materialType);
    message.waterUse !== undefined && (obj.waterUse = message.waterUse);
    message.emissions !== undefined && (obj.emissions = message.emissions);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMaterialProcessing>, I>>(object: I): MsgUpdateMaterialProcessing {
    const message = createBaseMsgUpdateMaterialProcessing();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.materialType = object.materialType ?? "";
    message.waterUse = object.waterUse ?? "";
    message.emissions = object.emissions ?? "";
    return message;
  },
};

function createBaseMsgUpdateMaterialProcessingResponse(): MsgUpdateMaterialProcessingResponse {
  return {};
}

export const MsgUpdateMaterialProcessingResponse = {
  encode(_: MsgUpdateMaterialProcessingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMaterialProcessingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMaterialProcessingResponse();
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

  fromJSON(_: any): MsgUpdateMaterialProcessingResponse {
    return {};
  },

  toJSON(_: MsgUpdateMaterialProcessingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMaterialProcessingResponse>, I>>(
    _: I,
  ): MsgUpdateMaterialProcessingResponse {
    const message = createBaseMsgUpdateMaterialProcessingResponse();
    return message;
  },
};

function createBaseMsgDeleteMaterialProcessing(): MsgDeleteMaterialProcessing {
  return { creator: "", id: 0 };
}

export const MsgDeleteMaterialProcessing = {
  encode(message: MsgDeleteMaterialProcessing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteMaterialProcessing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteMaterialProcessing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteMaterialProcessing {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteMaterialProcessing): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteMaterialProcessing>, I>>(object: I): MsgDeleteMaterialProcessing {
    const message = createBaseMsgDeleteMaterialProcessing();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteMaterialProcessingResponse(): MsgDeleteMaterialProcessingResponse {
  return {};
}

export const MsgDeleteMaterialProcessingResponse = {
  encode(_: MsgDeleteMaterialProcessingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteMaterialProcessingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteMaterialProcessingResponse();
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

  fromJSON(_: any): MsgDeleteMaterialProcessingResponse {
    return {};
  },

  toJSON(_: MsgDeleteMaterialProcessingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteMaterialProcessingResponse>, I>>(
    _: I,
  ): MsgDeleteMaterialProcessingResponse {
    const message = createBaseMsgDeleteMaterialProcessingResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateRawMaterialExtraction(request: MsgCreateRawMaterialExtraction): Promise<MsgCreateRawMaterialExtractionResponse>;
  UpdateRawMaterialExtraction(request: MsgUpdateRawMaterialExtraction): Promise<MsgUpdateRawMaterialExtractionResponse>;
  DeleteRawMaterialExtraction(request: MsgDeleteRawMaterialExtraction): Promise<MsgDeleteRawMaterialExtractionResponse>;
  CreateManufacturing(request: MsgCreateManufacturing): Promise<MsgCreateManufacturingResponse>;
  UpdateManufacturing(request: MsgUpdateManufacturing): Promise<MsgUpdateManufacturingResponse>;
  DeleteManufacturing(request: MsgDeleteManufacturing): Promise<MsgDeleteManufacturingResponse>;
  CreateTransportation(request: MsgCreateTransportation): Promise<MsgCreateTransportationResponse>;
  UpdateTransportation(request: MsgUpdateTransportation): Promise<MsgUpdateTransportationResponse>;
  DeleteTransportation(request: MsgDeleteTransportation): Promise<MsgDeleteTransportationResponse>;
  CreateMaterialProcessing(request: MsgCreateMaterialProcessing): Promise<MsgCreateMaterialProcessingResponse>;
  UpdateMaterialProcessing(request: MsgUpdateMaterialProcessing): Promise<MsgUpdateMaterialProcessingResponse>;
  DeleteMaterialProcessing(request: MsgDeleteMaterialProcessing): Promise<MsgDeleteMaterialProcessingResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateRawMaterialExtraction = this.CreateRawMaterialExtraction.bind(this);
    this.UpdateRawMaterialExtraction = this.UpdateRawMaterialExtraction.bind(this);
    this.DeleteRawMaterialExtraction = this.DeleteRawMaterialExtraction.bind(this);
    this.CreateManufacturing = this.CreateManufacturing.bind(this);
    this.UpdateManufacturing = this.UpdateManufacturing.bind(this);
    this.DeleteManufacturing = this.DeleteManufacturing.bind(this);
    this.CreateTransportation = this.CreateTransportation.bind(this);
    this.UpdateTransportation = this.UpdateTransportation.bind(this);
    this.DeleteTransportation = this.DeleteTransportation.bind(this);
    this.CreateMaterialProcessing = this.CreateMaterialProcessing.bind(this);
    this.UpdateMaterialProcessing = this.UpdateMaterialProcessing.bind(this);
    this.DeleteMaterialProcessing = this.DeleteMaterialProcessing.bind(this);
  }
  CreateRawMaterialExtraction(
    request: MsgCreateRawMaterialExtraction,
  ): Promise<MsgCreateRawMaterialExtractionResponse> {
    const data = MsgCreateRawMaterialExtraction.encode(request).finish();
    const promise = this.rpc.request(
      "esgobservabilitydemo.esgobservabilitydemo.Msg",
      "CreateRawMaterialExtraction",
      data,
    );
    return promise.then((data) => MsgCreateRawMaterialExtractionResponse.decode(new _m0.Reader(data)));
  }

  UpdateRawMaterialExtraction(
    request: MsgUpdateRawMaterialExtraction,
  ): Promise<MsgUpdateRawMaterialExtractionResponse> {
    const data = MsgUpdateRawMaterialExtraction.encode(request).finish();
    const promise = this.rpc.request(
      "esgobservabilitydemo.esgobservabilitydemo.Msg",
      "UpdateRawMaterialExtraction",
      data,
    );
    return promise.then((data) => MsgUpdateRawMaterialExtractionResponse.decode(new _m0.Reader(data)));
  }

  DeleteRawMaterialExtraction(
    request: MsgDeleteRawMaterialExtraction,
  ): Promise<MsgDeleteRawMaterialExtractionResponse> {
    const data = MsgDeleteRawMaterialExtraction.encode(request).finish();
    const promise = this.rpc.request(
      "esgobservabilitydemo.esgobservabilitydemo.Msg",
      "DeleteRawMaterialExtraction",
      data,
    );
    return promise.then((data) => MsgDeleteRawMaterialExtractionResponse.decode(new _m0.Reader(data)));
  }

  CreateManufacturing(request: MsgCreateManufacturing): Promise<MsgCreateManufacturingResponse> {
    const data = MsgCreateManufacturing.encode(request).finish();
    const promise = this.rpc.request("esgobservabilitydemo.esgobservabilitydemo.Msg", "CreateManufacturing", data);
    return promise.then((data) => MsgCreateManufacturingResponse.decode(new _m0.Reader(data)));
  }

  UpdateManufacturing(request: MsgUpdateManufacturing): Promise<MsgUpdateManufacturingResponse> {
    const data = MsgUpdateManufacturing.encode(request).finish();
    const promise = this.rpc.request("esgobservabilitydemo.esgobservabilitydemo.Msg", "UpdateManufacturing", data);
    return promise.then((data) => MsgUpdateManufacturingResponse.decode(new _m0.Reader(data)));
  }

  DeleteManufacturing(request: MsgDeleteManufacturing): Promise<MsgDeleteManufacturingResponse> {
    const data = MsgDeleteManufacturing.encode(request).finish();
    const promise = this.rpc.request("esgobservabilitydemo.esgobservabilitydemo.Msg", "DeleteManufacturing", data);
    return promise.then((data) => MsgDeleteManufacturingResponse.decode(new _m0.Reader(data)));
  }

  CreateTransportation(request: MsgCreateTransportation): Promise<MsgCreateTransportationResponse> {
    const data = MsgCreateTransportation.encode(request).finish();
    const promise = this.rpc.request("esgobservabilitydemo.esgobservabilitydemo.Msg", "CreateTransportation", data);
    return promise.then((data) => MsgCreateTransportationResponse.decode(new _m0.Reader(data)));
  }

  UpdateTransportation(request: MsgUpdateTransportation): Promise<MsgUpdateTransportationResponse> {
    const data = MsgUpdateTransportation.encode(request).finish();
    const promise = this.rpc.request("esgobservabilitydemo.esgobservabilitydemo.Msg", "UpdateTransportation", data);
    return promise.then((data) => MsgUpdateTransportationResponse.decode(new _m0.Reader(data)));
  }

  DeleteTransportation(request: MsgDeleteTransportation): Promise<MsgDeleteTransportationResponse> {
    const data = MsgDeleteTransportation.encode(request).finish();
    const promise = this.rpc.request("esgobservabilitydemo.esgobservabilitydemo.Msg", "DeleteTransportation", data);
    return promise.then((data) => MsgDeleteTransportationResponse.decode(new _m0.Reader(data)));
  }

  CreateMaterialProcessing(request: MsgCreateMaterialProcessing): Promise<MsgCreateMaterialProcessingResponse> {
    const data = MsgCreateMaterialProcessing.encode(request).finish();
    const promise = this.rpc.request("esgobservabilitydemo.esgobservabilitydemo.Msg", "CreateMaterialProcessing", data);
    return promise.then((data) => MsgCreateMaterialProcessingResponse.decode(new _m0.Reader(data)));
  }

  UpdateMaterialProcessing(request: MsgUpdateMaterialProcessing): Promise<MsgUpdateMaterialProcessingResponse> {
    const data = MsgUpdateMaterialProcessing.encode(request).finish();
    const promise = this.rpc.request("esgobservabilitydemo.esgobservabilitydemo.Msg", "UpdateMaterialProcessing", data);
    return promise.then((data) => MsgUpdateMaterialProcessingResponse.decode(new _m0.Reader(data)));
  }

  DeleteMaterialProcessing(request: MsgDeleteMaterialProcessing): Promise<MsgDeleteMaterialProcessingResponse> {
    const data = MsgDeleteMaterialProcessing.encode(request).finish();
    const promise = this.rpc.request("esgobservabilitydemo.esgobservabilitydemo.Msg", "DeleteMaterialProcessing", data);
    return promise.then((data) => MsgDeleteMaterialProcessingResponse.decode(new _m0.Reader(data)));
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
