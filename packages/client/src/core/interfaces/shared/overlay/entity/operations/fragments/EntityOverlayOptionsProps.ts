// Types
import { ResearchSessionStatusType } from "@prisma/client";
import {
  EntityType,
  UpdateResearchSessionDto,
} from "@researchmanager/shared/types";

export interface EntityOverlayOptionsProps {
  entityType: EntityType;
  entityId: string;
  type: "view" | "upsert";
  dtoUsed: UpdateResearchSessionDto;
  currentStatusType: ResearchSessionStatusType;
}
