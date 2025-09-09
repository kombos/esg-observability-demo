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

func (q queryServer) ListManufacturing(ctx context.Context, req *types.QueryAllManufacturingRequest) (*types.QueryAllManufacturingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	manufacturings, pageRes, err := query.CollectionPaginate(
		ctx,
		q.k.Manufacturing,
		req.Pagination,
		func(_ uint64, value types.Manufacturing) (types.Manufacturing, error) {
			return value, nil
		},
	)

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllManufacturingResponse{Manufacturing: manufacturings, Pagination: pageRes}, nil
}

func (q queryServer) GetManufacturing(ctx context.Context, req *types.QueryGetManufacturingRequest) (*types.QueryGetManufacturingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	manufacturing, err := q.k.Manufacturing.Get(ctx, req.Id)
	if err != nil {
		if errors.Is(err, collections.ErrNotFound) {
			return nil, sdkerrors.ErrKeyNotFound
		}

		return nil, status.Error(codes.Internal, "internal error")
	}

	return &types.QueryGetManufacturingResponse{Manufacturing: manufacturing}, nil
}
