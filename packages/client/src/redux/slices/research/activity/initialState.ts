// Adapter
import { researchActivitiesAdapter } from "./adapter";
// Types
import {
  ResearchActivitiesSliceInitialStateType,
  ResearchActivitiesSliceStateType,
  ResearchActivityRedux,
} from "@/core/types";
import { transformEntityIntoEntityRedux } from "@/helpers";
// Mock Data
import {
  createResearchActivityMockData,
  researchActivitiesMockData,
} from "@researchmanager/shared/mock";

export const researchActivitiesSliceInitialState = {
  createResearchActivityDto: createResearchActivityMockData[0],
  researchActivitiesExamples: researchActivitiesMockData.map((ra) => {
    return transformEntityIntoEntityRedux(
      ra,
      "researchActivity",
    ) as ResearchActivityRedux;
  }),
  loadingCreateResearchActivity: "IDLE",
  loadingDeleteResearchActivity: "IDLE",
  loadingUpdateResearchActivity: "IDLE",
  loadingGetUserResearchActivities: "IDLE",
  loadingGetUserResearchActivity: "IDLE",
} as ResearchActivitiesSliceInitialStateType;

export const researchActivitiesSliceState =
  researchActivitiesAdapter.getInitialState(
    researchActivitiesSliceInitialState,
  ) as ResearchActivitiesSliceStateType;
