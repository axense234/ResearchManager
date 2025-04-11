// Types
import {
  EntityViewType,
  ResearchActivityRedux,
  ResearchPhaseRedux,
} from "@/core/types";

export interface EntityDetailsProps {
  specialEntity: ResearchActivityRedux | ResearchPhaseRedux;
  specialEntityType: "researchActivity" | "researchPhase";
  viewType: EntityViewType;
}
