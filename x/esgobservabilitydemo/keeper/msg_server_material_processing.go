package keeper

import (
	"context"
	"fmt"

	"esg-observability-demo/x/esgobservabilitydemo/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateMaterialProcessing(goCtx context.Context, msg *types.MsgCreateMaterialProcessing) (*types.MsgCreateMaterialProcessingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var materialProcessing = types.MaterialProcessing{
		Creator:      msg.Creator,
		MaterialType: msg.MaterialType,
		WaterUse:     msg.WaterUse,
		Emissions:    msg.Emissions,
	}

	id := k.AppendMaterialProcessing(
		ctx,
		materialProcessing,
	)

	return &types.MsgCreateMaterialProcessingResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateMaterialProcessing(goCtx context.Context, msg *types.MsgUpdateMaterialProcessing) (*types.MsgUpdateMaterialProcessingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var materialProcessing = types.MaterialProcessing{
		Creator:      msg.Creator,
		Id:           msg.Id,
		MaterialType: msg.MaterialType,
		WaterUse:     msg.WaterUse,
		Emissions:    msg.Emissions,
	}

	// Checks that the element exists
	val, found := k.GetMaterialProcessing(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetMaterialProcessing(ctx, materialProcessing)

	return &types.MsgUpdateMaterialProcessingResponse{}, nil
}

func (k msgServer) DeleteMaterialProcessing(goCtx context.Context, msg *types.MsgDeleteMaterialProcessing) (*types.MsgDeleteMaterialProcessingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetMaterialProcessing(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveMaterialProcessing(ctx, msg.Id)

	return &types.MsgDeleteMaterialProcessingResponse{}, nil
}
