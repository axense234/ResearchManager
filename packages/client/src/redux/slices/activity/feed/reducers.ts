// Types
import { ActivityFeedRedux, ActivityFeedsSliceStateType } from "@/core/types";
import { PayloadAction } from "@reduxjs/toolkit";
// Adapter
import { activityFeedsAdapter } from "./adapter";

export const activityFeedsSliceReducers = {
  setActivityFeed(
    state: ActivityFeedsSliceStateType,
    action: PayloadAction<ActivityFeedRedux>,
  ) {
    activityFeedsAdapter.setOne(state, action.payload);
  },
};
