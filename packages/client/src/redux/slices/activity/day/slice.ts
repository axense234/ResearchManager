// Redux
import { createSlice } from "@reduxjs/toolkit";
// Initial State
import { activityDaysSliceState } from "./initialState";
// Reducers
import { activityDaysSliceReducers } from "./reducers";

const activityDaysSlice = createSlice({
  name: "activityDays",
  initialState: activityDaysSliceState,
  reducers: activityDaysSliceReducers,
});

export const { setActivityDays } = activityDaysSlice.actions;

export default activityDaysSlice.reducer;
