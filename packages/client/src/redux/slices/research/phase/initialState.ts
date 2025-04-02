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

export const researchPhasesSliceInitialState =
  researchPhasesAdapter.getInitialState({
    createResearchPhaseDto: createResearchPhaseMockData[0],
    researchPhasesExamples: researchPhasesMockData.map((rp) => {
      return transformEntityIntoEntityRedux(rp) as ResearchPhaseRedux;
    }),
    loadingCreateResearchPhase: "IDLE",
    loadingDeleteResearchPhase: "IDLE",
    loadingUpdateResearchPhase: "IDLE",
    loadingGetUserResearchPhases: "IDLE",
    loadingGetUserResearchPhase: "IDLE",
  } as ResearchPhasesSliceInitialStateType) as ResearchPhasesSliceStateType;
