// Types
import { ActivityDay } from "@prisma/client";
import { ActivityFeedPayload } from "./ActivityFeedPayload";
import { ActivityLogPayload } from "./ActivityLogPayload";

export type ActivityDayPayload = ActivityDay & {
  activityFeed?: ActivityFeedPayload;
  activityLogs?: ActivityLogPayload[];
};
