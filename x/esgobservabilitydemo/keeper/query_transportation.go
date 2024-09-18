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

func (k Keeper) TransportationAll(goCtx context.Context, req *types.QueryAllTransportationRequest) (*types.QueryAllTransportationResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var transportations []types.Transportation
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	transportationStore := prefix.NewStore(store, types.KeyPrefix(types.TransportationKey))

	pageRes, err := query.Paginate(transportationStore, req.Pagination, func(key []byte, value []byte) error {
		var transportation types.Transportation
		if err := k.cdc.Unmarshal(value, &transportation); err != nil {
			return err
		}

		transportations = append(transportations, transportation)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTransportationResponse{Transportation: transportations, Pagination: pageRes}, nil
}

func (k Keeper) Transportation(goCtx context.Context, req *types.QueryGetTransportationRequest) (*types.QueryGetTransportationResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	transportation, found := k.GetTransportation(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetTransportationResponse{Transportation: transportation}, nil
}
