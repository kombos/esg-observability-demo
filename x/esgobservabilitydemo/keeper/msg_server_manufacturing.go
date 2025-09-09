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

func (k msgServer) CreateManufacturing(ctx context.Context, msg *types.MsgCreateManufacturing) (*types.MsgCreateManufacturingResponse, error) {
	if _, err := k.addressCodec.StringToBytes(msg.Creator); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrInvalidAddress, fmt.Sprintf("invalid address: %s", err))
	}

	nextId, err := k.ManufacturingSeq.Next(ctx)
	if err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrInvalidRequest, "failed to get next id")
	}

	var manufacturing = types.Manufacturing{
		Id:            nextId,
		Creator:       msg.Creator,
		ComponentType: msg.ComponentType,
		WaterUse:      msg.WaterUse,
		Emissions:     msg.Emissions,
	}

	if err = k.Manufacturing.Set(
		ctx,
		nextId,
		manufacturing,
	); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "failed to set manufacturing")
	}

	return &types.MsgCreateManufacturingResponse{
		Id: nextId,
	}, nil
}

func (k msgServer) UpdateManufacturing(ctx context.Context, msg *types.MsgUpdateManufacturing) (*types.MsgUpdateManufacturingResponse, error) {
	if _, err := k.addressCodec.StringToBytes(msg.Creator); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrInvalidAddress, fmt.Sprintf("invalid address: %s", err))
	}

	var manufacturing = types.Manufacturing{
		Creator:       msg.Creator,
		Id:            msg.Id,
		ComponentType: msg.ComponentType,
		WaterUse:      msg.WaterUse,
		Emissions:     msg.Emissions,
	}

	// Checks that the element exists
	val, err := k.Manufacturing.Get(ctx, msg.Id)
	if err != nil {
		if errors.Is(err, collections.ErrNotFound) {
			return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
		}

		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "failed to get manufacturing")
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	if err := k.Manufacturing.Set(ctx, msg.Id, manufacturing); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "failed to update manufacturing")
	}

	return &types.MsgUpdateManufacturingResponse{}, nil
}

func (k msgServer) DeleteManufacturing(ctx context.Context, msg *types.MsgDeleteManufacturing) (*types.MsgDeleteManufacturingResponse, error) {
	if _, err := k.addressCodec.StringToBytes(msg.Creator); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrInvalidAddress, fmt.Sprintf("invalid address: %s", err))
	}

	// Checks that the element exists
	val, err := k.Manufacturing.Get(ctx, msg.Id)
	if err != nil {
		if errors.Is(err, collections.ErrNotFound) {
			return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
		}

		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "failed to get manufacturing")
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	if err := k.Manufacturing.Remove(ctx, msg.Id); err != nil {
		return nil, errorsmod.Wrap(sdkerrors.ErrLogic, "failed to delete manufacturing")
	}

	return &types.MsgDeleteManufacturingResponse{}, nil
}
