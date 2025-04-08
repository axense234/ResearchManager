// Types
import { MouseEventHandler } from "react";

export interface EntityImageProps {
  imageSrc?: string;
  onClickFunction: MouseEventHandler<HTMLImageElement> | undefined;
}
