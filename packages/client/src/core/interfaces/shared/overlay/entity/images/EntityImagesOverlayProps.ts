// Types
import { EntityImagePayloadType } from "@/core/types";
import { MouseEventHandler } from "react";

export interface EntityImagesOverlayProps {
  entityImages: EntityImagePayloadType[];
  entityName: string;
  showOverlay: boolean;
  closeOverlayFunction: MouseEventHandler<HTMLDivElement> | undefined;
  specialEntityType: "researchActivity" | "researchPhase";
}
