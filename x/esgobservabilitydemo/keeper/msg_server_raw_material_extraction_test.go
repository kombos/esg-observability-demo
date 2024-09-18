package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"esg-observability-demo/x/esgobservabilitydemo/types"
)

func TestRawMaterialExtractionMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateRawMaterialExtraction(ctx, &types.MsgCreateRawMaterialExtraction{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestRawMaterialExtractionMsgServerUpdate(t *testing.T) {
	creator := "A"

	tests := []struct {
		desc    string
		request *types.MsgUpdateRawMaterialExtraction
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateRawMaterialExtraction{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateRawMaterialExtraction{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateRawMaterialExtraction{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateRawMaterialExtraction(ctx, &types.MsgCreateRawMaterialExtraction{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateRawMaterialExtraction(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestRawMaterialExtractionMsgServerDelete(t *testing.T) {
	creator := "A"

	tests := []struct {
		desc    string
		request *types.MsgDeleteRawMaterialExtraction
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteRawMaterialExtraction{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteRawMaterialExtraction{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteRawMaterialExtraction{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateRawMaterialExtraction(ctx, &types.MsgCreateRawMaterialExtraction{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteRawMaterialExtraction(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
