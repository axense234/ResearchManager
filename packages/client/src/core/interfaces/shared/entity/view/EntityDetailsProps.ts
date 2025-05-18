// Types
import {
  EntityPositionType,
  EntityViewType,
  ResearchActivityRedux,
  ResearchPhaseRedux,
} from "@/core/types";

export interface EntityDetailsProps {
  specialEntity: ResearchActivityRedux | ResearchPhaseRedux;
  specialEntityType: "researchActivity" | "researchPhase";

  viewType: EntityViewType;

  darkMode: boolean;
  position: EntityPositionType;

  isCurrentView: boolean;

  showImages: boolean;
  showGraph: boolean;
  setShowImages: (show: boolean) => void;
  setShowGraph: (show: boolean) => void;
}
