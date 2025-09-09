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

func (q queryServer) ListMaterialProcessing(ctx context.Context, req *types.QueryAllMaterialProcessingRequest) (*types.QueryAllMaterialProcessingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	materialProcessings, pageRes, err := query.CollectionPaginate(
		ctx,
		q.k.MaterialProcessing,
		req.Pagination,
		func(_ uint64, value types.MaterialProcessing) (types.MaterialProcessing, error) {
			return value, nil
		},
	)

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMaterialProcessingResponse{MaterialProcessing: materialProcessings, Pagination: pageRes}, nil
}

func (q queryServer) GetMaterialProcessing(ctx context.Context, req *types.QueryGetMaterialProcessingRequest) (*types.QueryGetMaterialProcessingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	materialProcessing, err := q.k.MaterialProcessing.Get(ctx, req.Id)
	if err != nil {
		if errors.Is(err, collections.ErrNotFound) {
			return nil, sdkerrors.ErrKeyNotFound
		}

		return nil, status.Error(codes.Internal, "internal error")
	}

	return &types.QueryGetMaterialProcessingResponse{MaterialProcessing: materialProcessing}, nil
}
