// Redux
import { createSlice } from "@reduxjs/toolkit";
// Initial State
import { activityLogsSliceState } from "./initialState";
// Reducers
import { activityLogsSliceReducers } from "./reducers";
// Extra Reducers
import { activityLogsSliceExtraReducers } from "./thunks";

const activityLogsSlice = createSlice({
  name: "activityLogs",
  initialState: activityLogsSliceState,
  reducers: activityLogsSliceReducers,
  extraReducers(builder) {
    activityLogsSliceExtraReducers(builder);
  },
});

export const { setActivityLogs } = activityLogsSlice.actions;

export default activityLogsSlice.reducer;
