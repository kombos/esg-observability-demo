package cli_test

import (
	"fmt"
	"testing"

	tmcli "github.com/cometbft/cometbft/libs/cli"
	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"esg-observability-demo/testutil/network"
	"esg-observability-demo/testutil/nullify"
	"esg-observability-demo/x/esgobservabilitydemo/client/cli"
	"esg-observability-demo/x/esgobservabilitydemo/types"
)

func networkWithRawMaterialExtractionObjects(t *testing.T, n int) (*network.Network, []types.RawMaterialExtraction) {
	t.Helper()
	cfg := network.DefaultConfig()
	state := types.GenesisState{}
	for i := 0; i < n; i++ {
		rawMaterialExtraction := types.RawMaterialExtraction{
			Id: uint64(i),
		}
		nullify.Fill(&rawMaterialExtraction)
		state.RawMaterialExtractionList = append(state.RawMaterialExtractionList, rawMaterialExtraction)
	}
	buf, err := cfg.Codec.MarshalJSON(&state)
	require.NoError(t, err)
	cfg.GenesisState[types.ModuleName] = buf
	return network.New(t, cfg), state.RawMaterialExtractionList
}

func TestShowRawMaterialExtraction(t *testing.T) {
	net, objs := networkWithRawMaterialExtractionObjects(t, 2)

	ctx := net.Validators[0].ClientCtx
	common := []string{
		fmt.Sprintf("--%s=json", tmcli.OutputFlag),
	}
	tests := []struct {
		desc string
		id   string
		args []string
		err  error
		obj  types.RawMaterialExtraction
	}{
		{
			desc: "found",
			id:   fmt.Sprintf("%d", objs[0].Id),
			args: common,
			obj:  objs[0],
		},
		{
			desc: "not found",
			id:   "not_found",
			args: common,
			err:  status.Error(codes.NotFound, "not found"),
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			args := []string{tc.id}
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdShowRawMaterialExtraction(), args)
			if tc.err != nil {
				stat, ok := status.FromError(tc.err)
				require.True(t, ok)
				require.ErrorIs(t, stat.Err(), tc.err)
			} else {
				require.NoError(t, err)
				var resp types.QueryGetRawMaterialExtractionResponse
				require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
				require.NotNil(t, resp.RawMaterialExtraction)
				require.Equal(t,
					nullify.Fill(&tc.obj),
					nullify.Fill(&resp.RawMaterialExtraction),
				)
			}
		})
	}
}

func TestListRawMaterialExtraction(t *testing.T) {
	net, objs := networkWithRawMaterialExtractionObjects(t, 5)

	ctx := net.Validators[0].ClientCtx
	request := func(next []byte, offset, limit uint64, total bool) []string {
		args := []string{
			fmt.Sprintf("--%s=json", tmcli.OutputFlag),
		}
		if next == nil {
			args = append(args, fmt.Sprintf("--%s=%d", flags.FlagOffset, offset))
		} else {
			args = append(args, fmt.Sprintf("--%s=%s", flags.FlagPageKey, next))
		}
		args = append(args, fmt.Sprintf("--%s=%d", flags.FlagLimit, limit))
		if total {
			args = append(args, fmt.Sprintf("--%s", flags.FlagCountTotal))
		}
		return args
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(objs); i += step {
			args := request(nil, uint64(i), uint64(step), false)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdListRawMaterialExtraction(), args)
			require.NoError(t, err)
			var resp types.QueryAllRawMaterialExtractionResponse
			require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
			require.LessOrEqual(t, len(resp.RawMaterialExtraction), step)
			require.Subset(t,
				nullify.Fill(objs),
				nullify.Fill(resp.RawMaterialExtraction),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(objs); i += step {
			args := request(next, 0, uint64(step), false)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdListRawMaterialExtraction(), args)
			require.NoError(t, err)
			var resp types.QueryAllRawMaterialExtractionResponse
			require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
			require.LessOrEqual(t, len(resp.RawMaterialExtraction), step)
			require.Subset(t,
				nullify.Fill(objs),
				nullify.Fill(resp.RawMaterialExtraction),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		args := request(nil, 0, uint64(len(objs)), true)
		out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdListRawMaterialExtraction(), args)
		require.NoError(t, err)
		var resp types.QueryAllRawMaterialExtractionResponse
		require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
		require.NoError(t, err)
		require.Equal(t, len(objs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(objs),
			nullify.Fill(resp.RawMaterialExtraction),
		)
	})
}
