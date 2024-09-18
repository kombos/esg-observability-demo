package keeper

import (
	"context"
	"fmt"

	"esg-observability-demo/x/esgobservabilitydemo/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateManufacturing(goCtx context.Context, msg *types.MsgCreateManufacturing) (*types.MsgCreateManufacturingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var manufacturing = types.Manufacturing{
		Creator:       msg.Creator,
		ComponentType: msg.ComponentType,
		WaterUse:      msg.WaterUse,
		Emissions:     msg.Emissions,
	}

	id := k.AppendManufacturing(
		ctx,
		manufacturing,
	)

	return &types.MsgCreateManufacturingResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateManufacturing(goCtx context.Context, msg *types.MsgUpdateManufacturing) (*types.MsgUpdateManufacturingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var manufacturing = types.Manufacturing{
		Creator:       msg.Creator,
		Id:            msg.Id,
		ComponentType: msg.ComponentType,
		WaterUse:      msg.WaterUse,
		Emissions:     msg.Emissions,
	}

	// Checks that the element exists
	val, found := k.GetManufacturing(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetManufacturing(ctx, manufacturing)

	return &types.MsgUpdateManufacturingResponse{}, nil
}

func (k msgServer) DeleteManufacturing(goCtx context.Context, msg *types.MsgDeleteManufacturing) (*types.MsgDeleteManufacturingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetManufacturing(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveManufacturing(ctx, msg.Id)

	return &types.MsgDeleteManufacturingResponse{}, nil
}
