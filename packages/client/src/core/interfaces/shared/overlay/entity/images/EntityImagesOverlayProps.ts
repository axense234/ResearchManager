// Types
import { MouseEventHandler } from "react";

export interface EntityImagesOverlayProps {
  imagesSrc?: string[];
  showOverlay: boolean;
  closeOverlayFunction: MouseEventHandler<HTMLDivElement> | undefined;
}
