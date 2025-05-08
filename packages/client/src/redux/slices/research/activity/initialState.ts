// Adapter
import { researchActivitiesAdapter } from "./adapter";
// Types
import {
  ResearchActivitiesSliceInitialStateType,
  ResearchActivitiesSliceStateType,
} from "@/core/types";
import { defaultCreateResearchActivityDto } from "@/data/redux";
// Helpers
import { transformAndSortSpecialEntityExamplesByRP } from "@/helpers";
// Mock Data
import { updateResearchActivityMockData } from "@researchmanager/shared/mock";

export const researchActivitiesSliceInitialState = {
  createResearchActivityDto: defaultCreateResearchActivityDto,
  updateResearchActivityDto: { ...updateResearchActivityMockData[0], tags: [] },
  researchActivitiesExamples:
    transformAndSortSpecialEntityExamplesByRP("researchActivity"),
  loadingCreateResearchActivity: "IDLE",
  loadingDeleteResearchActivity: "IDLE",
  loadingUpdateResearchActivity: "IDLE",
  loadingGetUserResearchActivities: "IDLE",
  loadingGetUserResearchActivity: "IDLE",
  currentResearchActivityExampleIndex: 1,
  currentResearchActivityIndex: 1,
  createDefaultResearchPhase: true,
} as ResearchActivitiesSliceInitialStateType;

export const researchActivitiesSliceState =
  researchActivitiesAdapter.getInitialState(
    researchActivitiesSliceInitialState,
  ) as ResearchActivitiesSliceStateType;
