// Types
import { ActivityLogsSliceStateType } from "@/core/types";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
// Extra Reducers
import {
  createActivityLog,
  createActivityLogFulfilled,
  createActivityLogPending,
  createActivityLogRejected,
} from "./createActivityLog";

export const activityLogsSliceExtraReducers: (
  builder: ActionReducerMapBuilder<ActivityLogsSliceStateType>,
) => void = (builder) => {
  builder
    .addCase(createActivityLog.pending, createActivityLogPending)
    .addCase(createActivityLog.fulfilled, createActivityLogFulfilled)
    .addCase(createActivityLog.rejected, createActivityLogRejected);
};
