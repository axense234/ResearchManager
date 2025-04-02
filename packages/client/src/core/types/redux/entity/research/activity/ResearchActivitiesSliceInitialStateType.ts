// Types
import { CreateResearchActivityDto } from "@researchmanager/shared/types";
import { LoadingStateType } from "../../../other";
import { ResearchActivityRedux } from "./ResearchActivityRedux";

export type ResearchActivitiesSliceInitialStateType = {
  createResearchActivityDto: CreateResearchActivityDto;

  researchActivitiesExamples: ResearchActivityRedux[];

  loadingCreateResearchActivity: LoadingStateType;
  loadingDeleteResearchActivity: LoadingStateType;
  loadingUpdateResearchActivity: LoadingStateType;
  loadingGetUserResearchActivities: LoadingStateType;
  loadingGetUserResearchActivity: LoadingStateType;
};
