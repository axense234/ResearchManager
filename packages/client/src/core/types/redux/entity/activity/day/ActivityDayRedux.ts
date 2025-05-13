// Types
import { ActivityDay } from "@prisma/client";
import { ReduxEntityWrapper } from "../../../wrapper";

export type ActivityDayRedux = ReduxEntityWrapper<
  ActivityDay & {
    activityLogsIds: string[];
    activityFeedId: string;
  }
>;
