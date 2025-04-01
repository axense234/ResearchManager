// Adapter
import { researchActivitiesAdapter } from "./adapter";
// Types
import { ResearchActivitiesSliceStateType } from "@/core/types";
// Mock Data
import { createResearchActivityMockData } from "@researchmanager/shared/mock";

export const researchActivitiesSliceInitialState =
  researchActivitiesAdapter.getInitialState({
    createResearchActivityDto: createResearchActivityMockData[0],
    loadingCreateResearchActivity: "IDLE",
    loadingDeleteResearchActivity: "IDLE",
    loadingUpdateResearchActivity: "IDLE",
    loadingGetUserResearchActivities: "IDLE",
    loadingGetUserResearchActivity: "IDLE",
  }) as ResearchActivitiesSliceStateType;
