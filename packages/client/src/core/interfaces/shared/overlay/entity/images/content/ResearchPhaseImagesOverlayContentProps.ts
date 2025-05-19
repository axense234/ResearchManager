// Types
import {
  EntityContainerType,
  SpecialEntityImagesPayloadType,
} from "@/core/types";
import { Dispatch, SetStateAction } from "react";

export interface ResearchPhaseImagesOverlayContentProps {
  currentResearchLogsImages: SpecialEntityImagesPayloadType;
  researchLogsImages: SpecialEntityImagesPayloadType[];

  viewType: EntityContainerType;

  showImageOverlay: boolean;
  setShowImageOverlay: Dispatch<SetStateAction<boolean>>;

  onImageClickFunction: (
    logId: string,
    parentId: string,
    index: number,
  ) => void;

  onRemoveImageFunction?: (imageSrc: string) => void;
}
