package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"esg-observability-demo/x/esgobservabilitydemo/types"
)

func TestTransportationMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateTransportation(ctx, &types.MsgCreateTransportation{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestTransportationMsgServerUpdate(t *testing.T) {
	creator := "A"

	tests := []struct {
		desc    string
		request *types.MsgUpdateTransportation
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateTransportation{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateTransportation{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateTransportation{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateTransportation(ctx, &types.MsgCreateTransportation{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateTransportation(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestTransportationMsgServerDelete(t *testing.T) {
	creator := "A"

	tests := []struct {
		desc    string
		request *types.MsgDeleteTransportation
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteTransportation{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteTransportation{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteTransportation{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateTransportation(ctx, &types.MsgCreateTransportation{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteTransportation(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
