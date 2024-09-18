package esgobservabilitydemo_test

import (
	"testing"

	keepertest "esg-observability-demo/testutil/keeper"
	"esg-observability-demo/testutil/nullify"
	"esg-observability-demo/x/esgobservabilitydemo"
	"esg-observability-demo/x/esgobservabilitydemo/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		RawMaterialExtractionList: []types.RawMaterialExtraction{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		RawMaterialExtractionCount: 2,
		ManufacturingList: []types.Manufacturing{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		ManufacturingCount: 2,
		TransportationList: []types.Transportation{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		TransportationCount: 2,
		MaterialProcessingList: []types.MaterialProcessing{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		MaterialProcessingCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.EsgobservabilitydemoKeeper(t)
	esgobservabilitydemo.InitGenesis(ctx, *k, genesisState)
	got := esgobservabilitydemo.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.RawMaterialExtractionList, got.RawMaterialExtractionList)
	require.Equal(t, genesisState.RawMaterialExtractionCount, got.RawMaterialExtractionCount)
	require.ElementsMatch(t, genesisState.ManufacturingList, got.ManufacturingList)
	require.Equal(t, genesisState.ManufacturingCount, got.ManufacturingCount)
	require.ElementsMatch(t, genesisState.TransportationList, got.TransportationList)
	require.Equal(t, genesisState.TransportationCount, got.TransportationCount)
	require.ElementsMatch(t, genesisState.MaterialProcessingList, got.MaterialProcessingList)
	require.Equal(t, genesisState.MaterialProcessingCount, got.MaterialProcessingCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
