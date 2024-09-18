package cli

import (
	"strconv"

	"esg-observability-demo/x/esgobservabilitydemo/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListRawMaterialExtraction() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-raw-material-extraction",
		Short: "list all Raw_Material_Extraction",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllRawMaterialExtractionRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.RawMaterialExtractionAll(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowRawMaterialExtraction() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-raw-material-extraction [id]",
		Short: "shows a Raw_Material_Extraction",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetRawMaterialExtractionRequest{
				Id: id,
			}

			res, err := queryClient.RawMaterialExtraction(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
