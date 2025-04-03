// Types
import { ResearchPhase } from "@prisma/client";
import { ResearchActivityPayload } from "./ResearchActivityPayload";
import { TagPayload } from "./TagPayload";
import { ResearchSessionPayload } from "./ResearchSessionPayload";
import { ResearchLogPayload } from "./ResearchLogPayload";

export type ResearchPhasePayload = ResearchPhase & {
  researchActivity?: ResearchActivityPayload;
  tags?: TagPayload[];
  researchSessions?: ResearchSessionPayload[];
  researchLogs?: ResearchLogPayload[];
};
