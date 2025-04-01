// Types
import { CreateResearchActivityDto } from "@researchmanager/shared/types";
import { LoadingStateType } from "../../../other";

export type ResearchActivitiesInitialStateType = {
  createResearchActivityDto: CreateResearchActivityDto;

  loadingCreateResearchActivity: LoadingStateType;
  loadingDeleteResearchActivity: LoadingStateType;
  loadingUpdateResearchActivity: LoadingStateType;
  loadingGetUserResearchActivities: LoadingStateType;
  loadingGetUserResearchActivity: LoadingStateType;
};
