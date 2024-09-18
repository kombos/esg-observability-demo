package types

const (
	// ModuleName defines the module name
	ModuleName = "esgobservabilitydemo"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_esgobservabilitydemo"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	RawMaterialExtractionKey      = "RawMaterialExtraction/value/"
	RawMaterialExtractionCountKey = "RawMaterialExtraction/count/"
)

const (
	ManufacturingKey      = "Manufacturing/value/"
	ManufacturingCountKey = "Manufacturing/count/"
)

const (
	TransportationKey      = "Transportation/value/"
	TransportationCountKey = "Transportation/count/"
)

const (
	MaterialProcessingKey      = "MaterialProcessing/value/"
	MaterialProcessingCountKey = "MaterialProcessing/count/"
)
