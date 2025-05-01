// Types
import {
  CreateResearchActivityDto,
  UpdateResearchActivityDto,
  CreateResearchPhaseDto,
  UpdateResearchPhaseDto,
  CreateResearchLogDto,
  UpdateResearchLogDto,
} from "@researchmanager/shared/types";

export interface EntityOverlayTagsOptionsProps {
  dto:
    | CreateResearchActivityDto
    | UpdateResearchActivityDto
    | CreateResearchPhaseDto
    | UpdateResearchPhaseDto
    | CreateResearchLogDto
    | UpdateResearchLogDto;
  dtoUpdateFunction: () => void;
  showAllTags: boolean;
  setShowAllTags: (show: boolean) => void;
}
