// Redux
import { State } from "@/redux/api/store";
import { createSelector } from "@reduxjs/toolkit";
// Adapter
import { researchLogsAdapter } from "./adapter";

export const {
  selectAll: selectAllResearchLogs,
  selectById: selectResearchLogById,
  selectIds: selectResearchLogsIds,
  selectTotal: selectNumberOfResearchLogs,
} = researchLogsAdapter.getSelectors<State>((state) => state.researchLogs);

// Examples
export const selectResearchLogsExamples = (state: State) =>
  state.researchLogs.researchLogsExamples;

export const selectResearchLogExampleById = createSelector(
  [selectResearchLogsExamples, (state, logId) => logId],
  (researchLogs, researchLogId) =>
    researchLogs.find((researchLog) => researchLog.id === researchLogId),
);

export const selectResearchLogsExamplesByIds = createSelector(
  [selectResearchLogsExamples, (state, ids) => ids],
  (researchLogs, ids) =>
    researchLogs.filter((researchLog) => ids.includes(researchLog.id)),
);

// General
export const selectCreateResearchLogDto = (state: State) =>
  state.researchLogs.createResearchLogDto;

export const selectLoadingGetUserResearchLogs = (state: State) =>
  state.researchLogs.loadingGetUserResearchLogs;

export const selectLoadingGetUserResearchLog = (state: State) =>
  state.researchLogs.loadingGetUserResearchLog;

export const selectLoadingCreateResearchLog = (state: State) =>
  state.researchLogs.loadingCreateResearchLog;

export const selectLoadingUpdateResearchLog = (state: State) =>
  state.researchLogs.loadingUpdateResearchLog;

export const selectLoadingDeleteResearchLog = (state: State) =>
  state.researchLogs.loadingDeleteResearchLog;
