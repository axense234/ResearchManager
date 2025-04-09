// Types
import {
  EntityContainerType,
  ResearchLogRedux,
  ResearchPhaseRedux,
} from "@/core/types";
// Hooks
import { useSelectEntitiesByIds } from "./useSelectEntitiesByIds";

export const useCalculateResearchPhaseResearchPoints = (
  researchPhase: ResearchPhaseRedux,
  viewType: EntityContainerType,
) => {
  const researchPhaseLogs = useSelectEntitiesByIds(
    viewType,
    "researchLog",
    researchPhase.researchLogsIds || [],
  ) as ResearchLogRedux[];

  const researchPhaseLogsResearchPoints = researchPhaseLogs.reduce(
    (total, log) => total + log.researchPoints,
    0,
  );

  const researchPhaseResearchPoints = researchPhaseLogsResearchPoints;
  return researchPhaseResearchPoints;
};
