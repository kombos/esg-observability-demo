package keeper_test

import (
	"context"
	"strconv"
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"esgobservabilitydemo/x/esgobservabilitydemo/keeper"
	"esgobservabilitydemo/x/esgobservabilitydemo/types"
)

func createNTransportation(keeper keeper.Keeper, ctx context.Context, n int) []types.Transportation {
	items := make([]types.Transportation, n)
	for i := range items {
		iu := uint64(i)
		items[i].Id = iu
		items[i].TransportationType = strconv.Itoa(i)
		items[i].FuelUse = strconv.Itoa(i)
		items[i].Emissions = strconv.Itoa(i)
		_ = keeper.Transportation.Set(ctx, iu, items[i])
		_ = keeper.TransportationSeq.Set(ctx, iu)
	}
	return items
}

func TestTransportationQuerySingle(t *testing.T) {
	f := initFixture(t)
	qs := keeper.NewQueryServerImpl(f.keeper)
	msgs := createNTransportation(f.keeper, f.ctx, 2)
	tests := []struct {
		desc     string
		request  *types.QueryGetTransportationRequest
		response *types.QueryGetTransportationResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetTransportationRequest{Id: msgs[0].Id},
			response: &types.QueryGetTransportationResponse{Transportation: msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryGetTransportationRequest{Id: msgs[1].Id},
			response: &types.QueryGetTransportationResponse{Transportation: msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryGetTransportationRequest{Id: uint64(len(msgs))},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := qs.GetTransportation(f.ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.EqualExportedValues(t, tc.response, response)
			}
		})
	}
}

func TestTransportationQueryPaginated(t *testing.T) {
	f := initFixture(t)
	qs := keeper.NewQueryServerImpl(f.keeper)
	msgs := createNTransportation(f.keeper, f.ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllTransportationRequest {
		return &types.QueryAllTransportationRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := qs.ListTransportation(f.ctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Transportation), step)
			require.Subset(t, msgs, resp.Transportation)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := qs.ListTransportation(f.ctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Transportation), step)
			require.Subset(t, msgs, resp.Transportation)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := qs.ListTransportation(f.ctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.EqualExportedValues(t, msgs, resp.Transportation)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := qs.ListTransportation(f.ctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
