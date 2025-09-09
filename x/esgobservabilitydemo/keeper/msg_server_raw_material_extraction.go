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

func (k msgServer) CreateRawMaterialExtraction(ctx context.Context, msg *types.MsgCreateRawMaterialExtraction) (*types.MsgCreateRawMaterialExtractionResponse, error) {
	if _, err := k.addressCodec.StringToBytes(msg.Creator); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrInvalidAddress, fmt.Sprintf("invalid address: %s", err))
	}

	nextId, err := k.RawMaterialExtractionSeq.Next(ctx)
	if err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrInvalidRequest, "failed to get next id")
	}

	var rawMaterialExtraction = types.RawMaterialExtraction{
		Id:           nextId,
		Creator:      msg.Creator,
		ResourceType: msg.ResourceType,
		WaterUse:     msg.WaterUse,
		Emissions:    msg.Emissions,
	}

	if err = k.RawMaterialExtraction.Set(
		ctx,
		nextId,
		rawMaterialExtraction,
	); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "failed to set rawMaterialExtraction")
	}

	return &types.MsgCreateRawMaterialExtractionResponse{
		Id: nextId,
	}, nil
}

func (k msgServer) UpdateRawMaterialExtraction(ctx context.Context, msg *types.MsgUpdateRawMaterialExtraction) (*types.MsgUpdateRawMaterialExtractionResponse, error) {
	if _, err := k.addressCodec.StringToBytes(msg.Creator); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrInvalidAddress, fmt.Sprintf("invalid address: %s", err))
	}

	var rawMaterialExtraction = types.RawMaterialExtraction{
		Creator:      msg.Creator,
		Id:           msg.Id,
		ResourceType: msg.ResourceType,
		WaterUse:     msg.WaterUse,
		Emissions:    msg.Emissions,
	}

	// Checks that the element exists
	val, err := k.RawMaterialExtraction.Get(ctx, msg.Id)
	if err != nil {
		if errors.Is(err, collections.ErrNotFound) {
			return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
		}

		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "failed to get rawMaterialExtraction")
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	if err := k.RawMaterialExtraction.Set(ctx, msg.Id, rawMaterialExtraction); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "failed to update rawMaterialExtraction")
	}

	return &types.MsgUpdateRawMaterialExtractionResponse{}, nil
}

func (k msgServer) DeleteRawMaterialExtraction(ctx context.Context, msg *types.MsgDeleteRawMaterialExtraction) (*types.MsgDeleteRawMaterialExtractionResponse, error) {
	if _, err := k.addressCodec.StringToBytes(msg.Creator); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrInvalidAddress, fmt.Sprintf("invalid address: %s", err))
	}

	// Checks that the element exists
	val, err := k.RawMaterialExtraction.Get(ctx, msg.Id)
	if err != nil {
		if errors.Is(err, collections.ErrNotFound) {
			return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
		}

		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "failed to get rawMaterialExtraction")
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	if err := k.RawMaterialExtraction.Remove(ctx, msg.Id); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "failed to delete rawMaterialExtraction")
	}

	return &types.MsgDeleteRawMaterialExtractionResponse{}, nil
}
