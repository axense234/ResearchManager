// Redux
import { createSlice } from "@reduxjs/toolkit";
// Initial State
import { researchPhasesSliceState } from "./initialState";
// Reducers
import { researchPhasesSliceReducers } from "./reducers";
// Extra Reducers
import { researchPhasesSliceExtraReducers } from "./thunks";

const researchPhasesSlice = createSlice({
  name: "researchPhases",
  initialState: researchPhasesSliceState,
  reducers: researchPhasesSliceReducers,
  extraReducers(builder) {
    researchPhasesSliceExtraReducers(builder);
  },
});

export const {
  updateCreateResearchPhaseDto,
  updateLoadingResearchPhaseState,
  setResearchPhases,
  handleResearchPhaseCarouselStepDirection,
  handleResearchPhaseExampleCarouselStepDirection,
  setUpdateResearchPhaseDto,
  updateUpdateResearchPhaseDto,
  setCreateResearchPhaseDto,
  addResearchPhase,
  setCurrentResearchPhaseIndex,
} = researchPhasesSlice.actions;

export default researchPhasesSlice.reducer;
