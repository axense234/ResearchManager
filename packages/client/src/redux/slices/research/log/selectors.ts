// Redux
import { State } from "@/redux/api/store";
// Adapter
import { researchLogsAdapter } from "./adapter";

export const {
  selectAll: selectAllResearchLogs,
  selectById: selectResearchLogById,
  selectIds: selectResearchLogsIds,
} = researchLogsAdapter.getSelectors<State>((state) => state.researchLogs);

export const selectResearchLogsExamples = (state: State) =>
  state.researchLogs.researchLogsExamples;

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
