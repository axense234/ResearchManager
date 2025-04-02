// Types
import {
  ResearchSessionRedux,
  ResearchSessionsSliceInitialStateType,
  ResearchSessionsSliceStateType,
} from "@/core/types";
// Adapter
import { researchSessionsAdapter } from "./adapter";
// Mock Data
import {
  createResearchSessionMockData,
  researchSessionsMockData,
} from "@researchmanager/shared/mock";
// Helpers
import { transformEntityIntoEntityRedux } from "@/helpers";

export const researchSessionsSliceInitialState =
  researchSessionsAdapter.getInitialState({
    // Workaround
    createResearchSessionDto: {
      ...createResearchSessionMockData[0],
      currentStatusDate: new Date(
        createResearchSessionMockData[0]?.currentStatusDate as Date,
      ).toISOString(),
    } as unknown,
    researchSessionsExamples: researchSessionsMockData.map((session) => {
      return transformEntityIntoEntityRedux(
        session,
        "researchSession",
      ) as ResearchSessionRedux;
    }),
    loadingCreateResearchSession: "IDLE",
    loadingDeleteResearchSession: "IDLE",
    loadingUpdateResearchSession: "IDLE",
    loadingGetUserResearchSessions: "IDLE",
    loadingGetUserResearchSession: "IDLE",
  } as ResearchSessionsSliceInitialStateType) as ResearchSessionsSliceStateType;
