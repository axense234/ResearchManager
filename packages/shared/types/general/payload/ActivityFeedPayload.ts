// Types
import { ActivityFeed } from "@prisma/client";
import { ResearchActivityPayload } from "./ResearchActivityPayload";
import { UserPayload } from "./UserPayload";
import { ActivityDayPayload } from "./ActivityDayPayload";

export type ActivityFeedPayload = ActivityFeed & {
  user?: UserPayload;
  researchActivity?: ResearchActivityPayload;
  activityDays?: ActivityDayPayload[];
};
