package types

import (
	"testing"

	"esg-observability-demo/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateMaterialProcessing_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateMaterialProcessing
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateMaterialProcessing{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateMaterialProcessing{
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

func TestMsgUpdateMaterialProcessing_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateMaterialProcessing
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateMaterialProcessing{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateMaterialProcessing{
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

func TestMsgDeleteMaterialProcessing_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteMaterialProcessing
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteMaterialProcessing{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteMaterialProcessing{
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
