package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		RawMaterialExtractionList: []RawMaterialExtraction{},
		ManufacturingList:         []Manufacturing{},
		TransportationList:        []Transportation{},
		MaterialProcessingList:    []MaterialProcessing{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in rawMaterialExtraction
	rawMaterialExtractionIdMap := make(map[uint64]bool)
	rawMaterialExtractionCount := gs.GetRawMaterialExtractionCount()
	for _, elem := range gs.RawMaterialExtractionList {
		if _, ok := rawMaterialExtractionIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for rawMaterialExtraction")
		}
		if elem.Id >= rawMaterialExtractionCount {
			return fmt.Errorf("rawMaterialExtraction id should be lower or equal than the last id")
		}
		rawMaterialExtractionIdMap[elem.Id] = true
	}
	// Check for duplicated ID in manufacturing
	manufacturingIdMap := make(map[uint64]bool)
	manufacturingCount := gs.GetManufacturingCount()
	for _, elem := range gs.ManufacturingList {
		if _, ok := manufacturingIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for manufacturing")
		}
		if elem.Id >= manufacturingCount {
			return fmt.Errorf("manufacturing id should be lower or equal than the last id")
		}
		manufacturingIdMap[elem.Id] = true
	}
	// Check for duplicated ID in transportation
	transportationIdMap := make(map[uint64]bool)
	transportationCount := gs.GetTransportationCount()
	for _, elem := range gs.TransportationList {
		if _, ok := transportationIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for transportation")
		}
		if elem.Id >= transportationCount {
			return fmt.Errorf("transportation id should be lower or equal than the last id")
		}
		transportationIdMap[elem.Id] = true
	}
	// Check for duplicated ID in materialProcessing
	materialProcessingIdMap := make(map[uint64]bool)
	materialProcessingCount := gs.GetMaterialProcessingCount()
	for _, elem := range gs.MaterialProcessingList {
		if _, ok := materialProcessingIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for materialProcessing")
		}
		if elem.Id >= materialProcessingCount {
			return fmt.Errorf("materialProcessing id should be lower or equal than the last id")
		}
		materialProcessingIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
