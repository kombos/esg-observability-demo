package esgobservabilitydemo

import (
	autocliv1 "cosmossdk.io/api/cosmos/autocli/v1"

	"esgobservabilitydemo/x/esgobservabilitydemo/types"
)

// AutoCLIOptions implements the autocli.HasAutoCLIConfig interface.
func (am AppModule) AutoCLIOptions() *autocliv1.ModuleOptions {
	return &autocliv1.ModuleOptions{
		Query: &autocliv1.ServiceCommandDescriptor{
			Service: types.Query_serviceDesc.ServiceName,
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "Params",
					Use:       "params",
					Short:     "Shows the parameters of the module",
				},
				{
					RpcMethod: "ListRawMaterialExtraction",
					Use:       "list-raw-material-extraction",
					Short:     "List all rawMaterialExtraction",
				},
				{
					RpcMethod:      "GetRawMaterialExtraction",
					Use:            "get-raw-material-extraction [id]",
					Short:          "Gets a rawMaterialExtraction by id",
					Alias:          []string{"show-raw-material-extraction"},
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}},
				},
				{
					RpcMethod: "ListManufacturing",
					Use:       "list-manufacturing",
					Short:     "List all manufacturing",
				},
				{
					RpcMethod:      "GetManufacturing",
					Use:            "get-manufacturing [id]",
					Short:          "Gets a manufacturing by id",
					Alias:          []string{"show-manufacturing"},
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}},
				},
				{
					RpcMethod: "ListTransportation",
					Use:       "list-transportation",
					Short:     "List all transportation",
				},
				{
					RpcMethod:      "GetTransportation",
					Use:            "get-transportation [id]",
					Short:          "Gets a transportation by id",
					Alias:          []string{"show-transportation"},
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}},
				},
				{
					RpcMethod: "ListMaterialProcessing",
					Use:       "list-material-processing",
					Short:     "List all materialProcessing",
				},
				{
					RpcMethod:      "GetMaterialProcessing",
					Use:            "get-material-processing [id]",
					Short:          "Gets a materialProcessing by id",
					Alias:          []string{"show-material-processing"},
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}},
				},
				// this line is used by ignite scaffolding # autocli/query
			},
		},
		Tx: &autocliv1.ServiceCommandDescriptor{
			Service:              types.Msg_serviceDesc.ServiceName,
			EnhanceCustomCommand: true, // only required if you want to use the custom command
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "UpdateParams",
					Skip:      true, // skipped because authority gated
				},
				{
					RpcMethod:      "CreateRawMaterialExtraction",
					Use:            "create-raw-material-extraction [resource-type] [water-use] [emissions]",
					Short:          "Create rawMaterialExtraction",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "resource_type"}, {ProtoField: "water_use"}, {ProtoField: "emissions"}},
				},
				{
					RpcMethod:      "UpdateRawMaterialExtraction",
					Use:            "update-raw-material-extraction [id] [resource-type] [water-use] [emissions]",
					Short:          "Update rawMaterialExtraction",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}, {ProtoField: "resource_type"}, {ProtoField: "water_use"}, {ProtoField: "emissions"}},
				},
				{
					RpcMethod:      "DeleteRawMaterialExtraction",
					Use:            "delete-raw-material-extraction [id]",
					Short:          "Delete rawMaterialExtraction",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}},
				},
				{
					RpcMethod:      "CreateManufacturing",
					Use:            "create-manufacturing [component-type] [water-use] [emissions]",
					Short:          "Create manufacturing",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "component_type"}, {ProtoField: "water_use"}, {ProtoField: "emissions"}},
				},
				{
					RpcMethod:      "UpdateManufacturing",
					Use:            "update-manufacturing [id] [component-type] [water-use] [emissions]",
					Short:          "Update manufacturing",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}, {ProtoField: "component_type"}, {ProtoField: "water_use"}, {ProtoField: "emissions"}},
				},
				{
					RpcMethod:      "DeleteManufacturing",
					Use:            "delete-manufacturing [id]",
					Short:          "Delete manufacturing",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}},
				},
				{
					RpcMethod:      "CreateTransportation",
					Use:            "create-transportation [transportation-type] [fuel-use] [emissions]",
					Short:          "Create transportation",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "transportation_type"}, {ProtoField: "fuel_use"}, {ProtoField: "emissions"}},
				},
				{
					RpcMethod:      "UpdateTransportation",
					Use:            "update-transportation [id] [transportation-type] [fuel-use] [emissions]",
					Short:          "Update transportation",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}, {ProtoField: "transportation_type"}, {ProtoField: "fuel_use"}, {ProtoField: "emissions"}},
				},
				{
					RpcMethod:      "DeleteTransportation",
					Use:            "delete-transportation [id]",
					Short:          "Delete transportation",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}},
				},
				{
					RpcMethod:      "CreateMaterialProcessing",
					Use:            "create-material-processing [material-type] [water-use] [emissions]",
					Short:          "Create materialProcessing",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "material_type"}, {ProtoField: "water_use"}, {ProtoField: "emissions"}},
				},
				{
					RpcMethod:      "UpdateMaterialProcessing",
					Use:            "update-material-processing [id] [material-type] [water-use] [emissions]",
					Short:          "Update materialProcessing",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}, {ProtoField: "material_type"}, {ProtoField: "water_use"}, {ProtoField: "emissions"}},
				},
				{
					RpcMethod:      "DeleteMaterialProcessing",
					Use:            "delete-material-processing [id]",
					Short:          "Delete materialProcessing",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}},
				},
				// this line is used by ignite scaffolding # autocli/tx
			},
		},
	}
}
