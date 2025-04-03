// Types
import {
  ResearchLogRedux,
  ResearchLogsSliceInitialStateType,
  ResearchLogsSliceStateType,
} from "@/core/types";
// Adapter
import { researchLogsAdapter } from "./adapter";
// Mock Data
import {
  createResearchLogMockData,
  researchLogsMockData,
} from "@researchmanager/shared/mock";
// Helpers
import { transformEntityIntoEntityRedux } from "@/helpers";

export const researchLogsSliceInitialState = {
  createResearchLogDto: createResearchLogMockData[0],
  researchLogsExamples: researchLogsMockData.map((log) => {
    return transformEntityIntoEntityRedux(
      log,
      "researchLog",
    ) as ResearchLogRedux;
  }),
  loadingCreateResearchLog: "IDLE",
  loadingDeleteResearchLog: "IDLE",
  loadingUpdateResearchLog: "IDLE",
  loadingGetUserResearchLog: "IDLE",
  loadingGetUserResearchLogs: "IDLE",
} as ResearchLogsSliceInitialStateType;

export const researchLogsSliceState = researchLogsAdapter.getInitialState(
  researchLogsSliceInitialState,
) as ResearchLogsSliceStateType;
