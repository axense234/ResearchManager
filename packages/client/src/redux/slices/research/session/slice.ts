// Redux
import { createSlice } from "@reduxjs/toolkit";
// Initial State
import { researchSessionsSliceState } from "./initialState";
// Reducers
import { researchSessionsSliceReducers } from "./reducers";
// Thunks
import { researchSessionsSliceExtraReducers } from "./thunks";

const researchSessionsSlice = createSlice({
  name: "researchSessions",
  initialState: researchSessionsSliceState,
  reducers: researchSessionsSliceReducers,
  extraReducers(builder) {
    researchSessionsSliceExtraReducers(builder);
  },
});

export const {
  updateCreateResearchSessionDto,
  updateLoadingResearchSessionState,
  setResearchSessions,
} = researchSessionsSlice.actions;

export default researchSessionsSlice.reducer;
