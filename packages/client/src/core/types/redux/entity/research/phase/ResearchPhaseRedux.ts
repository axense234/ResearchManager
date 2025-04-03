// Types
import { ResearchPhase } from "@prisma/client";
import { ReduxEntityWrapper } from "../../../wrapper";

export type ResearchPhaseRedux = ReduxEntityWrapper<
  ResearchPhase & {
    researchLogsIds: string[];
    researchSessionsIds: string[];
    tagsIds: string[];
  }
>;
