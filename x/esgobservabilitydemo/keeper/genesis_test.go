package keeper_test

import (
	"testing"

	"esgobservabilitydemo/x/esgobservabilitydemo/types"

	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params:                     types.DefaultParams(),
		RawMaterialExtractionList:  []types.RawMaterialExtraction{{Id: 0}, {Id: 1}},
		RawMaterialExtractionCount: 2,
		ManufacturingList:          []types.Manufacturing{{Id: 0}, {Id: 1}},
		ManufacturingCount:         2,
		TransportationList:         []types.Transportation{{Id: 0}, {Id: 1}},
		TransportationCount:        2,
		MaterialProcessingList:     []types.MaterialProcessing{{Id: 0}, {Id: 1}},
		MaterialProcessingCount:    2,
	}
	f := initFixture(t)
	err := f.keeper.InitGenesis(f.ctx, genesisState)
	require.NoError(t, err)
	got, err := f.keeper.ExportGenesis(f.ctx)
	require.NoError(t, err)
	require.NotNil(t, got)

	require.EqualExportedValues(t, genesisState.Params, got.Params)
	require.EqualExportedValues(t, genesisState.RawMaterialExtractionList, got.RawMaterialExtractionList)
	require.Equal(t, genesisState.RawMaterialExtractionCount, got.RawMaterialExtractionCount)
	require.EqualExportedValues(t, genesisState.ManufacturingList, got.ManufacturingList)
	require.Equal(t, genesisState.ManufacturingCount, got.ManufacturingCount)
	require.EqualExportedValues(t, genesisState.TransportationList, got.TransportationList)
	require.Equal(t, genesisState.TransportationCount, got.TransportationCount)
	require.EqualExportedValues(t, genesisState.MaterialProcessingList, got.MaterialProcessingList)
	require.Equal(t, genesisState.MaterialProcessingCount, got.MaterialProcessingCount)

}
