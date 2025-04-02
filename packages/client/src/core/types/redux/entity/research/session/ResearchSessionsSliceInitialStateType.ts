// Types
import { CreateResearchSessionDto } from "@researchmanager/shared/types";
import { ResearchSessionRedux } from "./ResearchSessionRedux";
import { LoadingStateType } from "../../../other";

export type ResearchSessionsSliceInitialStateType = {
  createResearchSessionDto: CreateResearchSessionDto;

  researchSessionsExamples: ResearchSessionRedux[];

  loadingCreateResearchSession: LoadingStateType;
  loadingDeleteResearchSession: LoadingStateType;
  loadingUpdateResearchSession: LoadingStateType;
  loadingGetUserResearchSession: LoadingStateType;
  loadingGetUserResearchSessions: LoadingStateType;
};
