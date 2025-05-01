// Types
import {
  CreateResearchActivityDto,
  CreateResearchLogDto,
  CreateResearchPhaseDto,
  EntityType,
  UpdateResearchActivityDto,
  UpdateResearchLogDto,
  UpdateResearchPhaseDto,
} from "@researchmanager/shared/types";

export interface EntityOverlayTagsProps {
  method: "create" | "update" | "view";
  entityType: EntityType;
  tags: string[];
  dtoUpdateFunction: () => void;
}
