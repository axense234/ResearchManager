// Types
import {
  CreateResearchLogDto,
  CreateResearchSessionDto,
  UpdateResearchLogDto,
  UpdateResearchSessionDto,
} from "@researchmanager/shared/types";

export interface EntityOverlayImagesProps {
  type: "view" | "upsert";
  dto:
    | CreateResearchSessionDto
    | CreateResearchLogDto
    | UpdateResearchSessionDto
    | UpdateResearchLogDto;

  entityId: string;

  showImageOverlay: boolean;
  setShowImageOverlay: (show: boolean) => void;

  onAddImagesFunction?: (images: string[]) => void;
  onRemoveImagesFunction?: (imageSrc: string) => void;
}
