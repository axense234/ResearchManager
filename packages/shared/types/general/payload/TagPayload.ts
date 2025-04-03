// Types
import { Tag } from "@prisma/client";
import { UserPayload } from "./UserPayload";
import { ResearchActivityPayload } from "./ResearchActivityPayload";
import { ResearchPhasePayload } from "./ResearchPhasePayload";
import { ResearchSessionPayload } from "./ResearchSessionPayload";
import { ResearchLogPayload } from "./ResearchLogPayload";

export type TagPayload = Tag & {
  user?: UserPayload;
  researchActivities?: ResearchActivityPayload[];
  researchPhases?: ResearchPhasePayload[];
  researchSessions?: ResearchSessionPayload[];
  researchLogs?: ResearchLogPayload[];
};
