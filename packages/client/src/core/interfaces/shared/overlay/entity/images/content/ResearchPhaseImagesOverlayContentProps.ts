// Types
import { SpecialEntityImagesPayloadType } from "@/core/types";
import { Dispatch, SetStateAction } from "react";

export interface ResearchPhaseImagesOverlayContentProps {
  currentResearchLogsImages: SpecialEntityImagesPayloadType;
  researchLogsImages: SpecialEntityImagesPayloadType[];
  showImageOverlay: boolean;
  setShowImageOverlay: Dispatch<SetStateAction<boolean>>;

  onImageClickFunction: (parentName: string, index: number) => void;
}
