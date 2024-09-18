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

func createNRawMaterialExtraction(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.RawMaterialExtraction {
	items := make([]types.RawMaterialExtraction, n)
	for i := range items {
		items[i].Id = keeper.AppendRawMaterialExtraction(ctx, items[i])
	}
	return items
}

func TestRawMaterialExtractionGet(t *testing.T) {
	keeper, ctx := keepertest.EsgobservabilitydemoKeeper(t)
	items := createNRawMaterialExtraction(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetRawMaterialExtraction(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestRawMaterialExtractionRemove(t *testing.T) {
	keeper, ctx := keepertest.EsgobservabilitydemoKeeper(t)
	items := createNRawMaterialExtraction(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveRawMaterialExtraction(ctx, item.Id)
		_, found := keeper.GetRawMaterialExtraction(ctx, item.Id)
		require.False(t, found)
	}
}

func TestRawMaterialExtractionGetAll(t *testing.T) {
	keeper, ctx := keepertest.EsgobservabilitydemoKeeper(t)
	items := createNRawMaterialExtraction(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllRawMaterialExtraction(ctx)),
	)
}

func TestRawMaterialExtractionCount(t *testing.T) {
	keeper, ctx := keepertest.EsgobservabilitydemoKeeper(t)
	items := createNRawMaterialExtraction(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetRawMaterialExtractionCount(ctx))
}
