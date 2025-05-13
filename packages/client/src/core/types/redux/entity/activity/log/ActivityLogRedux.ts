// Types
import { ActivityLog } from "@prisma/client";
import { ReduxEntityWrapper } from "../../../wrapper";

export type ActivityLogRedux = ReduxEntityWrapper<
  ActivityLog & {
    activityDaysIds: string[];
  }
>;
