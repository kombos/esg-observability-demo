package keeper

import (
	"context"
	"errors"
	"fmt"

	"esgobservabilitydemo/x/esgobservabilitydemo/types"

	"cosmossdk.io/collections"
	errorsmod "cosmossdk.io/errors"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateTransportation(ctx context.Context, msg *types.MsgCreateTransportation) (*types.MsgCreateTransportationResponse, error) {
	if _, err := k.addressCodec.StringToBytes(msg.Creator); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrInvalidAddress, fmt.Sprintf("invalid address: %s", err))
	}

	nextId, err := k.TransportationSeq.Next(ctx)
	if err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrInvalidRequest, "failed to get next id")
	}

	var transportation = types.Transportation{
		Id:                 nextId,
		Creator:            msg.Creator,
		TransportationType: msg.TransportationType,
		FuelUse:            msg.FuelUse,
		Emissions:          msg.Emissions,
	}

	if err = k.Transportation.Set(
		ctx,
		nextId,
		transportation,
	); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "failed to set transportation")
	}

	return &types.MsgCreateTransportationResponse{
		Id: nextId,
	}, nil
}

func (k msgServer) UpdateTransportation(ctx context.Context, msg *types.MsgUpdateTransportation) (*types.MsgUpdateTransportationResponse, error) {
	if _, err := k.addressCodec.StringToBytes(msg.Creator); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrInvalidAddress, fmt.Sprintf("invalid address: %s", err))
	}

	var transportation = types.Transportation{
		Creator:            msg.Creator,
		Id:                 msg.Id,
		TransportationType: msg.TransportationType,
		FuelUse:            msg.FuelUse,
		Emissions:          msg.Emissions,
	}

	// Checks that the element exists
	val, err := k.Transportation.Get(ctx, msg.Id)
	if err != nil {
		if errors.Is(err, collections.ErrNotFound) {
			return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
		}

		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "failed to get transportation")
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	if err := k.Transportation.Set(ctx, msg.Id, transportation); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "failed to update transportation")
	}

	return &types.MsgUpdateTransportationResponse{}, nil
}

func (k msgServer) DeleteTransportation(ctx context.Context, msg *types.MsgDeleteTransportation) (*types.MsgDeleteTransportationResponse, error) {
	if _, err := k.addressCodec.StringToBytes(msg.Creator); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrInvalidAddress, fmt.Sprintf("invalid address: %s", err))
	}

	// Checks that the element exists
	val, err := k.Transportation.Get(ctx, msg.Id)
	if err != nil {
		if errors.Is(err, collections.ErrNotFound) {
			return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
		}

		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "failed to get transportation")
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	if err := k.Transportation.Remove(ctx, msg.Id); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "failed to delete transportation")
	}

	return &types.MsgDeleteTransportationResponse{}, nil
}
