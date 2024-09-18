package esgobservabilitydemo

import (
	"esg-observability-demo/x/esgobservabilitydemo/keeper"
	"esg-observability-demo/x/esgobservabilitydemo/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the rawMaterialExtraction
	for _, elem := range genState.RawMaterialExtractionList {
		k.SetRawMaterialExtraction(ctx, elem)
	}

	// Set rawMaterialExtraction count
	k.SetRawMaterialExtractionCount(ctx, genState.RawMaterialExtractionCount)
	// Set all the manufacturing
	for _, elem := range genState.ManufacturingList {
		k.SetManufacturing(ctx, elem)
	}

	// Set manufacturing count
	k.SetManufacturingCount(ctx, genState.ManufacturingCount)
	// Set all the transportation
	for _, elem := range genState.TransportationList {
		k.SetTransportation(ctx, elem)
	}

	// Set transportation count
	k.SetTransportationCount(ctx, genState.TransportationCount)
	// Set all the materialProcessing
	for _, elem := range genState.MaterialProcessingList {
		k.SetMaterialProcessing(ctx, elem)
	}

	// Set materialProcessing count
	k.SetMaterialProcessingCount(ctx, genState.MaterialProcessingCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.RawMaterialExtractionList = k.GetAllRawMaterialExtraction(ctx)
	genesis.RawMaterialExtractionCount = k.GetRawMaterialExtractionCount(ctx)
	genesis.ManufacturingList = k.GetAllManufacturing(ctx)
	genesis.ManufacturingCount = k.GetManufacturingCount(ctx)
	genesis.TransportationList = k.GetAllTransportation(ctx)
	genesis.TransportationCount = k.GetTransportationCount(ctx)
	genesis.MaterialProcessingList = k.GetAllMaterialProcessing(ctx)
	genesis.MaterialProcessingCount = k.GetMaterialProcessingCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
