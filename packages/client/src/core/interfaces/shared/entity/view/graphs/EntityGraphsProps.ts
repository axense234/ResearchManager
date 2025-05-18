// Types
import {
  EntityPositionType,
  ResearchActivityRedux,
  ResearchPhaseRedux,
} from "@/core/types";

export interface EntityGraphsProps {
  specialEntity: ResearchActivityRedux | ResearchPhaseRedux;

  darkMode: boolean;
  position: EntityPositionType;

  showGraph: boolean;
  setShowGraph: (show: boolean) => void;
}
