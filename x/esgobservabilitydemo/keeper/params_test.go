package keeper_test

import (
	"testing"

	testkeeper "esg-observability-demo/testutil/keeper"
	"esg-observability-demo/x/esgobservabilitydemo/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.EsgobservabilitydemoKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
