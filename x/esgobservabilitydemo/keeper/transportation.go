package keeper

import (
	"encoding/binary"

	"esg-observability-demo/x/esgobservabilitydemo/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetTransportationCount get the total number of transportation
func (k Keeper) GetTransportationCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.TransportationCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetTransportationCount set the total number of transportation
func (k Keeper) SetTransportationCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.TransportationCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendTransportation appends a transportation in the store with a new id and update the count
func (k Keeper) AppendTransportation(
	ctx sdk.Context,
	transportation types.Transportation,
) uint64 {
	// Create the transportation
	count := k.GetTransportationCount(ctx)

	// Set the ID of the appended value
	transportation.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TransportationKey))
	appendedValue := k.cdc.MustMarshal(&transportation)
	store.Set(GetTransportationIDBytes(transportation.Id), appendedValue)

	// Update transportation count
	k.SetTransportationCount(ctx, count+1)

	return count
}

// SetTransportation set a specific transportation in the store
func (k Keeper) SetTransportation(ctx sdk.Context, transportation types.Transportation) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TransportationKey))
	b := k.cdc.MustMarshal(&transportation)
	store.Set(GetTransportationIDBytes(transportation.Id), b)
}

// GetTransportation returns a transportation from its id
func (k Keeper) GetTransportation(ctx sdk.Context, id uint64) (val types.Transportation, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TransportationKey))
	b := store.Get(GetTransportationIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveTransportation removes a transportation from the store
func (k Keeper) RemoveTransportation(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TransportationKey))
	store.Delete(GetTransportationIDBytes(id))
}

// GetAllTransportation returns all transportation
func (k Keeper) GetAllTransportation(ctx sdk.Context) (list []types.Transportation) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TransportationKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Transportation
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetTransportationIDBytes returns the byte representation of the ID
func GetTransportationIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetTransportationIDFromBytes returns ID in uint64 format from a byte array
func GetTransportationIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
