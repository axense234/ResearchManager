// Types
import {
  ResearchPhasesSliceInitialStateType,
  ResearchPhasesSliceStateType,
} from "@/core/types";
// Adapter
import { researchPhasesAdapter } from "./adapter";
// Mock Data
import { updateResearchPhaseMockData } from "@researchmanager/shared/mock";
import { defaultCreateResearchPhaseDto } from "@/data/redux";
// Helpers
import { transformAndSortSpecialEntityExamplesByRP } from "@/helpers";

export const researchPhasesSliceInitialState = {
  createResearchPhaseDto: defaultCreateResearchPhaseDto,
  updateResearchPhaseDto: { ...updateResearchPhaseMockData[0], tags: [] },
  researchPhasesExamples:
    transformAndSortSpecialEntityExamplesByRP("researchPhase"),
  loadingCreateResearchPhase: "IDLE",
  loadingDeleteResearchPhase: "IDLE",
  loadingUpdateResearchPhase: "IDLE",
  loadingGetUserResearchPhases: "IDLE",
  loadingGetUserResearchPhase: "IDLE",
  currentResearchPhaseExampleIndex: 1,
  currentResearchPhaseIndex: 1,
} as ResearchPhasesSliceInitialStateType;

export const researchPhasesSliceState = researchPhasesAdapter.getInitialState(
  researchPhasesSliceInitialState,
) as ResearchPhasesSliceStateType;
