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
  researchLogsMockData,
  updateResearchLogMockData,
} from "@researchmanager/shared/mock";
import { defaultCreateResearchLogDto } from "@/data/redux";
// Helpers
import { transformEntityIntoEntityRedux } from "@/helpers";

export const researchLogsSliceInitialState = {
  createResearchLogDto: defaultCreateResearchLogDto,
  updateResearchLogDto: { ...updateResearchLogMockData[0] },
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
