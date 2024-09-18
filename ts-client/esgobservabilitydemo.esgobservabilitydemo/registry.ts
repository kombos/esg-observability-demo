import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateManufacturing } from "./types/esgobservabilitydemo/esgobservabilitydemo/tx";
import { MsgDeleteTransportation } from "./types/esgobservabilitydemo/esgobservabilitydemo/tx";
import { MsgUpdateMaterialProcessing } from "./types/esgobservabilitydemo/esgobservabilitydemo/tx";
import { MsgUpdateRawMaterialExtraction } from "./types/esgobservabilitydemo/esgobservabilitydemo/tx";
import { MsgDeleteRawMaterialExtraction } from "./types/esgobservabilitydemo/esgobservabilitydemo/tx";
import { MsgUpdateTransportation } from "./types/esgobservabilitydemo/esgobservabilitydemo/tx";
import { MsgCreateManufacturing } from "./types/esgobservabilitydemo/esgobservabilitydemo/tx";
import { MsgDeleteManufacturing } from "./types/esgobservabilitydemo/esgobservabilitydemo/tx";
import { MsgDeleteMaterialProcessing } from "./types/esgobservabilitydemo/esgobservabilitydemo/tx";
import { MsgCreateRawMaterialExtraction } from "./types/esgobservabilitydemo/esgobservabilitydemo/tx";
import { MsgCreateTransportation } from "./types/esgobservabilitydemo/esgobservabilitydemo/tx";
import { MsgCreateMaterialProcessing } from "./types/esgobservabilitydemo/esgobservabilitydemo/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/esgobservabilitydemo.esgobservabilitydemo.MsgUpdateManufacturing", MsgUpdateManufacturing],
    ["/esgobservabilitydemo.esgobservabilitydemo.MsgDeleteTransportation", MsgDeleteTransportation],
    ["/esgobservabilitydemo.esgobservabilitydemo.MsgUpdateMaterialProcessing", MsgUpdateMaterialProcessing],
    ["/esgobservabilitydemo.esgobservabilitydemo.MsgUpdateRawMaterialExtraction", MsgUpdateRawMaterialExtraction],
    ["/esgobservabilitydemo.esgobservabilitydemo.MsgDeleteRawMaterialExtraction", MsgDeleteRawMaterialExtraction],
    ["/esgobservabilitydemo.esgobservabilitydemo.MsgUpdateTransportation", MsgUpdateTransportation],
    ["/esgobservabilitydemo.esgobservabilitydemo.MsgCreateManufacturing", MsgCreateManufacturing],
    ["/esgobservabilitydemo.esgobservabilitydemo.MsgDeleteManufacturing", MsgDeleteManufacturing],
    ["/esgobservabilitydemo.esgobservabilitydemo.MsgDeleteMaterialProcessing", MsgDeleteMaterialProcessing],
    ["/esgobservabilitydemo.esgobservabilitydemo.MsgCreateRawMaterialExtraction", MsgCreateRawMaterialExtraction],
    ["/esgobservabilitydemo.esgobservabilitydemo.MsgCreateTransportation", MsgCreateTransportation],
    ["/esgobservabilitydemo.esgobservabilitydemo.MsgCreateMaterialProcessing", MsgCreateMaterialProcessing],
    
];

export { msgTypes }