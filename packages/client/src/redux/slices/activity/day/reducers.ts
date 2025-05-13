// Types
import { ActivityDayRedux, ActivityDaysSliceStateType } from "@/core/types";
import { PayloadAction } from "@reduxjs/toolkit";
// Adapter
import { activityDaysAdapter } from "./adapter";

export const activityDaysSliceReducers = {
  setActivityDays(
    state: ActivityDaysSliceStateType,
    action: PayloadAction<ActivityDayRedux[]>,
  ) {
    activityDaysAdapter.setAll(state, action.payload);
  },
};
