package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateRawMaterialExtraction = "create_raw_material_extraction"
	TypeMsgUpdateRawMaterialExtraction = "update_raw_material_extraction"
	TypeMsgDeleteRawMaterialExtraction = "delete_raw_material_extraction"
)

var _ sdk.Msg = &MsgCreateRawMaterialExtraction{}

func NewMsgCreateRawMaterialExtraction(creator string, resourceType string, waterUse string, emissions string) *MsgCreateRawMaterialExtraction {
	return &MsgCreateRawMaterialExtraction{
		Creator:      creator,
		ResourceType: resourceType,
		WaterUse:     waterUse,
		Emissions:    emissions,
	}
}

func (msg *MsgCreateRawMaterialExtraction) Route() string {
	return RouterKey
}

func (msg *MsgCreateRawMaterialExtraction) Type() string {
	return TypeMsgCreateRawMaterialExtraction
}

func (msg *MsgCreateRawMaterialExtraction) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateRawMaterialExtraction) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateRawMaterialExtraction) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateRawMaterialExtraction{}

func NewMsgUpdateRawMaterialExtraction(creator string, id uint64, resourceType string, waterUse string, emissions string) *MsgUpdateRawMaterialExtraction {
	return &MsgUpdateRawMaterialExtraction{
		Id:           id,
		Creator:      creator,
		ResourceType: resourceType,
		WaterUse:     waterUse,
		Emissions:    emissions,
	}
}

func (msg *MsgUpdateRawMaterialExtraction) Route() string {
	return RouterKey
}

func (msg *MsgUpdateRawMaterialExtraction) Type() string {
	return TypeMsgUpdateRawMaterialExtraction
}

func (msg *MsgUpdateRawMaterialExtraction) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateRawMaterialExtraction) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateRawMaterialExtraction) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteRawMaterialExtraction{}

func NewMsgDeleteRawMaterialExtraction(creator string, id uint64) *MsgDeleteRawMaterialExtraction {
	return &MsgDeleteRawMaterialExtraction{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteRawMaterialExtraction) Route() string {
	return RouterKey
}

func (msg *MsgDeleteRawMaterialExtraction) Type() string {
	return TypeMsgDeleteRawMaterialExtraction
}

func (msg *MsgDeleteRawMaterialExtraction) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteRawMaterialExtraction) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteRawMaterialExtraction) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
