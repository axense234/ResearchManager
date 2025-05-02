// Redux
import { createSlice } from "@reduxjs/toolkit";
// Initial State
import { researchActivitiesSliceState } from "./initialState";
// Reducers
import { researchActivitiesSliceReducers } from "./reducers";
// Extra Reducers
import { researchActivitiesSliceExtraReducers } from "./thunks";

const researchActivitiesSlice = createSlice({
  name: "researchActivities",
  initialState: researchActivitiesSliceState,
  reducers: researchActivitiesSliceReducers,
  extraReducers(builder) {
    researchActivitiesSliceExtraReducers(builder);
  },
});

export const {
  updateCreateResearchActivityDto,
  updateLoadingResearchActivityState,
  handleResearchActivityCarouselStepDirection,
  handleResearchActivityExampleCarouselStepDirection,
  setResearchActivities,
  setResearchActivityExamples,
  setCreateDefaultResearchPhase,
} = researchActivitiesSlice.actions;

export default researchActivitiesSlice.reducer;
