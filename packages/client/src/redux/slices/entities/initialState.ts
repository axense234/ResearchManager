// Types
import { EntitiesSliceInitialStateType } from "@/core/types";
// Initial State
import { researchActivitiesSliceState } from "../research/activity";
import { researchLogsSliceState } from "../research/log";
import { researchPhasesSliceState } from "../research/phase";
import { researchSessionsSliceState } from "../research/session";
import { tagsSliceState } from "../tag";
import { generalSliceInitialState } from "../general";

export const entitiesSliceInitialState: EntitiesSliceInitialStateType = {
  tags: tagsSliceState,
  researchActivities: researchActivitiesSliceState,
  researchPhases: researchPhasesSliceState,
  researchLogs: researchLogsSliceState,
  researchSessions: researchSessionsSliceState,
  general: generalSliceInitialState,
};
