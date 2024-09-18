/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Manufacturing } from "./manufacturing";
import { MaterialProcessing } from "./material_processing";
import { Params } from "./params";
import { RawMaterialExtraction } from "./raw_material_extraction";
import { Transportation } from "./transportation";

export const protobufPackage = "esgobservabilitydemo.esgobservabilitydemo";

/** GenesisState defines the esgobservabilitydemo module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  rawMaterialExtractionList: RawMaterialExtraction[];
  rawMaterialExtractionCount: number;
  manufacturingList: Manufacturing[];
  manufacturingCount: number;
  transportationList: Transportation[];
  transportationCount: number;
  materialProcessingList: MaterialProcessing[];
  materialProcessingCount: number;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    rawMaterialExtractionList: [],
    rawMaterialExtractionCount: 0,
    manufacturingList: [],
    manufacturingCount: 0,
    transportationList: [],
    transportationCount: 0,
    materialProcessingList: [],
    materialProcessingCount: 0,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rawMaterialExtractionList) {
      RawMaterialExtraction.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.rawMaterialExtractionCount !== 0) {
      writer.uint32(24).uint64(message.rawMaterialExtractionCount);
    }
    for (const v of message.manufacturingList) {
      Manufacturing.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.manufacturingCount !== 0) {
      writer.uint32(40).uint64(message.manufacturingCount);
    }
    for (const v of message.transportationList) {
      Transportation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.transportationCount !== 0) {
      writer.uint32(56).uint64(message.transportationCount);
    }
    for (const v of message.materialProcessingList) {
      MaterialProcessing.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.materialProcessingCount !== 0) {
      writer.uint32(72).uint64(message.materialProcessingCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.rawMaterialExtractionList.push(RawMaterialExtraction.decode(reader, reader.uint32()));
          break;
        case 3:
          message.rawMaterialExtractionCount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.manufacturingList.push(Manufacturing.decode(reader, reader.uint32()));
          break;
        case 5:
          message.manufacturingCount = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.transportationList.push(Transportation.decode(reader, reader.uint32()));
          break;
        case 7:
          message.transportationCount = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.materialProcessingList.push(MaterialProcessing.decode(reader, reader.uint32()));
          break;
        case 9:
          message.materialProcessingCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      rawMaterialExtractionList: Array.isArray(object?.rawMaterialExtractionList)
        ? object.rawMaterialExtractionList.map((e: any) => RawMaterialExtraction.fromJSON(e))
        : [],
      rawMaterialExtractionCount: isSet(object.rawMaterialExtractionCount)
        ? Number(object.rawMaterialExtractionCount)
        : 0,
      manufacturingList: Array.isArray(object?.manufacturingList)
        ? object.manufacturingList.map((e: any) => Manufacturing.fromJSON(e))
        : [],
      manufacturingCount: isSet(object.manufacturingCount) ? Number(object.manufacturingCount) : 0,
      transportationList: Array.isArray(object?.transportationList)
        ? object.transportationList.map((e: any) => Transportation.fromJSON(e))
        : [],
      transportationCount: isSet(object.transportationCount) ? Number(object.transportationCount) : 0,
      materialProcessingList: Array.isArray(object?.materialProcessingList)
        ? object.materialProcessingList.map((e: any) => MaterialProcessing.fromJSON(e))
        : [],
      materialProcessingCount: isSet(object.materialProcessingCount) ? Number(object.materialProcessingCount) : 0,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.rawMaterialExtractionList) {
      obj.rawMaterialExtractionList = message.rawMaterialExtractionList.map((e) =>
        e ? RawMaterialExtraction.toJSON(e) : undefined
      );
    } else {
      obj.rawMaterialExtractionList = [];
    }
    message.rawMaterialExtractionCount !== undefined
      && (obj.rawMaterialExtractionCount = Math.round(message.rawMaterialExtractionCount));
    if (message.manufacturingList) {
      obj.manufacturingList = message.manufacturingList.map((e) => e ? Manufacturing.toJSON(e) : undefined);
    } else {
      obj.manufacturingList = [];
    }
    message.manufacturingCount !== undefined && (obj.manufacturingCount = Math.round(message.manufacturingCount));
    if (message.transportationList) {
      obj.transportationList = message.transportationList.map((e) => e ? Transportation.toJSON(e) : undefined);
    } else {
      obj.transportationList = [];
    }
    message.transportationCount !== undefined && (obj.transportationCount = Math.round(message.transportationCount));
    if (message.materialProcessingList) {
      obj.materialProcessingList = message.materialProcessingList.map((e) =>
        e ? MaterialProcessing.toJSON(e) : undefined
      );
    } else {
      obj.materialProcessingList = [];
    }
    message.materialProcessingCount !== undefined
      && (obj.materialProcessingCount = Math.round(message.materialProcessingCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.rawMaterialExtractionList =
      object.rawMaterialExtractionList?.map((e) => RawMaterialExtraction.fromPartial(e)) || [];
    message.rawMaterialExtractionCount = object.rawMaterialExtractionCount ?? 0;
    message.manufacturingList = object.manufacturingList?.map((e) => Manufacturing.fromPartial(e)) || [];
    message.manufacturingCount = object.manufacturingCount ?? 0;
    message.transportationList = object.transportationList?.map((e) => Transportation.fromPartial(e)) || [];
    message.transportationCount = object.transportationCount ?? 0;
    message.materialProcessingList = object.materialProcessingList?.map((e) => MaterialProcessing.fromPartial(e)) || [];
    message.materialProcessingCount = object.materialProcessingCount ?? 0;
    return message;
  },
};

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
