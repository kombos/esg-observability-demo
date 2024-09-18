package esgobservabilitydemo

import (
	"math/rand"

	"esg-observability-demo/testutil/sample"
	esgobservabilitydemosimulation "esg-observability-demo/x/esgobservabilitydemo/simulation"
	"esg-observability-demo/x/esgobservabilitydemo/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = esgobservabilitydemosimulation.FindAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
	_ = rand.Rand{}
)

const (
	opWeightMsgCreateRawMaterialExtraction = "op_weight_msg_raw_material_extraction"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateRawMaterialExtraction int = 100

	opWeightMsgUpdateRawMaterialExtraction = "op_weight_msg_raw_material_extraction"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateRawMaterialExtraction int = 100

	opWeightMsgDeleteRawMaterialExtraction = "op_weight_msg_raw_material_extraction"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteRawMaterialExtraction int = 100

	opWeightMsgCreateManufacturing = "op_weight_msg_manufacturing"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateManufacturing int = 100

	opWeightMsgUpdateManufacturing = "op_weight_msg_manufacturing"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateManufacturing int = 100

	opWeightMsgDeleteManufacturing = "op_weight_msg_manufacturing"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteManufacturing int = 100

	opWeightMsgCreateTransportation = "op_weight_msg_transportation"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateTransportation int = 100

	opWeightMsgUpdateTransportation = "op_weight_msg_transportation"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateTransportation int = 100

	opWeightMsgDeleteTransportation = "op_weight_msg_transportation"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteTransportation int = 100

	opWeightMsgCreateMaterialProcessing = "op_weight_msg_material_processing"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateMaterialProcessing int = 100

	opWeightMsgUpdateMaterialProcessing = "op_weight_msg_material_processing"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateMaterialProcessing int = 100

	opWeightMsgDeleteMaterialProcessing = "op_weight_msg_material_processing"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteMaterialProcessing int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	esgobservabilitydemoGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		RawMaterialExtractionList: []types.RawMaterialExtraction{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		RawMaterialExtractionCount: 2,
		ManufacturingList: []types.Manufacturing{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		ManufacturingCount: 2,
		TransportationList: []types.Transportation{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		TransportationCount: 2,
		MaterialProcessingList: []types.MaterialProcessing{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		MaterialProcessingCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&esgobservabilitydemoGenesis)
}

// RegisterStoreDecoder registers a decoder.
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// ProposalContents doesn't return any content functions for governance proposals.
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateRawMaterialExtraction int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateRawMaterialExtraction, &weightMsgCreateRawMaterialExtraction, nil,
		func(_ *rand.Rand) {
			weightMsgCreateRawMaterialExtraction = defaultWeightMsgCreateRawMaterialExtraction
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateRawMaterialExtraction,
		esgobservabilitydemosimulation.SimulateMsgCreateRawMaterialExtraction(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateRawMaterialExtraction int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateRawMaterialExtraction, &weightMsgUpdateRawMaterialExtraction, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateRawMaterialExtraction = defaultWeightMsgUpdateRawMaterialExtraction
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateRawMaterialExtraction,
		esgobservabilitydemosimulation.SimulateMsgUpdateRawMaterialExtraction(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteRawMaterialExtraction int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteRawMaterialExtraction, &weightMsgDeleteRawMaterialExtraction, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteRawMaterialExtraction = defaultWeightMsgDeleteRawMaterialExtraction
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteRawMaterialExtraction,
		esgobservabilitydemosimulation.SimulateMsgDeleteRawMaterialExtraction(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateManufacturing int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateManufacturing, &weightMsgCreateManufacturing, nil,
		func(_ *rand.Rand) {
			weightMsgCreateManufacturing = defaultWeightMsgCreateManufacturing
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateManufacturing,
		esgobservabilitydemosimulation.SimulateMsgCreateManufacturing(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateManufacturing int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateManufacturing, &weightMsgUpdateManufacturing, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateManufacturing = defaultWeightMsgUpdateManufacturing
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateManufacturing,
		esgobservabilitydemosimulation.SimulateMsgUpdateManufacturing(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteManufacturing int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteManufacturing, &weightMsgDeleteManufacturing, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteManufacturing = defaultWeightMsgDeleteManufacturing
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteManufacturing,
		esgobservabilitydemosimulation.SimulateMsgDeleteManufacturing(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateTransportation int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateTransportation, &weightMsgCreateTransportation, nil,
		func(_ *rand.Rand) {
			weightMsgCreateTransportation = defaultWeightMsgCreateTransportation
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateTransportation,
		esgobservabilitydemosimulation.SimulateMsgCreateTransportation(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateTransportation int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateTransportation, &weightMsgUpdateTransportation, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateTransportation = defaultWeightMsgUpdateTransportation
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateTransportation,
		esgobservabilitydemosimulation.SimulateMsgUpdateTransportation(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteTransportation int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteTransportation, &weightMsgDeleteTransportation, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteTransportation = defaultWeightMsgDeleteTransportation
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteTransportation,
		esgobservabilitydemosimulation.SimulateMsgDeleteTransportation(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateMaterialProcessing int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateMaterialProcessing, &weightMsgCreateMaterialProcessing, nil,
		func(_ *rand.Rand) {
			weightMsgCreateMaterialProcessing = defaultWeightMsgCreateMaterialProcessing
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateMaterialProcessing,
		esgobservabilitydemosimulation.SimulateMsgCreateMaterialProcessing(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateMaterialProcessing int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateMaterialProcessing, &weightMsgUpdateMaterialProcessing, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateMaterialProcessing = defaultWeightMsgUpdateMaterialProcessing
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateMaterialProcessing,
		esgobservabilitydemosimulation.SimulateMsgUpdateMaterialProcessing(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteMaterialProcessing int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteMaterialProcessing, &weightMsgDeleteMaterialProcessing, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteMaterialProcessing = defaultWeightMsgDeleteMaterialProcessing
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteMaterialProcessing,
		esgobservabilitydemosimulation.SimulateMsgDeleteMaterialProcessing(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

// ProposalMsgs returns msgs used for governance proposals for simulations.
func (am AppModule) ProposalMsgs(simState module.SimulationState) []simtypes.WeightedProposalMsg {
	return []simtypes.WeightedProposalMsg{
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateRawMaterialExtraction,
			defaultWeightMsgCreateRawMaterialExtraction,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				esgobservabilitydemosimulation.SimulateMsgCreateRawMaterialExtraction(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgUpdateRawMaterialExtraction,
			defaultWeightMsgUpdateRawMaterialExtraction,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				esgobservabilitydemosimulation.SimulateMsgUpdateRawMaterialExtraction(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgDeleteRawMaterialExtraction,
			defaultWeightMsgDeleteRawMaterialExtraction,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				esgobservabilitydemosimulation.SimulateMsgDeleteRawMaterialExtraction(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateManufacturing,
			defaultWeightMsgCreateManufacturing,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				esgobservabilitydemosimulation.SimulateMsgCreateManufacturing(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgUpdateManufacturing,
			defaultWeightMsgUpdateManufacturing,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				esgobservabilitydemosimulation.SimulateMsgUpdateManufacturing(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgDeleteManufacturing,
			defaultWeightMsgDeleteManufacturing,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				esgobservabilitydemosimulation.SimulateMsgDeleteManufacturing(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateTransportation,
			defaultWeightMsgCreateTransportation,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				esgobservabilitydemosimulation.SimulateMsgCreateTransportation(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgUpdateTransportation,
			defaultWeightMsgUpdateTransportation,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				esgobservabilitydemosimulation.SimulateMsgUpdateTransportation(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgDeleteTransportation,
			defaultWeightMsgDeleteTransportation,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				esgobservabilitydemosimulation.SimulateMsgDeleteTransportation(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateMaterialProcessing,
			defaultWeightMsgCreateMaterialProcessing,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				esgobservabilitydemosimulation.SimulateMsgCreateMaterialProcessing(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgUpdateMaterialProcessing,
			defaultWeightMsgUpdateMaterialProcessing,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				esgobservabilitydemosimulation.SimulateMsgUpdateMaterialProcessing(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgDeleteMaterialProcessing,
			defaultWeightMsgDeleteMaterialProcessing,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				esgobservabilitydemosimulation.SimulateMsgDeleteMaterialProcessing(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		// this line is used by starport scaffolding # simapp/module/OpMsg
	}
}
