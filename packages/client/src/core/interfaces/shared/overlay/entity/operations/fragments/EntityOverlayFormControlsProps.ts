// Typess
import {
  CreateResearchActivityDto,
  CreateResearchLogDto,
  CreateResearchPhaseDto,
  EntityType,
  UpdateResearchActivityDto,
  UpdateResearchLogDto,
  UpdateResearchPhaseDto,
} from "@researchmanager/shared/types";

export interface EntityOverlayFormControlsProps {
  dto:
    | CreateResearchActivityDto
    | UpdateResearchActivityDto
    | CreateResearchPhaseDto
    | UpdateResearchPhaseDto
    | CreateResearchLogDto
    | UpdateResearchLogDto;
  entityType: EntityType;
  method: "create" | "update";
}
