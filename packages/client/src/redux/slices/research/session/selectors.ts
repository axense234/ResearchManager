// Redux
import { State } from "@/redux/api/store";
import { createSelector } from "@reduxjs/toolkit";
// Adapter
import { researchSessionsAdapter } from "./adapter";
// Selectors
import { selectResearchPhasesByResearchActivityId } from "../phase";

export const {
  selectAll: selectAllResearchSessions,
  selectById: selectResearchSessionById,
  selectIds: selectResearchSessionsIds,
} = researchSessionsAdapter.getSelectors<State>(
  (state) => state.researchSessions,
);

export const selectResearchSessionsByResearchActivityId = createSelector(
  [
    selectAllResearchSessions,
    (state: State) => state,
    (_: State, researchActivityId: string) => researchActivityId,
  ],
  (researchSessions, state, researchActivityId) => {
    const researchActivityResearchPhases =
      selectResearchPhasesByResearchActivityId(state, researchActivityId);

    const researchActivityResearchSessionsIds = researchActivityResearchPhases
      .map((researchPhase) => researchPhase.researchSessionsIds)
      .flat();

    const researchActivityResearchSessions = researchSessions.filter(
      (researchSession) =>
        researchActivityResearchSessionsIds.includes(researchSession.id),
    );

    return researchActivityResearchSessions;
  },
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
