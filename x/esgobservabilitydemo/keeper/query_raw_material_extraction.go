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

func (k Keeper) RawMaterialExtractionAll(goCtx context.Context, req *types.QueryAllRawMaterialExtractionRequest) (*types.QueryAllRawMaterialExtractionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var rawMaterialExtractions []types.RawMaterialExtraction
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	rawMaterialExtractionStore := prefix.NewStore(store, types.KeyPrefix(types.RawMaterialExtractionKey))

	pageRes, err := query.Paginate(rawMaterialExtractionStore, req.Pagination, func(key []byte, value []byte) error {
		var rawMaterialExtraction types.RawMaterialExtraction
		if err := k.cdc.Unmarshal(value, &rawMaterialExtraction); err != nil {
			return err
		}

		rawMaterialExtractions = append(rawMaterialExtractions, rawMaterialExtraction)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllRawMaterialExtractionResponse{RawMaterialExtraction: rawMaterialExtractions, Pagination: pageRes}, nil
}

func (k Keeper) RawMaterialExtraction(goCtx context.Context, req *types.QueryGetRawMaterialExtractionRequest) (*types.QueryGetRawMaterialExtractionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	rawMaterialExtraction, found := k.GetRawMaterialExtraction(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetRawMaterialExtractionResponse{RawMaterialExtraction: rawMaterialExtraction}, nil
}
