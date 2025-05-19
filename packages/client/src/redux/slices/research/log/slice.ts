// Redux
import { createSlice } from "@reduxjs/toolkit";
// Initial State
import { researchLogsSliceState } from "./initialState";
// Reducers
import { researchLogsSliceReducers } from "./reducers";
import { researchLogsSliceExtraReducers } from "./thunks";

const researchLogsSlice = createSlice({
  name: "researchLogs",
  initialState: researchLogsSliceState,
  reducers: researchLogsSliceReducers,
  extraReducers(builder) {
    researchLogsSliceExtraReducers(builder);
  },
});

export const {
  updateCreateResearchLogDto,
  updateLoadingResearchLogState,
  setResearchLogs,
  updateUpdateResearchLogDto,
  setCreateResearchLogDto,
} = researchLogsSlice.actions;

export default researchLogsSlice.reducer;
