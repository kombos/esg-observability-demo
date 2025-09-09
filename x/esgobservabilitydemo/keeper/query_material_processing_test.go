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

func createNMaterialProcessing(keeper keeper.Keeper, ctx context.Context, n int) []types.MaterialProcessing {
	items := make([]types.MaterialProcessing, n)
	for i := range items {
		iu := uint64(i)
		items[i].Id = iu
		items[i].MaterialType = strconv.Itoa(i)
		items[i].WaterUse = strconv.Itoa(i)
		items[i].Emissions = strconv.Itoa(i)
		_ = keeper.MaterialProcessing.Set(ctx, iu, items[i])
		_ = keeper.MaterialProcessingSeq.Set(ctx, iu)
	}
	return items
}

func TestMaterialProcessingQuerySingle(t *testing.T) {
	f := initFixture(t)
	qs := keeper.NewQueryServerImpl(f.keeper)
	msgs := createNMaterialProcessing(f.keeper, f.ctx, 2)
	tests := []struct {
		desc     string
		request  *types.QueryGetMaterialProcessingRequest
		response *types.QueryGetMaterialProcessingResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetMaterialProcessingRequest{Id: msgs[0].Id},
			response: &types.QueryGetMaterialProcessingResponse{MaterialProcessing: msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryGetMaterialProcessingRequest{Id: msgs[1].Id},
			response: &types.QueryGetMaterialProcessingResponse{MaterialProcessing: msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryGetMaterialProcessingRequest{Id: uint64(len(msgs))},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := qs.GetMaterialProcessing(f.ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.EqualExportedValues(t, tc.response, response)
			}
		})
	}
}

func TestMaterialProcessingQueryPaginated(t *testing.T) {
	f := initFixture(t)
	qs := keeper.NewQueryServerImpl(f.keeper)
	msgs := createNMaterialProcessing(f.keeper, f.ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllMaterialProcessingRequest {
		return &types.QueryAllMaterialProcessingRequest{
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
			resp, err := qs.ListMaterialProcessing(f.ctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.MaterialProcessing), step)
			require.Subset(t, msgs, resp.MaterialProcessing)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := qs.ListMaterialProcessing(f.ctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.MaterialProcessing), step)
			require.Subset(t, msgs, resp.MaterialProcessing)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := qs.ListMaterialProcessing(f.ctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.EqualExportedValues(t, msgs, resp.MaterialProcessing)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := qs.ListMaterialProcessing(f.ctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
