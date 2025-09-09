package keeper

import (
	"fmt"

	"cosmossdk.io/collections"
	"cosmossdk.io/core/address"
	corestore "cosmossdk.io/core/store"
	"github.com/cosmos/cosmos-sdk/codec"

	"esgobservabilitydemo/x/esgobservabilitydemo/types"
)

type Keeper struct {
	storeService corestore.KVStoreService
	cdc          codec.Codec
	addressCodec address.Codec
	// Address capable of executing a MsgUpdateParams message.
	// Typically, this should be the x/gov module account.
	authority []byte

	Schema                   collections.Schema
	Params                   collections.Item[types.Params]
	RawMaterialExtractionSeq collections.Sequence
	RawMaterialExtraction    collections.Map[uint64, types.RawMaterialExtraction]
	ManufacturingSeq         collections.Sequence
	Manufacturing            collections.Map[uint64, types.Manufacturing]
	TransportationSeq        collections.Sequence
	Transportation           collections.Map[uint64, types.Transportation]
	MaterialProcessingSeq    collections.Sequence
	MaterialProcessing       collections.Map[uint64, types.MaterialProcessing]
}

func NewKeeper(
	storeService corestore.KVStoreService,
	cdc codec.Codec,
	addressCodec address.Codec,
	authority []byte,

) Keeper {
	if _, err := addressCodec.BytesToString(authority); err != nil {
		panic(fmt.Sprintf("invalid authority address %s: %s", authority, err))
	}

	sb := collections.NewSchemaBuilder(storeService)

	k := Keeper{
		storeService: storeService,
		cdc:          cdc,
		addressCodec: addressCodec,
		authority:    authority,

		Params:                   collections.NewItem(sb, types.ParamsKey, "params", codec.CollValue[types.Params](cdc)),
		RawMaterialExtraction:    collections.NewMap(sb, types.RawMaterialExtractionKey, "rawMaterialExtraction", collections.Uint64Key, codec.CollValue[types.RawMaterialExtraction](cdc)),
		RawMaterialExtractionSeq: collections.NewSequence(sb, types.RawMaterialExtractionCountKey, "rawMaterialExtractionSequence"),
		Manufacturing:            collections.NewMap(sb, types.ManufacturingKey, "manufacturing", collections.Uint64Key, codec.CollValue[types.Manufacturing](cdc)),
		ManufacturingSeq:         collections.NewSequence(sb, types.ManufacturingCountKey, "manufacturingSequence"),
		Transportation:           collections.NewMap(sb, types.TransportationKey, "transportation", collections.Uint64Key, codec.CollValue[types.Transportation](cdc)),
		TransportationSeq:        collections.NewSequence(sb, types.TransportationCountKey, "transportationSequence"),
		MaterialProcessing:       collections.NewMap(sb, types.MaterialProcessingKey, "materialProcessing", collections.Uint64Key, codec.CollValue[types.MaterialProcessing](cdc)),
		MaterialProcessingSeq:    collections.NewSequence(sb, types.MaterialProcessingCountKey, "materialProcessingSequence"),
	}
	schema, err := sb.Build()
	if err != nil {
		panic(err)
	}
	k.Schema = schema

	return k
}

// GetAuthority returns the module's authority.
func (k Keeper) GetAuthority() []byte {
	return k.authority
}
