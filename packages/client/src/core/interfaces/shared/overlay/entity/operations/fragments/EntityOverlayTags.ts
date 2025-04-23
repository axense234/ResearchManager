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
  dto:
    | CreateResearchActivityDto
    | UpdateResearchActivityDto
    | CreateResearchPhaseDto
    | UpdateResearchPhaseDto
    | CreateResearchLogDto
    | UpdateResearchLogDto;
}
