// Redux
import { createSlice } from "@reduxjs/toolkit";
// Initial State
import { researchActivitiesSliceInitialState } from "./initialState";
// Reducers
import { researchActivitiesSliceReducers } from "./reducers";
// Extra Reducers
import { researchActivitiesSliceExtraReducers } from "./thunks";

const researchActivitiesSlice = createSlice({
  name: "researchActivities",
  initialState: researchActivitiesSliceInitialState,
  reducers: researchActivitiesSliceReducers,
  extraReducers(builder) {
    researchActivitiesSliceExtraReducers(builder);
  },
});

export const {
  updateCreateResearchActivityDto,
  updateLoadingResearchActivityState,
} = researchActivitiesSlice.actions;

export default researchActivitiesSlice.reducer;
