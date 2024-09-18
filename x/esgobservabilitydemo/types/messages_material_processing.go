package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateMaterialProcessing = "create_material_processing"
	TypeMsgUpdateMaterialProcessing = "update_material_processing"
	TypeMsgDeleteMaterialProcessing = "delete_material_processing"
)

var _ sdk.Msg = &MsgCreateMaterialProcessing{}

func NewMsgCreateMaterialProcessing(creator string, materialType string, waterUse string, emissions string) *MsgCreateMaterialProcessing {
	return &MsgCreateMaterialProcessing{
		Creator:      creator,
		MaterialType: materialType,
		WaterUse:     waterUse,
		Emissions:    emissions,
	}
}

func (msg *MsgCreateMaterialProcessing) Route() string {
	return RouterKey
}

func (msg *MsgCreateMaterialProcessing) Type() string {
	return TypeMsgCreateMaterialProcessing
}

func (msg *MsgCreateMaterialProcessing) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateMaterialProcessing) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateMaterialProcessing) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateMaterialProcessing{}

func NewMsgUpdateMaterialProcessing(creator string, id uint64, materialType string, waterUse string, emissions string) *MsgUpdateMaterialProcessing {
	return &MsgUpdateMaterialProcessing{
		Id:           id,
		Creator:      creator,
		MaterialType: materialType,
		WaterUse:     waterUse,
		Emissions:    emissions,
	}
}

func (msg *MsgUpdateMaterialProcessing) Route() string {
	return RouterKey
}

func (msg *MsgUpdateMaterialProcessing) Type() string {
	return TypeMsgUpdateMaterialProcessing
}

func (msg *MsgUpdateMaterialProcessing) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateMaterialProcessing) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateMaterialProcessing) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteMaterialProcessing{}

func NewMsgDeleteMaterialProcessing(creator string, id uint64) *MsgDeleteMaterialProcessing {
	return &MsgDeleteMaterialProcessing{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteMaterialProcessing) Route() string {
	return RouterKey
}

func (msg *MsgDeleteMaterialProcessing) Type() string {
	return TypeMsgDeleteMaterialProcessing
}

func (msg *MsgDeleteMaterialProcessing) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteMaterialProcessing) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteMaterialProcessing) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
