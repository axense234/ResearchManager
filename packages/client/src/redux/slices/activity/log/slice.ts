// Redux
import { createSlice } from "@reduxjs/toolkit";
// Initial State
import { activityLogsSliceState } from "./initialState";
// Reducers
import { activityLogsSliceReducers } from "./reducers";

const activityLogsSlice = createSlice({
  name: "activityLogs",
  initialState: activityLogsSliceState,
  reducers: activityLogsSliceReducers,
});

export const { setActivityLogs } = activityLogsSlice.actions;

export default activityLogsSlice.reducer;
