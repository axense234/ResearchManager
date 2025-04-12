// Types
import {
  EntityImagePayloadType,
  SpecialEntityImagesPayloadType,
} from "@/core/types";
import { Dispatch, SetStateAction } from "react";

export interface ResearchPhaseImagesOverlayContentProps {
  currentImagePayload: EntityImagePayloadType;
  researchLogsImages: SpecialEntityImagesPayloadType;

  setCurrentImageSrc: Dispatch<SetStateAction<string>>;

  showImageOverlay: boolean;
  setShowImageOverlay: Dispatch<SetStateAction<boolean>>;
}
