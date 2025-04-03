// Types
import { ActivityLog } from "@prisma/client";
import { ActivityDayPayload } from "./ActivityDayPayload";

export type ActivityLogPayload = ActivityLog & {
  activityDays?: ActivityDayPayload[];
};
