// Types
import { ActivityLogRedux, ActivityLogsSliceStateType } from "@/core/types";
import { PayloadAction } from "@reduxjs/toolkit";
// Adapter
import { activityLogsAdapter } from "./adapter";

export const activityLogsSliceReducers = {
  setActivityLogs(
    state: ActivityLogsSliceStateType,
    action: PayloadAction<ActivityLogRedux[]>,
  ) {
    activityLogsAdapter.setAll(state, action.payload);
  },
};
