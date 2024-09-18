package cli

import (
	"strconv"

	"esg-observability-demo/x/esgobservabilitydemo/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

func CmdCreateManufacturing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-manufacturing [component-type] [water-use] [emissions]",
		Short: "Create a new Manufacturing",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argComponentType := args[0]
			argWaterUse := args[1]
			argEmissions := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateManufacturing(clientCtx.GetFromAddress().String(), argComponentType, argWaterUse, argEmissions)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateManufacturing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-manufacturing [id] [component-type] [water-use] [emissions]",
		Short: "Update a Manufacturing",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argComponentType := args[1]

			argWaterUse := args[2]

			argEmissions := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateManufacturing(clientCtx.GetFromAddress().String(), id, argComponentType, argWaterUse, argEmissions)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteManufacturing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-manufacturing [id]",
		Short: "Delete a Manufacturing by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteManufacturing(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
