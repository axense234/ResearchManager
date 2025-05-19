// Types
import {
  EntityPositionType,
  ResearchActivityRedux,
  ResearchPhaseRedux,
} from "@/core/types";

export interface EntityLogsProps {
  entityType: "researchActivity" | "researchPhase";
  entity: ResearchActivityRedux | ResearchPhaseRedux;

  darkMode: boolean;
  position: EntityPositionType;

  showLogs: boolean;
  setShowLogs: (show: boolean) => void;
}
