// Types
import { ResearchActivity } from "@prisma/client";
import { ReduxEntityWrapper } from "../../../wrapper";

export type ResearchActivityRedux = ReduxEntityWrapper<
  ResearchActivity & {
    activityFeedId: string;
    researchPhasesIds: string[];
    tagsIds: string[];
  }
>;
