package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateManufacturing = "create_manufacturing"
	TypeMsgUpdateManufacturing = "update_manufacturing"
	TypeMsgDeleteManufacturing = "delete_manufacturing"
)

var _ sdk.Msg = &MsgCreateManufacturing{}

func NewMsgCreateManufacturing(creator string, componentType string, waterUse string, emissions string) *MsgCreateManufacturing {
	return &MsgCreateManufacturing{
		Creator:       creator,
		ComponentType: componentType,
		WaterUse:      waterUse,
		Emissions:     emissions,
	}
}

func (msg *MsgCreateManufacturing) Route() string {
	return RouterKey
}

func (msg *MsgCreateManufacturing) Type() string {
	return TypeMsgCreateManufacturing
}

func (msg *MsgCreateManufacturing) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateManufacturing) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateManufacturing) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateManufacturing{}

func NewMsgUpdateManufacturing(creator string, id uint64, componentType string, waterUse string, emissions string) *MsgUpdateManufacturing {
	return &MsgUpdateManufacturing{
		Id:            id,
		Creator:       creator,
		ComponentType: componentType,
		WaterUse:      waterUse,
		Emissions:     emissions,
	}
}

func (msg *MsgUpdateManufacturing) Route() string {
	return RouterKey
}

func (msg *MsgUpdateManufacturing) Type() string {
	return TypeMsgUpdateManufacturing
}

func (msg *MsgUpdateManufacturing) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateManufacturing) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateManufacturing) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteManufacturing{}

func NewMsgDeleteManufacturing(creator string, id uint64) *MsgDeleteManufacturing {
	return &MsgDeleteManufacturing{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteManufacturing) Route() string {
	return RouterKey
}

func (msg *MsgDeleteManufacturing) Type() string {
	return TypeMsgDeleteManufacturing
}

func (msg *MsgDeleteManufacturing) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteManufacturing) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteManufacturing) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
