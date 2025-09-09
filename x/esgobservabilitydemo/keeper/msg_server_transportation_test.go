package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"esgobservabilitydemo/x/esgobservabilitydemo/keeper"
	"esgobservabilitydemo/x/esgobservabilitydemo/types"
)

func TestTransportationMsgServerCreate(t *testing.T) {
	f := initFixture(t)
	srv := keeper.NewMsgServerImpl(f.keeper)

	creator, err := f.addressCodec.BytesToString([]byte("signerAddr__________________"))
	require.NoError(t, err)

	for i := 0; i < 5; i++ {
		resp, err := srv.CreateTransportation(f.ctx, &types.MsgCreateTransportation{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestTransportationMsgServerUpdate(t *testing.T) {
	f := initFixture(t)
	srv := keeper.NewMsgServerImpl(f.keeper)

	creator, err := f.addressCodec.BytesToString([]byte("signerAddr__________________"))
	require.NoError(t, err)

	unauthorizedAddr, err := f.addressCodec.BytesToString([]byte("unauthorizedAddr___________"))
	require.NoError(t, err)

	_, err = srv.CreateTransportation(f.ctx, &types.MsgCreateTransportation{Creator: creator})
	require.NoError(t, err)

	tests := []struct {
		desc    string
		request *types.MsgUpdateTransportation
		err     error
	}{
		{
			desc:    "invalid address",
			request: &types.MsgUpdateTransportation{Creator: "invalid"},
			err:     sdkerrors.ErrInvalidAddress,
		},
		{
			desc:    "unauthorized",
			request: &types.MsgUpdateTransportation{Creator: unauthorizedAddr},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "key not found",
			request: &types.MsgUpdateTransportation{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc:    "completed",
			request: &types.MsgUpdateTransportation{Creator: creator},
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			_, err = srv.UpdateTransportation(f.ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestTransportationMsgServerDelete(t *testing.T) {
	f := initFixture(t)
	srv := keeper.NewMsgServerImpl(f.keeper)

	creator, err := f.addressCodec.BytesToString([]byte("signerAddr__________________"))
	require.NoError(t, err)

	unauthorizedAddr, err := f.addressCodec.BytesToString([]byte("unauthorizedAddr___________"))
	require.NoError(t, err)

	_, err = srv.CreateTransportation(f.ctx, &types.MsgCreateTransportation{Creator: creator})
	require.NoError(t, err)

	tests := []struct {
		desc    string
		request *types.MsgDeleteTransportation
		err     error
	}{
		{
			desc:    "invalid address",
			request: &types.MsgDeleteTransportation{Creator: "invalid"},
			err:     sdkerrors.ErrInvalidAddress,
		},
		{
			desc:    "unauthorized",
			request: &types.MsgDeleteTransportation{Creator: unauthorizedAddr},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "key not found",
			request: &types.MsgDeleteTransportation{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc:    "completed",
			request: &types.MsgDeleteTransportation{Creator: creator},
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			_, err = srv.DeleteTransportation(f.ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
