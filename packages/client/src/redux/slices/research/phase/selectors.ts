// Redux
import { State } from "@/redux/api/store";
import { createSelector } from "@reduxjs/toolkit";
// Adapter
import { researchPhasesAdapter } from "./adapter";
// Selectors
import { calculateResearchPhaseRP } from "@/helpers";

export const {
  selectAll: selectAllResearchPhases,
  selectById: selectResearchPhaseById,
  selectIds: selectResearchPhasesIds,
  selectTotal: selectNumberOfResearchPhases,
} = researchPhasesAdapter.getSelectors<State>((state) => state.researchPhases);

export const selectResearchPhasesByIds = createSelector(
  [
    selectAllResearchPhases,
    (state, researchPhasesIds: string[]) => researchPhasesIds,
  ],
  (researchPhases, researchPhasesIds) => {
    return researchPhases.filter((researchPhase) =>
      researchPhasesIds.includes(researchPhase.id),
    );
  },
);

export const selectStatisticResearchPhase = createSelector(
  [
    selectAllResearchPhases,
    (state: State) => state,
    (_: State, type: "most" | "least") => type,
  ],
  (researchPhases, state, type) => {
    if (researchPhases.length === 0) {
      return null;
    }

    if (researchPhases.length === 1) {
      const researchPhaseRP = calculateResearchPhaseRP(
        state,
        researchPhases[0],
      );
      return { researchPhase: researchPhases[0], researchPhaseRP };
    }

    let statisticResearchPhase = researchPhases[0];
    let statisticRP = calculateResearchPhaseRP(state, researchPhases[0]);

    researchPhases.forEach((researchPhase) => {
      const researchPhaseRP = calculateResearchPhaseRP(state, researchPhase);

      if (type === "most" && researchPhaseRP > statisticRP) {
        statisticResearchPhase = researchPhase;
        statisticRP = researchPhaseRP;
      } else if (type === "least" && researchPhaseRP < statisticRP) {
        statisticResearchPhase = researchPhase;
        statisticRP = researchPhaseRP;
      }
    });

    return {
      researchPhase: statisticResearchPhase,
      researchPhaseRP: statisticRP,
    };
  },
);

export const selectAllUnarchivedResearchPhasesIds = createSelector(
  [selectAllResearchPhases],
  (researchPhases) =>
    researchPhases
      .filter((researchPhase) => !researchPhase.archived)
      .map((researchPhase) => researchPhase.id),
);

export const selectNumberOfUnarchivedResearchPhases = createSelector(
  [selectAllUnarchivedResearchPhasesIds],
  (ids) => ids.length,
);

export const selectResearchPhasesByResearchActivityId = createSelector(
  [selectAllResearchPhases, (state, researchActivityId) => researchActivityId],
  (researchPhases, researchActivityId) => {
    return researchPhases.filter(
      (researchPhase) =>
        researchPhase.researchActivityId === researchActivityId,
    );
  },
);

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

export const selectUpdateResearchPhaseDto = (state: State) =>
  state.researchPhases.updateResearchPhaseDto;

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
