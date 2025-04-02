// Redux
import { State } from "@/redux/api/store";
// Adapter
import { researchSessionsAdapter } from "./adapter";

export const {
  selectAll: selectAllResearchSessions,
  selectById: selectResearchSessionById,
  selectIds: selectResearchSessionsIds,
} = researchSessionsAdapter.getSelectors<State>(
  (state) => state.researchSessions,
);

export const selectResearchSessionsExamples = (state: State) =>
  state.researchSessions.researchSessionsExamples;

export const selectCreateResearchSessionDto = (state: State) =>
  state.researchSessions.createResearchSessionDto;

export const selectLoadingGetUserResearchSessions = (state: State) =>
  state.researchSessions.loadingGetUserResearchSessions;

export const selectLoadingGetUserResearchSession = (state: State) =>
  state.researchSessions.loadingGetUserResearchSession;

export const selectLoadingCreateResearchSession = (state: State) =>
  state.researchSessions.loadingCreateResearchSession;

export const selectLoadingUpdateResearchSession = (state: State) =>
  state.researchSessions.loadingUpdateResearchSession;

export const selectLoadingDeleteResearchSession = (state: State) =>
  state.researchSessions.loadingDeleteResearchSession;
