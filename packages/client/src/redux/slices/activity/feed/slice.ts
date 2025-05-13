// Redux
import { createSlice } from "@reduxjs/toolkit";
// Initial State
import { activityFeedsSliceState } from "./initialState";
// Reducers
import { activityFeedsSliceReducers } from "./reducers";

const activityFeedsSlice = createSlice({
  name: "activityFeeds",
  initialState: activityFeedsSliceState,
  reducers: activityFeedsSliceReducers,
});

export const { setActivityFeed } = activityFeedsSlice.actions;

export default activityFeedsSlice.reducer;
