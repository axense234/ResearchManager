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
  researchSessionsMockData,
  updateResearchSessionMockData,
} from "@researchmanager/shared/mock";
import { defaultCreateResearchSessionDto } from "@/data/redux";
// Helpers
import { transformEntityIntoEntityRedux } from "@/helpers";

export const researchSessionsSliceInitialState = {
  createResearchSessionDto: defaultCreateResearchSessionDto,
  updateResearchSessionDto: { ...updateResearchSessionMockData[0] },
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
} as ResearchSessionsSliceInitialStateType;

export const researchSessionsSliceState =
  researchSessionsAdapter.getInitialState(
    researchSessionsSliceInitialState,
  ) as ResearchSessionsSliceStateType;
