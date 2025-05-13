// Types
import { ActivityLogRedux, ActivityLOgsSliceStateType } from "@/core/types";
import { PayloadAction } from "@reduxjs/toolkit";
// Adapter
import { activityLogsAdapter } from "./adapter";

export const activityLogsSliceReducers = {
  setActivityLogs(
    state: ActivityLOgsSliceStateType,
    action: PayloadAction<ActivityLogRedux[]>,
  ) {
    activityLogsAdapter.setAll(state, action.payload);
  },
};
