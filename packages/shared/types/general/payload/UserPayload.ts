// Types
import { User } from "@prisma/client";
import { SettingsPayload } from "./SettingsPayload";
import { ActivityFeedPayload } from "./ActivityFeedPayload";
import { TagPayload } from "./TagPayload";
import { ResearchActivityPayload } from "./ResearchActivityPayload";

export type UserPayload = User & {
  settings?: SettingsPayload;
  activityFeed?: ActivityFeedPayload;
  tags?: TagPayload[];
  researchActivities?: ResearchActivityPayload[];
};
