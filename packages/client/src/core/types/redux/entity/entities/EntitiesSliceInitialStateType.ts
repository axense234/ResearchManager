// Types
import { TagsSliceStateType } from "../tag";
import {
  ResearchActivitiesSliceStateType,
  ResearchLogsSliceStateType,
  ResearchPhasesSliceStateType,
  ResearchSessionsSliceStateType,
} from "../research";
import { GeneralSliceInitialStateType } from "../general";

export type EntitiesSliceInitialStateType = {
  tags: TagsSliceStateType;
  researchActivities: ResearchActivitiesSliceStateType;
  researchPhases: ResearchPhasesSliceStateType;
  researchLogs: ResearchLogsSliceStateType;
  researchSessions: ResearchSessionsSliceStateType;
  general: GeneralSliceInitialStateType;
};
