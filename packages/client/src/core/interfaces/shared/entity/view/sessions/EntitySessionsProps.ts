// Types
import {
  EntityPositionType,
  ResearchActivityRedux,
  ResearchPhaseRedux,
} from "@/core/types";

export interface EntitySessionsProps {
  entityType: "researchActivity" | "researchPhase";
  entity: ResearchActivityRedux | ResearchPhaseRedux;
  darkMode: boolean;
  position: EntityPositionType;
}
