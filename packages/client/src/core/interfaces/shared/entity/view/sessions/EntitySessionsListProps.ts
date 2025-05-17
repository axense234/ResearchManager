// Types
import { ResearchActivityRedux, ResearchPhaseRedux } from "@/core/types";

export interface EntitySessionsListProps {
  entity: ResearchActivityRedux | ResearchPhaseRedux;
  entityType: "researchActivity" | "researchPhase";
  darkMode: boolean;
  showSessions: boolean;
}
