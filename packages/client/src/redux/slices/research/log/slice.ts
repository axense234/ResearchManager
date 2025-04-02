// Redux
import { createSlice } from "@reduxjs/toolkit";
// Initial State
import { researchLogsSliceInitialState } from "./initialState";
// Reducers
import { researchLogsSliceReducers } from "./reducers";
import { researchLogsSliceExtraReducers } from "./thunks";

const researchLogsSlice = createSlice({
  name: "researchLogs",
  initialState: researchLogsSliceInitialState,
  reducers: researchLogsSliceReducers,
  extraReducers(builder) {
    researchLogsSliceExtraReducers(builder);
  },
});

export const { updateCreateResearchLogDto, updateLoadingResearchLogState } =
  researchLogsSlice.actions;

export default researchLogsSlice.reducer;
