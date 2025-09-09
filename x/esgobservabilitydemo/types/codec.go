package types

import (
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterInterfaces(registrar codectypes.InterfaceRegistry) {
	registrar.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateMaterialProcessing{},
		&MsgUpdateMaterialProcessing{},
		&MsgDeleteMaterialProcessing{},
	)

	registrar.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTransportation{},
		&MsgUpdateTransportation{},
		&MsgDeleteTransportation{},
	)

	registrar.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateManufacturing{},
		&MsgUpdateManufacturing{},
		&MsgDeleteManufacturing{},
	)

	registrar.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateRawMaterialExtraction{},
		&MsgUpdateRawMaterialExtraction{},
		&MsgDeleteRawMaterialExtraction{},
	)

	registrar.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUpdateParams{},
	)
	msgservice.RegisterMsgServiceDesc(registrar, &_Msg_serviceDesc)
}
