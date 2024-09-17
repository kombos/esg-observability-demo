package keeper

import (
	"esg-observability-demo/x/esgobservabilitydemo/types"
)

var _ types.QueryServer = Keeper{}
