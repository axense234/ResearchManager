// Types
import {
  CreateResearchActivityDto,
  UpdateResearchActivityDto,
} from "@researchmanager/shared/types";
import { LoadingStateType } from "../../../other";
import { ResearchActivityRedux } from "./ResearchActivityRedux";

export type ResearchActivitiesSliceInitialStateType = {
  createResearchActivityDto: CreateResearchActivityDto;
  updateResearchActivityDto: UpdateResearchActivityDto;

  researchActivitiesExamples: ResearchActivityRedux[];

  currentResearchActivityExampleIndex: number;
  currentResearchActivityIndex: number;

  createDefaultResearchPhase: boolean;

  loadingCreateResearchActivity: LoadingStateType;
  loadingDeleteResearchActivity: LoadingStateType;
  loadingUpdateResearchActivity: LoadingStateType;
  loadingGetUserResearchActivities: LoadingStateType;
  loadingGetUserResearchActivity: LoadingStateType;
};
