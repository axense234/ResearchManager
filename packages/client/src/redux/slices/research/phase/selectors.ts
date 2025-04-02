// Redux
import { State } from "@/redux/api/store";
// Adapter
import { researchPhasesAdapter } from "./adapter";

export const {
  selectAll: selectAllResearchPhases,
  selectById: selectResearchPhaseById,
  selectIds: selectResearchPhasesIds,
} = researchPhasesAdapter.getSelectors<State>((state) => state.researchPhases);

export const selectResearchPhasesExamples = (state: State) =>
  state.researchPhases.researchPhasesExamples;

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
