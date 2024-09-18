package keeper_test

import (
	"testing"

	keepertest "esg-observability-demo/testutil/keeper"
	"esg-observability-demo/testutil/nullify"
	"esg-observability-demo/x/esgobservabilitydemo/keeper"
	"esg-observability-demo/x/esgobservabilitydemo/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNTransportation(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Transportation {
	items := make([]types.Transportation, n)
	for i := range items {
		items[i].Id = keeper.AppendTransportation(ctx, items[i])
	}
	return items
}

func TestTransportationGet(t *testing.T) {
	keeper, ctx := keepertest.EsgobservabilitydemoKeeper(t)
	items := createNTransportation(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetTransportation(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestTransportationRemove(t *testing.T) {
	keeper, ctx := keepertest.EsgobservabilitydemoKeeper(t)
	items := createNTransportation(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTransportation(ctx, item.Id)
		_, found := keeper.GetTransportation(ctx, item.Id)
		require.False(t, found)
	}
}

func TestTransportationGetAll(t *testing.T) {
	keeper, ctx := keepertest.EsgobservabilitydemoKeeper(t)
	items := createNTransportation(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllTransportation(ctx)),
	)
}

func TestTransportationCount(t *testing.T) {
	keeper, ctx := keepertest.EsgobservabilitydemoKeeper(t)
	items := createNTransportation(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetTransportationCount(ctx))
}
