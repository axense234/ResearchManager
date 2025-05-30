// Types
import {
  CreateResearchPhaseDto,
  UpdateResearchPhaseDto,
} from "@researchmanager/shared/types";
import { ResearchPhaseRedux } from "./ResearchPhaseRedux";
import { LoadingStateType } from "@/core/types";

export type ResearchPhasesSliceInitialStateType = {
  createResearchPhaseDto: CreateResearchPhaseDto;
  updateResearchPhaseDto: UpdateResearchPhaseDto;

  researchPhasesExamples: ResearchPhaseRedux[];

  currentResearchPhaseExampleIndex: number;
  currentResearchPhaseIndex: number;

  loadingCreateResearchPhase: LoadingStateType;
  loadingDeleteResearchPhase: LoadingStateType;
  loadingUpdateResearchPhase: LoadingStateType;
  loadingGetUserResearchPhases: LoadingStateType;
  loadingGetUserResearchPhase: LoadingStateType;
};
