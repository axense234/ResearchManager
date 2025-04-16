// Redux
import { State } from "@/redux/api/store";
// Adapter
import { researchPhasesAdapter } from "./adapter";
import { createSelector } from "@reduxjs/toolkit";

export const {
  selectAll: selectAllResearchPhases,
  selectById: selectResearchPhaseById,
  selectIds: selectResearchPhasesIds,
} = researchPhasesAdapter.getSelectors<State>((state) => state.researchPhases);

export const selectResearchPhasesExamples = (state: State) =>
  state.researchPhases.researchPhasesExamples;

export const selectResearchPhaseExampleById = createSelector(
  [selectResearchPhasesExamples, (state, phaseId) => phaseId],
  (researchPhases, researchPhaseId) =>
    researchPhases.find(
      (researchPhase) => researchPhase.id === researchPhaseId,
    ),
);

export const selectResearchPhasesExamplesByIds = createSelector(
  [selectResearchPhasesExamples, (state, ids) => ids],
  (researchPhases, ids) =>
    researchPhases.filter((researchPhase) => ids.includes(researchPhase.id)),
);

export const selectResearchPhaseIdByIndex = createSelector(
  [selectResearchPhasesIds, (state, index) => index],
  (researchPhasesIds, index) => {
    return researchPhasesIds[index - 1];
  },
);

export const selectResearchPhaseExampleIdByIndex = createSelector(
  [selectResearchPhasesExamples, (state, index) => index],
  (researchPhases, index) => researchPhases[index - 1].id,
);

export const selectCurrentResearchPhaseExampleIndex = (state: State) =>
  state.researchPhases.currentResearchPhaseExampleIndex;

export const selectCurrentResearchPhaseIndex = (state: State) =>
  state.researchPhases.currentResearchPhaseIndex;

export const selectCreateResearchPhaseDto = (state: State) =>
  state.researchPhases.createResearchPhaseDto;

export const selectLoadingGetUserResearchPhases = (state: State) =>
  state.researchPhases.loadingGetUserResearchPhases;

export const selectLoadingGetUserResearchPhase = (state: State) =>
  state.researchPhases.loadingGetUserResearchPhase;

export const selectLoadingCreateResearchPhase = (state: State) =>
  state.researchPhases.loadingCreateResearchPhase;

export const selectLoadingUpdateResearchPhase = (state: State) =>
  state.researchPhases.loadingUpdateResearchPhase;

export const selectLoadingDeleteResearchPhase = (state: State) =>
  state.researchPhases.loadingDeleteResearchPhase;
