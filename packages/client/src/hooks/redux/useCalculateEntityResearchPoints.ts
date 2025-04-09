// Types
import {
  EntityContainerType,
  EntityRedux,
  ResearchActivityRedux,
  ResearchPhaseRedux,
} from "@/core/types";
// Hooks
import { useCalculateResearchPhaseResearchPoints } from "./useCalculateResearchPhaseResearchPoints";
import { useCalculateResearchActivityResearchPoints } from "./useCalculateResearchActivityResearchPoints";

export const useCalculateEntityResearchPoints = (
  entity: EntityRedux,
  specialEntityType: "researchActivity" | "researchPhase",
  viewType: EntityContainerType,
) => {
  const researchPhase = entity as ResearchPhaseRedux;
  const researchActivity = entity as ResearchActivityRedux;

  let researchPoints = 0;

  switch (specialEntityType) {
    case "researchPhase":
      researchPoints = useCalculateResearchPhaseResearchPoints(
        researchPhase,
        viewType,
      );
      return researchPoints;
    case "researchActivity":
      researchPoints = useCalculateResearchActivityResearchPoints(
        researchActivity,
        viewType,
      );
      return researchPoints;
    default:
      throw new Error(
        "Entity has nothing to do with Research Points and/or doesn't exist.",
      );
  }
};
