// Types
import {
  ResearchLog,
  ResearchPhase,
  ResearchSession,
  Tag,
} from "@prisma/client";
import { ReduxEntityWrapper } from "../../../wrapper";

export type ResearchPhaseRedux = ReduxEntityWrapper<
  ResearchPhase & {
    researchLogs: ResearchLog[];
    researchSessions: ResearchSession[];
    tags: Tag[];
  }
>;
