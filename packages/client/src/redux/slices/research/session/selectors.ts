// Redux
import { State } from "@/redux/api/store";
import { createSelector, createSlice } from "@reduxjs/toolkit";
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

export const selectResearchSessionsByResearchPhaseId = createSelector(
  [
    selectAllResearchSessions,
    (state: State) => state,
    (_: State, researchPhaseId: string) => researchPhaseId,
  ],
  (researchSessions, state, researchPhaseId) => {
    return researchSessions.filter(
      (researchSession) => researchSession.researchPhaseId === researchPhaseId,
    );
  },
);

export const selectResearchSessionsByResearchActivityId = createSelector(
  [
    selectAllResearchSessions,
    (state: State) => state,
    (_: State, researchActivityId: string) => researchActivityId,
  ],
  (researchSessions, state, researchActivityId) => {
    const researchPhasesByResearchActivityId =
      selectResearchPhasesByResearchActivityId(state, researchActivityId);

    const researchPhasesIds = researchPhasesByResearchActivityId.map(
      (rp) => rp.id,
    );

    const researchSessionsToReturn = researchSessions.filter(
      (researchSession) =>
        researchPhasesIds.includes(researchSession.researchPhaseId),
    );

    return researchSessionsToReturn;
  },
);

export const selectResearchSessionsExamples = (state: State) =>
  state.researchSessions.researchSessionsExamples;

export const selectCreateResearchSessionDto = (state: State) =>
  state.researchSessions.createResearchSessionDto;

export const selectUpdateResearchSessionDto = (state: State) =>
  state.researchSessions.updateResearchSessionDto;

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
