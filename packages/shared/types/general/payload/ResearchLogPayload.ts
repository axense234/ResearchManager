// Types
import { ResearchLog } from "@prisma/client";
import { ResearchPhasePayload } from "./ResearchPhasePayload";
import { TagPayload } from "./TagPayload";

export type ResearchLogPayload = ResearchLog & {
  researchPhase?: ResearchPhasePayload;
  tags?: TagPayload[];
};
