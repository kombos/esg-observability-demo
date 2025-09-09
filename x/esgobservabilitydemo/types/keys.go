package types

import "cosmossdk.io/collections"

const (
	// ModuleName defines the module name
	ModuleName = "esgobservabilitydemo"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// GovModuleName duplicates the gov module's name to avoid a dependency with x/gov.
	// It should be synced with the gov module's name if it is ever changed.
	// See: https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.2/x/gov/types/keys.go#L9
	GovModuleName = "gov"
)

// ParamsKey is the prefix to retrieve all Params
var ParamsKey = collections.NewPrefix("p_esgobservabilitydemo")

var (
	RawMaterialExtractionKey      = collections.NewPrefix("rawmaterialextraction/value/")
	RawMaterialExtractionCountKey = collections.NewPrefix("rawmaterialextraction/count/")
)

var (
	ManufacturingKey      = collections.NewPrefix("manufacturing/value/")
	ManufacturingCountKey = collections.NewPrefix("manufacturing/count/")
)

var (
	TransportationKey      = collections.NewPrefix("transportation/value/")
	TransportationCountKey = collections.NewPrefix("transportation/count/")
)

var (
	MaterialProcessingKey      = collections.NewPrefix("materialprocessing/value/")
	MaterialProcessingCountKey = collections.NewPrefix("materialprocessing/count/")
)
