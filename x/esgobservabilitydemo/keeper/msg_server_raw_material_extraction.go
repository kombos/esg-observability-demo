package keeper

import (
	"context"
	"fmt"

	"esg-observability-demo/x/esgobservabilitydemo/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateRawMaterialExtraction(goCtx context.Context, msg *types.MsgCreateRawMaterialExtraction) (*types.MsgCreateRawMaterialExtractionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var rawMaterialExtraction = types.RawMaterialExtraction{
		Creator:      msg.Creator,
		ResourceType: msg.ResourceType,
		WaterUse:     msg.WaterUse,
		Emissions:    msg.Emissions,
	}

	id := k.AppendRawMaterialExtraction(
		ctx,
		rawMaterialExtraction,
	)

	return &types.MsgCreateRawMaterialExtractionResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateRawMaterialExtraction(goCtx context.Context, msg *types.MsgUpdateRawMaterialExtraction) (*types.MsgUpdateRawMaterialExtractionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var rawMaterialExtraction = types.RawMaterialExtraction{
		Creator:      msg.Creator,
		Id:           msg.Id,
		ResourceType: msg.ResourceType,
		WaterUse:     msg.WaterUse,
		Emissions:    msg.Emissions,
	}

	// Checks that the element exists
	val, found := k.GetRawMaterialExtraction(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetRawMaterialExtraction(ctx, rawMaterialExtraction)

	return &types.MsgUpdateRawMaterialExtractionResponse{}, nil
}

func (k msgServer) DeleteRawMaterialExtraction(goCtx context.Context, msg *types.MsgDeleteRawMaterialExtraction) (*types.MsgDeleteRawMaterialExtractionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetRawMaterialExtraction(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveRawMaterialExtraction(ctx, msg.Id)

	return &types.MsgDeleteRawMaterialExtractionResponse{}, nil
}
