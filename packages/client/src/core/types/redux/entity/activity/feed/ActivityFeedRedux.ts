// Types
import { ActivityFeed } from "@prisma/client";
import { ReduxEntityWrapper } from "../../../wrapper";

export type ActivityFeedRedux = ReduxEntityWrapper<
  ActivityFeed & {
    activityDaysIds: string[];
    researchActivityId: string;
  }
>;
