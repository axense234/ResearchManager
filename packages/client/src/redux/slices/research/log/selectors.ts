// Redux
import { State } from "@/redux/api/store";
import { createSelector, createSlice } from "@reduxjs/toolkit";
// Adapter
import { researchLogsAdapter } from "./adapter";

export const {
  selectAll: selectAllResearchLogs,
  selectById: selectResearchLogById,
  selectIds: selectResearchLogsIds,
  selectTotal: selectNumberOfResearchLogs,
} = researchLogsAdapter.getSelectors<State>((state) => state.researchLogs);

export const selectResearchLogsByIds = createSelector(
  [
    selectAllResearchLogs,
    (state, researchLogsIds: string[]) => researchLogsIds,
  ],
  (researchLogs, researchLogsIds) => {
    return researchLogs.filter((researchLog) =>
      researchLogsIds.includes(researchLog.id),
    );
  },
);

export const selectStatisticResearchLog = createSelector(
  [selectAllResearchLogs, (state, type: "longest" | "shortest") => type],
  (researchLogs, type) => {
    if (researchLogs.length === 0) {
      return null;
    }

    if (researchLogs.length === 1) {
      return researchLogs[0];
    }

    let statisticResearchLog = researchLogs[0];

    researchLogs.forEach((researchLog) => {
      if (
        type === "longest" &&
        researchLog.researchPoints > statisticResearchLog.researchPoints
      ) {
        statisticResearchLog = researchLog;
      } else if (
        type === "shortest" &&
        researchLog.researchPoints < statisticResearchLog.researchPoints
      ) {
        statisticResearchLog = researchLog;
      }
    });

    return statisticResearchLog;
  },
);

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
