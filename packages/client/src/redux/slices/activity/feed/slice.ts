// Redux
import { createSlice } from "@reduxjs/toolkit";
// Initial State
import { activityFeedsSliceInitialState } from "./initialState";

const activityFeedsSlice = createSlice({
  name: "activityFeeds",
  initialState: activityFeedsSliceInitialState,
  reducers: {},
});

export const {} = activityFeedsSlice.actions;

export default activityFeedsSlice.reducer;
