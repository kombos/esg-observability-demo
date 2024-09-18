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

func (k Keeper) MaterialProcessingAll(goCtx context.Context, req *types.QueryAllMaterialProcessingRequest) (*types.QueryAllMaterialProcessingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var materialProcessings []types.MaterialProcessing
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	materialProcessingStore := prefix.NewStore(store, types.KeyPrefix(types.MaterialProcessingKey))

	pageRes, err := query.Paginate(materialProcessingStore, req.Pagination, func(key []byte, value []byte) error {
		var materialProcessing types.MaterialProcessing
		if err := k.cdc.Unmarshal(value, &materialProcessing); err != nil {
			return err
		}

		materialProcessings = append(materialProcessings, materialProcessing)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMaterialProcessingResponse{MaterialProcessing: materialProcessings, Pagination: pageRes}, nil
}

func (k Keeper) MaterialProcessing(goCtx context.Context, req *types.QueryGetMaterialProcessingRequest) (*types.QueryGetMaterialProcessingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	materialProcessing, found := k.GetMaterialProcessing(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetMaterialProcessingResponse{MaterialProcessing: materialProcessing}, nil
}
