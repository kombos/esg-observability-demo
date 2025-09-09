package esgobservabilitydemo

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"

	"esgobservabilitydemo/testutil/sample"
	esgobservabilitydemosimulation "esgobservabilitydemo/x/esgobservabilitydemo/simulation"
	"esgobservabilitydemo/x/esgobservabilitydemo/types"
)

// GenerateGenesisState creates a randomized GenState of the module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	esgobservabilitydemoGenesis := types.GenesisState{
		Params:                    types.DefaultParams(),
		RawMaterialExtractionList: []types.RawMaterialExtraction{{Id: 0, Creator: sample.AccAddress()}, {Id: 1, Creator: sample.AccAddress()}}, RawMaterialExtractionCount: 2,
		ManufacturingList: []types.Manufacturing{{Id: 0, Creator: sample.AccAddress()}, {Id: 1, Creator: sample.AccAddress()}}, ManufacturingCount: 2,
		TransportationList: []types.Transportation{{Id: 0, Creator: sample.AccAddress()}, {Id: 1, Creator: sample.AccAddress()}}, TransportationCount: 2,
		MaterialProcessingList: []types.MaterialProcessing{{Id: 0, Creator: sample.AccAddress()}, {Id: 1, Creator: sample.AccAddress()}}, MaterialProcessingCount: 2,
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&esgobservabilitydemoGenesis)
}

// RegisterStoreDecoder registers a decoder.
func (am AppModule) RegisterStoreDecoder(_ simtypes.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)
	const (
		opWeightMsgCreateRawMaterialExtraction          = "op_weight_msg_esgobservabilitydemo"
		defaultWeightMsgCreateRawMaterialExtraction int = 100
	)

	var weightMsgCreateRawMaterialExtraction int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateRawMaterialExtraction, &weightMsgCreateRawMaterialExtraction, nil,
		func(_ *rand.Rand) {
			weightMsgCreateRawMaterialExtraction = defaultWeightMsgCreateRawMaterialExtraction
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateRawMaterialExtraction,
		esgobservabilitydemosimulation.SimulateMsgCreateRawMaterialExtraction(am.authKeeper, am.bankKeeper, am.keeper, simState.TxConfig),
	))
	const (
		opWeightMsgUpdateRawMaterialExtraction          = "op_weight_msg_esgobservabilitydemo"
		defaultWeightMsgUpdateRawMaterialExtraction int = 100
	)

	var weightMsgUpdateRawMaterialExtraction int
	simState.AppParams.GetOrGenerate(opWeightMsgUpdateRawMaterialExtraction, &weightMsgUpdateRawMaterialExtraction, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateRawMaterialExtraction = defaultWeightMsgUpdateRawMaterialExtraction
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateRawMaterialExtraction,
		esgobservabilitydemosimulation.SimulateMsgUpdateRawMaterialExtraction(am.authKeeper, am.bankKeeper, am.keeper, simState.TxConfig),
	))
	const (
		opWeightMsgDeleteRawMaterialExtraction          = "op_weight_msg_esgobservabilitydemo"
		defaultWeightMsgDeleteRawMaterialExtraction int = 100
	)

	var weightMsgDeleteRawMaterialExtraction int
	simState.AppParams.GetOrGenerate(opWeightMsgDeleteRawMaterialExtraction, &weightMsgDeleteRawMaterialExtraction, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteRawMaterialExtraction = defaultWeightMsgDeleteRawMaterialExtraction
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteRawMaterialExtraction,
		esgobservabilitydemosimulation.SimulateMsgDeleteRawMaterialExtraction(am.authKeeper, am.bankKeeper, am.keeper, simState.TxConfig),
	))
	const (
		opWeightMsgCreateManufacturing          = "op_weight_msg_esgobservabilitydemo"
		defaultWeightMsgCreateManufacturing int = 100
	)

	var weightMsgCreateManufacturing int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateManufacturing, &weightMsgCreateManufacturing, nil,
		func(_ *rand.Rand) {
			weightMsgCreateManufacturing = defaultWeightMsgCreateManufacturing
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateManufacturing,
		esgobservabilitydemosimulation.SimulateMsgCreateManufacturing(am.authKeeper, am.bankKeeper, am.keeper, simState.TxConfig),
	))
	const (
		opWeightMsgUpdateManufacturing          = "op_weight_msg_esgobservabilitydemo"
		defaultWeightMsgUpdateManufacturing int = 100
	)

	var weightMsgUpdateManufacturing int
	simState.AppParams.GetOrGenerate(opWeightMsgUpdateManufacturing, &weightMsgUpdateManufacturing, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateManufacturing = defaultWeightMsgUpdateManufacturing
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateManufacturing,
		esgobservabilitydemosimulation.SimulateMsgUpdateManufacturing(am.authKeeper, am.bankKeeper, am.keeper, simState.TxConfig),
	))
	const (
		opWeightMsgDeleteManufacturing          = "op_weight_msg_esgobservabilitydemo"
		defaultWeightMsgDeleteManufacturing int = 100
	)

	var weightMsgDeleteManufacturing int
	simState.AppParams.GetOrGenerate(opWeightMsgDeleteManufacturing, &weightMsgDeleteManufacturing, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteManufacturing = defaultWeightMsgDeleteManufacturing
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteManufacturing,
		esgobservabilitydemosimulation.SimulateMsgDeleteManufacturing(am.authKeeper, am.bankKeeper, am.keeper, simState.TxConfig),
	))
	const (
		opWeightMsgCreateTransportation          = "op_weight_msg_esgobservabilitydemo"
		defaultWeightMsgCreateTransportation int = 100
	)

	var weightMsgCreateTransportation int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateTransportation, &weightMsgCreateTransportation, nil,
		func(_ *rand.Rand) {
			weightMsgCreateTransportation = defaultWeightMsgCreateTransportation
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateTransportation,
		esgobservabilitydemosimulation.SimulateMsgCreateTransportation(am.authKeeper, am.bankKeeper, am.keeper, simState.TxConfig),
	))
	const (
		opWeightMsgUpdateTransportation          = "op_weight_msg_esgobservabilitydemo"
		defaultWeightMsgUpdateTransportation int = 100
	)

	var weightMsgUpdateTransportation int
	simState.AppParams.GetOrGenerate(opWeightMsgUpdateTransportation, &weightMsgUpdateTransportation, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateTransportation = defaultWeightMsgUpdateTransportation
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateTransportation,
		esgobservabilitydemosimulation.SimulateMsgUpdateTransportation(am.authKeeper, am.bankKeeper, am.keeper, simState.TxConfig),
	))
	const (
		opWeightMsgDeleteTransportation          = "op_weight_msg_esgobservabilitydemo"
		defaultWeightMsgDeleteTransportation int = 100
	)

	var weightMsgDeleteTransportation int
	simState.AppParams.GetOrGenerate(opWeightMsgDeleteTransportation, &weightMsgDeleteTransportation, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteTransportation = defaultWeightMsgDeleteTransportation
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteTransportation,
		esgobservabilitydemosimulation.SimulateMsgDeleteTransportation(am.authKeeper, am.bankKeeper, am.keeper, simState.TxConfig),
	))
	const (
		opWeightMsgCreateMaterialProcessing          = "op_weight_msg_esgobservabilitydemo"
		defaultWeightMsgCreateMaterialProcessing int = 100
	)

	var weightMsgCreateMaterialProcessing int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateMaterialProcessing, &weightMsgCreateMaterialProcessing, nil,
		func(_ *rand.Rand) {
			weightMsgCreateMaterialProcessing = defaultWeightMsgCreateMaterialProcessing
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateMaterialProcessing,
		esgobservabilitydemosimulation.SimulateMsgCreateMaterialProcessing(am.authKeeper, am.bankKeeper, am.keeper, simState.TxConfig),
	))
	const (
		opWeightMsgUpdateMaterialProcessing          = "op_weight_msg_esgobservabilitydemo"
		defaultWeightMsgUpdateMaterialProcessing int = 100
	)

	var weightMsgUpdateMaterialProcessing int
	simState.AppParams.GetOrGenerate(opWeightMsgUpdateMaterialProcessing, &weightMsgUpdateMaterialProcessing, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateMaterialProcessing = defaultWeightMsgUpdateMaterialProcessing
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateMaterialProcessing,
		esgobservabilitydemosimulation.SimulateMsgUpdateMaterialProcessing(am.authKeeper, am.bankKeeper, am.keeper, simState.TxConfig),
	))
	const (
		opWeightMsgDeleteMaterialProcessing          = "op_weight_msg_esgobservabilitydemo"
		defaultWeightMsgDeleteMaterialProcessing int = 100
	)

	var weightMsgDeleteMaterialProcessing int
	simState.AppParams.GetOrGenerate(opWeightMsgDeleteMaterialProcessing, &weightMsgDeleteMaterialProcessing, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteMaterialProcessing = defaultWeightMsgDeleteMaterialProcessing
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteMaterialProcessing,
		esgobservabilitydemosimulation.SimulateMsgDeleteMaterialProcessing(am.authKeeper, am.bankKeeper, am.keeper, simState.TxConfig),
	))

	return operations
}

// ProposalMsgs returns msgs used for governance proposals for simulations.
func (am AppModule) ProposalMsgs(simState module.SimulationState) []simtypes.WeightedProposalMsg {
	return []simtypes.WeightedProposalMsg{}
}
