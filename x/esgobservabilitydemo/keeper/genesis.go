package keeper

import (
	"context"

	"esgobservabilitydemo/x/esgobservabilitydemo/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func (k Keeper) InitGenesis(ctx context.Context, genState types.GenesisState) error {
	for _, elem := range genState.RawMaterialExtractionList {
		if err := k.RawMaterialExtraction.Set(ctx, elem.Id, elem); err != nil {
			return err
		}
	}

	if err := k.RawMaterialExtractionSeq.Set(ctx, genState.RawMaterialExtractionCount);

	// ExportGenesis returns the module's exported genesis.
	err != nil {
		return err
	}
	for _, elem := range genState.ManufacturingList {
		if err := k.Manufacturing.Set(ctx, elem.Id, elem); err != nil {
			return err
		}
	}

	if err := k.ManufacturingSeq.Set(ctx, genState.ManufacturingCount); err != nil {
		return err
	}
	for _, elem := range genState.TransportationList {
		if err := k.Transportation.Set(ctx, elem.Id, elem); err != nil {
			return err
		}
	}

	if err := k.TransportationSeq.Set(ctx, genState.TransportationCount); err != nil {
		return err
	}
	for _, elem := range genState.MaterialProcessingList {
		if err := k.MaterialProcessing.Set(ctx, elem.Id, elem); err != nil {
			return err
		}
	}

	if err := k.MaterialProcessingSeq.Set(ctx, genState.MaterialProcessingCount); err != nil {
		return err
	}

	return k.Params.Set(ctx, genState.Params)
}

func (k Keeper) ExportGenesis(ctx context.Context) (*types.GenesisState, error) {
	var err error

	genesis := types.DefaultGenesis()
	genesis.Params, err = k.Params.Get(ctx)
	if err != nil {
		return nil, err
	}
	err = k.RawMaterialExtraction.Walk(ctx, nil, func(key uint64, elem types.RawMaterialExtraction) (bool, error) {
		genesis.RawMaterialExtractionList = append(genesis.RawMaterialExtractionList, elem)
		return false, nil
	})
	if err != nil {
		return nil, err
	}

	genesis.RawMaterialExtractionCount, err = k.RawMaterialExtractionSeq.Peek(ctx)
	if err != nil {
		return nil, err
	}
	err = k.Manufacturing.Walk(ctx, nil, func(key uint64, elem types.Manufacturing) (bool, error) {
		genesis.ManufacturingList = append(genesis.ManufacturingList, elem)
		return false, nil
	})
	if err != nil {
		return nil, err
	}

	genesis.ManufacturingCount, err = k.ManufacturingSeq.Peek(ctx)
	if err != nil {
		return nil, err
	}
	err = k.Transportation.Walk(ctx, nil, func(key uint64, elem types.Transportation) (bool, error) {
		genesis.TransportationList = append(genesis.TransportationList, elem)
		return false, nil
	})
	if err != nil {
		return nil, err
	}

	genesis.TransportationCount, err = k.TransportationSeq.Peek(ctx)
	if err != nil {
		return nil, err
	}
	err = k.MaterialProcessing.Walk(ctx, nil, func(key uint64, elem types.MaterialProcessing) (bool, error) {
		genesis.MaterialProcessingList = append(genesis.MaterialProcessingList, elem)
		return false, nil
	})
	if err != nil {
		return nil, err
	}

	genesis.MaterialProcessingCount, err = k.MaterialProcessingSeq.Peek(ctx)
	if err != nil {
		return nil, err
	}

	return genesis, nil
}
