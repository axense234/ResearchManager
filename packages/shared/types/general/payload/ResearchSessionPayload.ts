// Types
import { ResearchSession } from "@prisma/client";
import { ResearchPhasePayload } from "./ResearchPhasePayload";
import { TagPayload } from "./TagPayload";

export type ResearchSessionPayload = ResearchSession & {
  researchPhase?: ResearchPhasePayload;
  tags?: TagPayload[];
};
