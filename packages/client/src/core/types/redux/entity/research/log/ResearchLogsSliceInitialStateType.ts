// Types
import { CreateResearchLogDto } from "@researchmanager/shared/types";
import { ResearchLogRedux } from "./ResearchLogRedux";
import { LoadingStateType } from "../../../other";

export type ResearchLogsSliceInitialStateType = {
  createResearchLogDto: CreateResearchLogDto;

  researchLogsExamples: ResearchLogRedux[];

  loadingCreateResearchLog: LoadingStateType;
  loadingDeleteResearchLog: LoadingStateType;
  loadingUpdateResearchLog: LoadingStateType;
  loadingGetUserResearchLog: LoadingStateType;
  loadingGetUserResearchLogs: LoadingStateType;
};
