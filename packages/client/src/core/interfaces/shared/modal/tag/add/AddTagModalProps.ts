// Types
import { ElementPositionType } from "@/core/types";

export interface AddTagModalProps {
  location: "overlay" | "container";

  sourceTagsIds: string[];

  onAddTagFunction: () => void;
}
