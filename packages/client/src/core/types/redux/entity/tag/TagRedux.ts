// Types
import { Tag } from "@prisma/client";
import { ReduxEntityWrapper } from "../../wrapper";

export type TagRedux = ReduxEntityWrapper<
  Tag & {
    researchActivitiesIds: string[];
    researchPhasesIds: string[];
    researchLogsIds: string[];
    researchSessionsIds: string[];
  }
>;
