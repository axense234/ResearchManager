// Adapter
import { researchActivitiesAdapter } from "./adapter";
// Types
import {
  ResearchActivitiesSliceInitialStateType,
  ResearchActivitiesSliceStateType,
} from "@/core/types";
// Helpers
import { transformAndSortSpecialEntityExamplesByRP } from "@/helpers";
// Mock Data
import { createResearchActivityMockData } from "@researchmanager/shared/mock";

export const researchActivitiesSliceInitialState = {
  createResearchActivityDto: createResearchActivityMockData[0],
  researchActivitiesExamples:
    transformAndSortSpecialEntityExamplesByRP("researchActivity"),
  loadingCreateResearchActivity: "IDLE",
  loadingDeleteResearchActivity: "IDLE",
  loadingUpdateResearchActivity: "IDLE",
  loadingGetUserResearchActivities: "IDLE",
  loadingGetUserResearchActivity: "IDLE",
  currentResearchActivityExampleIndex: 1,
  currentResearchActivityIndex: 1,
} as ResearchActivitiesSliceInitialStateType;

export const researchActivitiesSliceState =
  researchActivitiesAdapter.getInitialState(
    researchActivitiesSliceInitialState,
  ) as ResearchActivitiesSliceStateType;
