// Types
import {
  ResearchActivity,
  ResearchLog,
  ResearchPhase,
  ResearchSession,
  Tag,
  User,
} from "@prisma/client";
import { ReduxEntityWrapper } from "../../wrapper";

export type TagRedux = ReduxEntityWrapper<
  Tag & {
    researchActivities: ResearchActivity[];
    researchPhases: ResearchPhase[];
    researchLogs: ResearchLog[];
    researchSessions: ResearchSession[];
    user: User;
  }
>;
