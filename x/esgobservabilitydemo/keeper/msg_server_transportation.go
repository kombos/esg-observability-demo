package keeper

import (
	"context"
	"fmt"

	"esg-observability-demo/x/esgobservabilitydemo/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateTransportation(goCtx context.Context, msg *types.MsgCreateTransportation) (*types.MsgCreateTransportationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var transportation = types.Transportation{
		Creator:            msg.Creator,
		TransportationType: msg.TransportationType,
		FuelUse:            msg.FuelUse,
		Emissions:          msg.Emissions,
	}

	id := k.AppendTransportation(
		ctx,
		transportation,
	)

	return &types.MsgCreateTransportationResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateTransportation(goCtx context.Context, msg *types.MsgUpdateTransportation) (*types.MsgUpdateTransportationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var transportation = types.Transportation{
		Creator:            msg.Creator,
		Id:                 msg.Id,
		TransportationType: msg.TransportationType,
		FuelUse:            msg.FuelUse,
		Emissions:          msg.Emissions,
	}

	// Checks that the element exists
	val, found := k.GetTransportation(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetTransportation(ctx, transportation)

	return &types.MsgUpdateTransportationResponse{}, nil
}

func (k msgServer) DeleteTransportation(goCtx context.Context, msg *types.MsgDeleteTransportation) (*types.MsgDeleteTransportationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetTransportation(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveTransportation(ctx, msg.Id)

	return &types.MsgDeleteTransportationResponse{}, nil
}
