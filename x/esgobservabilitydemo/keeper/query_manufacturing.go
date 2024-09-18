package keeper

import (
	"context"

	"esg-observability-demo/x/esgobservabilitydemo/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ManufacturingAll(goCtx context.Context, req *types.QueryAllManufacturingRequest) (*types.QueryAllManufacturingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var manufacturings []types.Manufacturing
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	manufacturingStore := prefix.NewStore(store, types.KeyPrefix(types.ManufacturingKey))

	pageRes, err := query.Paginate(manufacturingStore, req.Pagination, func(key []byte, value []byte) error {
		var manufacturing types.Manufacturing
		if err := k.cdc.Unmarshal(value, &manufacturing); err != nil {
			return err
		}

		manufacturings = append(manufacturings, manufacturing)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllManufacturingResponse{Manufacturing: manufacturings, Pagination: pageRes}, nil
}

func (k Keeper) Manufacturing(goCtx context.Context, req *types.QueryGetManufacturingRequest) (*types.QueryGetManufacturingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	manufacturing, found := k.GetManufacturing(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetManufacturingResponse{Manufacturing: manufacturing}, nil
}
