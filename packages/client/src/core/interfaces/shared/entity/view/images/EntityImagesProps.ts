// Types
import {
  EntityViewType,
  ResearchActivityRedux,
  ResearchPhaseRedux,
} from "@/core/types";

export interface EntityImagesProps {
  specialEntity: ResearchActivityRedux | ResearchPhaseRedux;
  specialEntityType: "researchActivity" | "researchPhase";
  viewType: EntityViewType;
}
