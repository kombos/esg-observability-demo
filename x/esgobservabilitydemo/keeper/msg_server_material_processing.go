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

func (k msgServer) CreateMaterialProcessing(ctx context.Context, msg *types.MsgCreateMaterialProcessing) (*types.MsgCreateMaterialProcessingResponse, error) {
	if _, err := k.addressCodec.StringToBytes(msg.Creator); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrInvalidAddress, fmt.Sprintf("invalid address: %s", err))
	}

	nextId, err := k.MaterialProcessingSeq.Next(ctx)
	if err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrInvalidRequest, "failed to get next id")
	}

	var materialProcessing = types.MaterialProcessing{
		Id:           nextId,
		Creator:      msg.Creator,
		MaterialType: msg.MaterialType,
		WaterUse:     msg.WaterUse,
		Emissions:    msg.Emissions,
	}

	if err = k.MaterialProcessing.Set(
		ctx,
		nextId,
		materialProcessing,
	); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "failed to set materialProcessing")
	}

	return &types.MsgCreateMaterialProcessingResponse{
		Id: nextId,
	}, nil
}

func (k msgServer) UpdateMaterialProcessing(ctx context.Context, msg *types.MsgUpdateMaterialProcessing) (*types.MsgUpdateMaterialProcessingResponse, error) {
	if _, err := k.addressCodec.StringToBytes(msg.Creator); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrInvalidAddress, fmt.Sprintf("invalid address: %s", err))
	}

	var materialProcessing = types.MaterialProcessing{
		Creator:      msg.Creator,
		Id:           msg.Id,
		MaterialType: msg.MaterialType,
		WaterUse:     msg.WaterUse,
		Emissions:    msg.Emissions,
	}

	// Checks that the element exists
	val, err := k.MaterialProcessing.Get(ctx, msg.Id)
	if err != nil {
		if errors.Is(err, collections.ErrNotFound) {
			return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
		}

		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "failed to get materialProcessing")
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	if err := k.MaterialProcessing.Set(ctx, msg.Id, materialProcessing); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "failed to update materialProcessing")
	}

	return &types.MsgUpdateMaterialProcessingResponse{}, nil
}

func (k msgServer) DeleteMaterialProcessing(ctx context.Context, msg *types.MsgDeleteMaterialProcessing) (*types.MsgDeleteMaterialProcessingResponse, error) {
	if _, err := k.addressCodec.StringToBytes(msg.Creator); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrInvalidAddress, fmt.Sprintf("invalid address: %s", err))
	}

	// Checks that the element exists
	val, err := k.MaterialProcessing.Get(ctx, msg.Id)
	if err != nil {
		if errors.Is(err, collections.ErrNotFound) {
			return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
		}

		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "failed to get materialProcessing")
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	if err := k.MaterialProcessing.Remove(ctx, msg.Id); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "failed to delete materialProcessing")
	}

	return &types.MsgDeleteMaterialProcessingResponse{}, nil
}
