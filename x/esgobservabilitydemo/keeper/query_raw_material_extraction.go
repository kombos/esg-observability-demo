package keeper

import (
	"context"
	"errors"

	"esgobservabilitydemo/x/esgobservabilitydemo/types"

	"cosmossdk.io/collections"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (q queryServer) ListRawMaterialExtraction(ctx context.Context, req *types.QueryAllRawMaterialExtractionRequest) (*types.QueryAllRawMaterialExtractionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	rawMaterialExtractions, pageRes, err := query.CollectionPaginate(
		ctx,
		q.k.RawMaterialExtraction,
		req.Pagination,
		func(_ uint64, value types.RawMaterialExtraction) (types.RawMaterialExtraction, error) {
			return value, nil
		},
	)

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllRawMaterialExtractionResponse{RawMaterialExtraction: rawMaterialExtractions, Pagination: pageRes}, nil
}

func (q queryServer) GetRawMaterialExtraction(ctx context.Context, req *types.QueryGetRawMaterialExtractionRequest) (*types.QueryGetRawMaterialExtractionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	rawMaterialExtraction, err := q.k.RawMaterialExtraction.Get(ctx, req.Id)
	if err != nil {
		if errors.Is(err, collections.ErrNotFound) {
			return nil, sdkerrors.ErrKeyNotFound
		}

		return nil, status.Error(codes.Internal, "internal error")
	}

	return &types.QueryGetRawMaterialExtractionResponse{RawMaterialExtraction: rawMaterialExtraction}, nil
}
