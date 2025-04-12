// Types
import {
  EntityImagePayloadType,
  SpecialEntityImagesPayloadType,
} from "@/core/types";
import { Dispatch, SetStateAction } from "react";

export interface ResearchActivityImagesOverlayContentProps {
  currentImagePayload: EntityImagePayloadType;
  currentImagesPayload: EntityImagePayloadType[];
  researchPhasesImages: SpecialEntityImagesPayloadType;

  currentResearchPhaseName: string;
  setCurrentResearchPhaseName: Dispatch<SetStateAction<string>>;

  setCurrentImageSrc: Dispatch<SetStateAction<string>>;

  showImageOverlay: boolean;
  setShowImageOverlay: Dispatch<SetStateAction<boolean>>;
}
