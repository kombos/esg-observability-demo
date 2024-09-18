package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateRawMaterialExtraction{}, "esgobservabilitydemo/CreateRawMaterialExtraction", nil)
	cdc.RegisterConcrete(&MsgUpdateRawMaterialExtraction{}, "esgobservabilitydemo/UpdateRawMaterialExtraction", nil)
	cdc.RegisterConcrete(&MsgDeleteRawMaterialExtraction{}, "esgobservabilitydemo/DeleteRawMaterialExtraction", nil)
	cdc.RegisterConcrete(&MsgCreateManufacturing{}, "esgobservabilitydemo/CreateManufacturing", nil)
	cdc.RegisterConcrete(&MsgUpdateManufacturing{}, "esgobservabilitydemo/UpdateManufacturing", nil)
	cdc.RegisterConcrete(&MsgDeleteManufacturing{}, "esgobservabilitydemo/DeleteManufacturing", nil)
	cdc.RegisterConcrete(&MsgCreateTransportation{}, "esgobservabilitydemo/CreateTransportation", nil)
	cdc.RegisterConcrete(&MsgUpdateTransportation{}, "esgobservabilitydemo/UpdateTransportation", nil)
	cdc.RegisterConcrete(&MsgDeleteTransportation{}, "esgobservabilitydemo/DeleteTransportation", nil)
	cdc.RegisterConcrete(&MsgCreateMaterialProcessing{}, "esgobservabilitydemo/CreateMaterialProcessing", nil)
	cdc.RegisterConcrete(&MsgUpdateMaterialProcessing{}, "esgobservabilitydemo/UpdateMaterialProcessing", nil)
	cdc.RegisterConcrete(&MsgDeleteMaterialProcessing{}, "esgobservabilitydemo/DeleteMaterialProcessing", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateRawMaterialExtraction{},
		&MsgUpdateRawMaterialExtraction{},
		&MsgDeleteRawMaterialExtraction{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateManufacturing{},
		&MsgUpdateManufacturing{},
		&MsgDeleteManufacturing{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTransportation{},
		&MsgUpdateTransportation{},
		&MsgDeleteTransportation{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateMaterialProcessing{},
		&MsgUpdateMaterialProcessing{},
		&MsgDeleteMaterialProcessing{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
