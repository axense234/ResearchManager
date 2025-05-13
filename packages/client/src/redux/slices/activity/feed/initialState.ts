// Types
import {
  ActivityFeedsSliceInitialStateType,
  ActivityFeedsSliceStateType,
} from "@/core/types";
// Adapter
import { activityFeedsAdapter } from "./adapter";

export const activityFeedsSliceInitialState =
  {} as ActivityFeedsSliceInitialStateType;

export const activityFeedsSliceSate = activityFeedsAdapter.getInitialState(
  activityFeedsSliceInitialState,
) as ActivityFeedsSliceStateType;
