package types_test

import (
	"testing"

	"esgobservabilitydemo/x/esgobservabilitydemo/types"

	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	tests := []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc:     "valid genesis state",
			genState: &types.GenesisState{RawMaterialExtractionList: []types.RawMaterialExtraction{{Id: 0}, {Id: 1}}, RawMaterialExtractionCount: 2, ManufacturingList: []types.Manufacturing{{Id: 0}, {Id: 1}}, ManufacturingCount: 2, TransportationList: []types.Transportation{{Id: 0}, {Id: 1}}, TransportationCount: 2, MaterialProcessingList: []types.MaterialProcessing{{Id: 0}, {Id: 1}}, MaterialProcessingCount: 2}, valid: true,
		}, {
			desc: "duplicated rawMaterialExtraction",
			genState: &types.GenesisState{
				RawMaterialExtractionList: []types.RawMaterialExtraction{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
				ManufacturingList: []types.Manufacturing{{Id: 0}, {Id: 1}}, ManufacturingCount: 2,
				TransportationList: []types.Transportation{{Id: 0}, {Id: 1}}, TransportationCount: 2, MaterialProcessingList: []types.MaterialProcessing{{Id: 0}, {Id: 1}}, MaterialProcessingCount: 2}, valid: false,
		}, {
			desc: "invalid rawMaterialExtraction count",
			genState: &types.GenesisState{
				RawMaterialExtractionList: []types.RawMaterialExtraction{
					{
						Id: 1,
					},
				},
				RawMaterialExtractionCount: 0,
				ManufacturingList:          []types.Manufacturing{{Id: 0}, {Id: 1}}, ManufacturingCount: 2,
				TransportationList: []types.Transportation{{Id: 0}, {Id: 1}}, TransportationCount: 2, MaterialProcessingList: []types.MaterialProcessing{{Id: 0}, {Id: 1}}, MaterialProcessingCount: 2}, valid: false,
		}, {
			desc: "duplicated manufacturing",
			genState: &types.GenesisState{
				ManufacturingList: []types.Manufacturing{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
				TransportationList: []types.Transportation{{Id: 0}, {Id: 1}}, TransportationCount: 2,
				MaterialProcessingList: []types.MaterialProcessing{{Id: 0}, {Id: 1}}, MaterialProcessingCount: 2}, valid: false,
		}, {
			desc: "invalid manufacturing count",
			genState: &types.GenesisState{
				ManufacturingList: []types.Manufacturing{
					{
						Id: 1,
					},
				},
				ManufacturingCount: 0,
				TransportationList: []types.Transportation{{Id: 0}, {Id: 1}}, TransportationCount: 2,
				MaterialProcessingList: []types.MaterialProcessing{{Id: 0}, {Id: 1}}, MaterialProcessingCount: 2}, valid: false,
		}, {
			desc: "duplicated transportation",
			genState: &types.GenesisState{
				TransportationList: []types.Transportation{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
				MaterialProcessingList: []types.MaterialProcessing{{Id: 0}, {Id: 1}}, MaterialProcessingCount: 2,
			}, valid: false,
		}, {
			desc: "invalid transportation count",
			genState: &types.GenesisState{
				TransportationList: []types.Transportation{
					{
						Id: 1,
					},
				},
				TransportationCount:    0,
				MaterialProcessingList: []types.MaterialProcessing{{Id: 0}, {Id: 1}}, MaterialProcessingCount: 2,
			}, valid: false,
		}, {
			desc: "duplicated materialProcessing",
			genState: &types.GenesisState{
				MaterialProcessingList: []types.MaterialProcessing{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		}, {
			desc: "invalid materialProcessing count",
			genState: &types.GenesisState{
				MaterialProcessingList: []types.MaterialProcessing{
					{
						Id: 1,
					},
				},
				MaterialProcessingCount: 0,
			},
			valid: false,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
