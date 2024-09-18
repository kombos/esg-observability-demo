package keeper

import (
	"encoding/binary"

	"esg-observability-demo/x/esgobservabilitydemo/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetRawMaterialExtractionCount get the total number of rawMaterialExtraction
func (k Keeper) GetRawMaterialExtractionCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.RawMaterialExtractionCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetRawMaterialExtractionCount set the total number of rawMaterialExtraction
func (k Keeper) SetRawMaterialExtractionCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.RawMaterialExtractionCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendRawMaterialExtraction appends a rawMaterialExtraction in the store with a new id and update the count
func (k Keeper) AppendRawMaterialExtraction(
	ctx sdk.Context,
	rawMaterialExtraction types.RawMaterialExtraction,
) uint64 {
	// Create the rawMaterialExtraction
	count := k.GetRawMaterialExtractionCount(ctx)

	// Set the ID of the appended value
	rawMaterialExtraction.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RawMaterialExtractionKey))
	appendedValue := k.cdc.MustMarshal(&rawMaterialExtraction)
	store.Set(GetRawMaterialExtractionIDBytes(rawMaterialExtraction.Id), appendedValue)

	// Update rawMaterialExtraction count
	k.SetRawMaterialExtractionCount(ctx, count+1)

	return count
}

// SetRawMaterialExtraction set a specific rawMaterialExtraction in the store
func (k Keeper) SetRawMaterialExtraction(ctx sdk.Context, rawMaterialExtraction types.RawMaterialExtraction) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RawMaterialExtractionKey))
	b := k.cdc.MustMarshal(&rawMaterialExtraction)
	store.Set(GetRawMaterialExtractionIDBytes(rawMaterialExtraction.Id), b)
}

// GetRawMaterialExtraction returns a rawMaterialExtraction from its id
func (k Keeper) GetRawMaterialExtraction(ctx sdk.Context, id uint64) (val types.RawMaterialExtraction, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RawMaterialExtractionKey))
	b := store.Get(GetRawMaterialExtractionIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveRawMaterialExtraction removes a rawMaterialExtraction from the store
func (k Keeper) RemoveRawMaterialExtraction(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RawMaterialExtractionKey))
	store.Delete(GetRawMaterialExtractionIDBytes(id))
}

// GetAllRawMaterialExtraction returns all rawMaterialExtraction
func (k Keeper) GetAllRawMaterialExtraction(ctx sdk.Context) (list []types.RawMaterialExtraction) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RawMaterialExtractionKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.RawMaterialExtraction
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetRawMaterialExtractionIDBytes returns the byte representation of the ID
func GetRawMaterialExtractionIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetRawMaterialExtractionIDFromBytes returns ID in uint64 format from a byte array
func GetRawMaterialExtractionIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
