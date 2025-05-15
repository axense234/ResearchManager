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
  setCurrentActivityDayId(
    state: ActivityDaysSliceStateType,
    action: PayloadAction<string>,
  ) {
    console.log(action.payload);
    state.currentActivityDayId = action.payload;
  },
};
