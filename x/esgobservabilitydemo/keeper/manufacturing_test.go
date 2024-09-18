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

func createNManufacturing(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Manufacturing {
	items := make([]types.Manufacturing, n)
	for i := range items {
		items[i].Id = keeper.AppendManufacturing(ctx, items[i])
	}
	return items
}

func TestManufacturingGet(t *testing.T) {
	keeper, ctx := keepertest.EsgobservabilitydemoKeeper(t)
	items := createNManufacturing(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetManufacturing(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestManufacturingRemove(t *testing.T) {
	keeper, ctx := keepertest.EsgobservabilitydemoKeeper(t)
	items := createNManufacturing(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveManufacturing(ctx, item.Id)
		_, found := keeper.GetManufacturing(ctx, item.Id)
		require.False(t, found)
	}
}

func TestManufacturingGetAll(t *testing.T) {
	keeper, ctx := keepertest.EsgobservabilitydemoKeeper(t)
	items := createNManufacturing(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllManufacturing(ctx)),
	)
}

func TestManufacturingCount(t *testing.T) {
	keeper, ctx := keepertest.EsgobservabilitydemoKeeper(t)
	items := createNManufacturing(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetManufacturingCount(ctx))
}
