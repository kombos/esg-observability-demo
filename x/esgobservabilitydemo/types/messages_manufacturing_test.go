package types

import (
	"testing"

	"esg-observability-demo/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateManufacturing_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateManufacturing
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateManufacturing{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateManufacturing{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateManufacturing_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateManufacturing
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateManufacturing{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateManufacturing{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteManufacturing_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteManufacturing
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteManufacturing{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteManufacturing{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
