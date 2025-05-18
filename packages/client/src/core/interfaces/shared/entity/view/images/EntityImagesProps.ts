// Types
import {
  EntityPositionType,
  EntityViewType,
  SpecialEntityRedux,
} from "@/core/types";
import { SpecialEntityType } from "@researchmanager/shared/types";

export interface EntityImagesProps {
  specialEntity: SpecialEntityRedux;
  specialEntityType: SpecialEntityType;

  viewType: EntityViewType;

  darkMode: boolean;
  position: EntityPositionType;

  isCurrentView: boolean;

  showImages: boolean;
  setShowImages: (show: boolean) => void;
}
