package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"esg-observability-demo/x/esgobservabilitydemo/types"
)

func TestManufacturingMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateManufacturing(ctx, &types.MsgCreateManufacturing{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestManufacturingMsgServerUpdate(t *testing.T) {
	creator := "A"

	tests := []struct {
		desc    string
		request *types.MsgUpdateManufacturing
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateManufacturing{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateManufacturing{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateManufacturing{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateManufacturing(ctx, &types.MsgCreateManufacturing{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateManufacturing(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestManufacturingMsgServerDelete(t *testing.T) {
	creator := "A"

	tests := []struct {
		desc    string
		request *types.MsgDeleteManufacturing
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteManufacturing{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteManufacturing{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteManufacturing{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateManufacturing(ctx, &types.MsgCreateManufacturing{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteManufacturing(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
