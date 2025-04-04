// Types
import {
  ResearchPhaseRedux,
  ResearchPhasesSliceInitialStateType,
  ResearchPhasesSliceStateType,
} from "@/core/types";
// Adapter
import { researchPhasesAdapter } from "./adapter";
// Mock Data
import {
  createResearchPhaseMockData,
  researchPhasesMockData,
} from "@researchmanager/shared/mock";
// Helpers
import { transformEntityIntoEntityRedux } from "@/helpers";

export const researchPhasesSliceInitialState = {
  createResearchPhaseDto: createResearchPhaseMockData[0],
  researchPhasesExamples: researchPhasesMockData.map((rp) => {
    return transformEntityIntoEntityRedux(
      rp,
      "researchPhase",
    ) as ResearchPhaseRedux;
  }),
  loadingCreateResearchPhase: "IDLE",
  loadingDeleteResearchPhase: "IDLE",
  loadingUpdateResearchPhase: "IDLE",
  loadingGetUserResearchPhases: "IDLE",
  loadingGetUserResearchPhase: "IDLE",
} as ResearchPhasesSliceInitialStateType;

export const researchPhasesSliceState = researchPhasesAdapter.getInitialState(
  researchPhasesSliceInitialState,
) as ResearchPhasesSliceStateType;
