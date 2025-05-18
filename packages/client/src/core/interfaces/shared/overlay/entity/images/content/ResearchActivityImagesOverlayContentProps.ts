// Types
import {
  EntityContainerType,
  SpecialEntityImagesPayloadType,
} from "@/core/types";
import { Dispatch, SetStateAction } from "react";

export interface ResearchActivityImagesOverlayContentProps {
  currentResearchPhasesImages: SpecialEntityImagesPayloadType;
  researchPhasesImages: SpecialEntityImagesPayloadType[];

  viewType: EntityContainerType;

  showImageOverlay: boolean;
  setShowImageOverlay: Dispatch<SetStateAction<boolean>>;

  onSectionTitleClickFunction: (entityName: string) => void;
  onImageClickFunction: (parentName: string, index: number) => void;

  onRemoveImageFunction?: (imageSrc: string) => void;
}
