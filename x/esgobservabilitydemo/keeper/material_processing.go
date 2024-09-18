package keeper

import (
	"encoding/binary"

	"esg-observability-demo/x/esgobservabilitydemo/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetMaterialProcessingCount get the total number of materialProcessing
func (k Keeper) GetMaterialProcessingCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.MaterialProcessingCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetMaterialProcessingCount set the total number of materialProcessing
func (k Keeper) SetMaterialProcessingCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.MaterialProcessingCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendMaterialProcessing appends a materialProcessing in the store with a new id and update the count
func (k Keeper) AppendMaterialProcessing(
	ctx sdk.Context,
	materialProcessing types.MaterialProcessing,
) uint64 {
	// Create the materialProcessing
	count := k.GetMaterialProcessingCount(ctx)

	// Set the ID of the appended value
	materialProcessing.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MaterialProcessingKey))
	appendedValue := k.cdc.MustMarshal(&materialProcessing)
	store.Set(GetMaterialProcessingIDBytes(materialProcessing.Id), appendedValue)

	// Update materialProcessing count
	k.SetMaterialProcessingCount(ctx, count+1)

	return count
}

// SetMaterialProcessing set a specific materialProcessing in the store
func (k Keeper) SetMaterialProcessing(ctx sdk.Context, materialProcessing types.MaterialProcessing) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MaterialProcessingKey))
	b := k.cdc.MustMarshal(&materialProcessing)
	store.Set(GetMaterialProcessingIDBytes(materialProcessing.Id), b)
}

// GetMaterialProcessing returns a materialProcessing from its id
func (k Keeper) GetMaterialProcessing(ctx sdk.Context, id uint64) (val types.MaterialProcessing, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MaterialProcessingKey))
	b := store.Get(GetMaterialProcessingIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMaterialProcessing removes a materialProcessing from the store
func (k Keeper) RemoveMaterialProcessing(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MaterialProcessingKey))
	store.Delete(GetMaterialProcessingIDBytes(id))
}

// GetAllMaterialProcessing returns all materialProcessing
func (k Keeper) GetAllMaterialProcessing(ctx sdk.Context) (list []types.MaterialProcessing) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MaterialProcessingKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.MaterialProcessing
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetMaterialProcessingIDBytes returns the byte representation of the ID
func GetMaterialProcessingIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetMaterialProcessingIDFromBytes returns ID in uint64 format from a byte array
func GetMaterialProcessingIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
