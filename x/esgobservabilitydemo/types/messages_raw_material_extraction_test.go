package types

import (
	"testing"

	"esg-observability-demo/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateRawMaterialExtraction_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateRawMaterialExtraction
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateRawMaterialExtraction{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateRawMaterialExtraction{
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

func TestMsgUpdateRawMaterialExtraction_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateRawMaterialExtraction
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateRawMaterialExtraction{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateRawMaterialExtraction{
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

func TestMsgDeleteRawMaterialExtraction_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteRawMaterialExtraction
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteRawMaterialExtraction{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteRawMaterialExtraction{
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
