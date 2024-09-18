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

func createNMaterialProcessing(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.MaterialProcessing {
	items := make([]types.MaterialProcessing, n)
	for i := range items {
		items[i].Id = keeper.AppendMaterialProcessing(ctx, items[i])
	}
	return items
}

func TestMaterialProcessingGet(t *testing.T) {
	keeper, ctx := keepertest.EsgobservabilitydemoKeeper(t)
	items := createNMaterialProcessing(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetMaterialProcessing(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestMaterialProcessingRemove(t *testing.T) {
	keeper, ctx := keepertest.EsgobservabilitydemoKeeper(t)
	items := createNMaterialProcessing(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMaterialProcessing(ctx, item.Id)
		_, found := keeper.GetMaterialProcessing(ctx, item.Id)
		require.False(t, found)
	}
}

func TestMaterialProcessingGetAll(t *testing.T) {
	keeper, ctx := keepertest.EsgobservabilitydemoKeeper(t)
	items := createNMaterialProcessing(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllMaterialProcessing(ctx)),
	)
}

func TestMaterialProcessingCount(t *testing.T) {
	keeper, ctx := keepertest.EsgobservabilitydemoKeeper(t)
	items := createNMaterialProcessing(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetMaterialProcessingCount(ctx))
}
