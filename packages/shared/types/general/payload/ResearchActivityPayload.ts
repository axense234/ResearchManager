// Types
import { ResearchActivity } from "@prisma/client";
import { UserPayload } from "./UserPayload";
import { ActivityFeedPayload } from "./ActivityFeedPayload";
import { TagPayload } from "./TagPayload";
import { ResearchPhasePayload } from "./ResearchPhasePayload";

export type ResearchActivityPayload = ResearchActivity & {
  user?: UserPayload;
  activityFeed?: ActivityFeedPayload;
  tags?: TagPayload[];
  researchPhases?: ResearchPhasePayload[];
};
