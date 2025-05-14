// Redux
import { createSlice } from "@reduxjs/toolkit";
// Initial State
import { activityDaysSliceState } from "./initialState";
// Reducers
import { activityDaysSliceReducers } from "./reducers";
// Extra Reducers
import { activityDaysSliceExtraReducers } from "./thunks";

const activityDaysSlice = createSlice({
  name: "activityDays",
  initialState: activityDaysSliceState,
  reducers: activityDaysSliceReducers,
  extraReducers(builder) {
    activityDaysSliceExtraReducers(builder);
  },
});

export const { setActivityDays } = activityDaysSlice.actions;

export default activityDaysSlice.reducer;
