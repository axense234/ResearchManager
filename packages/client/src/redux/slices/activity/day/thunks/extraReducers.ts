// Types
import { ActivityDaysSliceStateType } from "@/core/types";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
// Extra Reducers
import {
  createActivityDay,
  createActivityDayFulfilled,
  createActivityDayPending,
  createActivityDayRejected,
} from "./createActivityDay";

export const activityDaysSliceExtraReducers: (
  builder: ActionReducerMapBuilder<ActivityDaysSliceStateType>,
) => void = (builder) => {
  builder
    .addCase(createActivityDay.pending, createActivityDayPending)
    .addCase(createActivityDay.fulfilled, createActivityDayFulfilled)
    .addCase(createActivityDay.rejected, createActivityDayRejected);
};
