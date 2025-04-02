// Redux
import { createSlice } from "@reduxjs/toolkit";
// Initial State
import { researchPhasesSliceInitialState } from "./initialState";
// Reducers
import { researchPhasesSliceReducers } from "./reducers";
// Extra Reducers
import { researchPhasesSliceExtraReducers } from "./thunks";

const researchPhasesSlice = createSlice({
  name: "researchPhases",
  initialState: researchPhasesSliceInitialState,
  reducers: researchPhasesSliceReducers,
  extraReducers(builder) {
    researchPhasesSliceExtraReducers(builder);
  },
});

export const {
  updateCreateResearchPhaseDto,
  updateLoadingResearchPhaseState,
  testAdapter,
} = researchPhasesSlice.actions;

export default researchPhasesSlice.reducer;
