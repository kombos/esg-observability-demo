package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"esg-observability-demo/x/esgobservabilitydemo/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group esgobservabilitydemo queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdListRawMaterialExtraction())
	cmd.AddCommand(CmdShowRawMaterialExtraction())
	cmd.AddCommand(CmdListManufacturing())
	cmd.AddCommand(CmdShowManufacturing())
	cmd.AddCommand(CmdListTransportation())
	cmd.AddCommand(CmdShowTransportation())
	cmd.AddCommand(CmdListMaterialProcessing())
	cmd.AddCommand(CmdShowMaterialProcessing())
	// this line is used by starport scaffolding # 1

	return cmd
}
