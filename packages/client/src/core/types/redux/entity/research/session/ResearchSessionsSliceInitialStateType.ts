// Types
import {
  CreateResearchSessionDto,
  UpdateResearchSessionDto,
} from "@researchmanager/shared/types";
import { ResearchSessionRedux } from "./ResearchSessionRedux";
import { LoadingStateType } from "../../../other";

export type ResearchSessionsSliceInitialStateType = {
  createResearchSessionDto: CreateResearchSessionDto;
  updateResearchSessionDto: UpdateResearchSessionDto;

  researchSessionsExamples: ResearchSessionRedux[];

  loadingCreateResearchSession: LoadingStateType;
  loadingDeleteResearchSession: LoadingStateType;
  loadingUpdateResearchSession: LoadingStateType;
  loadingGetUserResearchSession: LoadingStateType;
  loadingGetUserResearchSessions: LoadingStateType;
};
