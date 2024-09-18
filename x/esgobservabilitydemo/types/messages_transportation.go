package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateTransportation = "create_transportation"
	TypeMsgUpdateTransportation = "update_transportation"
	TypeMsgDeleteTransportation = "delete_transportation"
)

var _ sdk.Msg = &MsgCreateTransportation{}

func NewMsgCreateTransportation(creator string, transportationType string, fuelUse string, emissions string) *MsgCreateTransportation {
	return &MsgCreateTransportation{
		Creator:            creator,
		TransportationType: transportationType,
		FuelUse:            fuelUse,
		Emissions:          emissions,
	}
}

func (msg *MsgCreateTransportation) Route() string {
	return RouterKey
}

func (msg *MsgCreateTransportation) Type() string {
	return TypeMsgCreateTransportation
}

func (msg *MsgCreateTransportation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateTransportation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateTransportation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateTransportation{}

func NewMsgUpdateTransportation(creator string, id uint64, transportationType string, fuelUse string, emissions string) *MsgUpdateTransportation {
	return &MsgUpdateTransportation{
		Id:                 id,
		Creator:            creator,
		TransportationType: transportationType,
		FuelUse:            fuelUse,
		Emissions:          emissions,
	}
}

func (msg *MsgUpdateTransportation) Route() string {
	return RouterKey
}

func (msg *MsgUpdateTransportation) Type() string {
	return TypeMsgUpdateTransportation
}

func (msg *MsgUpdateTransportation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateTransportation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateTransportation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteTransportation{}

func NewMsgDeleteTransportation(creator string, id uint64) *MsgDeleteTransportation {
	return &MsgDeleteTransportation{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteTransportation) Route() string {
	return RouterKey
}

func (msg *MsgDeleteTransportation) Type() string {
	return TypeMsgDeleteTransportation
}

func (msg *MsgDeleteTransportation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteTransportation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteTransportation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
