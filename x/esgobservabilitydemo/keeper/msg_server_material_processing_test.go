package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"esg-observability-demo/x/esgobservabilitydemo/types"
)

func TestMaterialProcessingMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateMaterialProcessing(ctx, &types.MsgCreateMaterialProcessing{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestMaterialProcessingMsgServerUpdate(t *testing.T) {
	creator := "A"

	tests := []struct {
		desc    string
		request *types.MsgUpdateMaterialProcessing
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateMaterialProcessing{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateMaterialProcessing{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateMaterialProcessing{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateMaterialProcessing(ctx, &types.MsgCreateMaterialProcessing{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateMaterialProcessing(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestMaterialProcessingMsgServerDelete(t *testing.T) {
	creator := "A"

	tests := []struct {
		desc    string
		request *types.MsgDeleteMaterialProcessing
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteMaterialProcessing{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteMaterialProcessing{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteMaterialProcessing{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateMaterialProcessing(ctx, &types.MsgCreateMaterialProcessing{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteMaterialProcessing(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
