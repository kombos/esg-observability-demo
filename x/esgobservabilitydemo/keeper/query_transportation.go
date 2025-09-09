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

func (q queryServer) ListTransportation(ctx context.Context, req *types.QueryAllTransportationRequest) (*types.QueryAllTransportationResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	transportations, pageRes, err := query.CollectionPaginate(
		ctx,
		q.k.Transportation,
		req.Pagination,
		func(_ uint64, value types.Transportation) (types.Transportation, error) {
			return value, nil
		},
	)

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTransportationResponse{Transportation: transportations, Pagination: pageRes}, nil
}

func (q queryServer) GetTransportation(ctx context.Context, req *types.QueryGetTransportationRequest) (*types.QueryGetTransportationResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	transportation, err := q.k.Transportation.Get(ctx, req.Id)
	if err != nil {
		if errors.Is(err, collections.ErrNotFound) {
			return nil, sdkerrors.ErrKeyNotFound
		}

		return nil, status.Error(codes.Internal, "internal error")
	}

	return &types.QueryGetTransportationResponse{Transportation: transportation}, nil
}
