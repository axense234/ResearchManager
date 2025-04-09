// Types
import {
  EntityContainerType,
  ResearchActivityRedux,
  ResearchLogRedux,
  ResearchPhaseRedux,
} from "@/core/types";
// Hooks
import { useSelectEntitiesByIds } from "./useSelectEntitiesByIds";

export const useCalculateResearchActivityResearchPoints = (
  researchActivity: ResearchActivityRedux,
  viewType: EntityContainerType,
) => {
  console.log("full ra:", JSON.parse(JSON.stringify(researchActivity)));

  const researchActivityPhases = useSelectEntitiesByIds(
    viewType,
    "researchPhase",
    researchActivity.researchPhasesIds,
  ) as ResearchPhaseRedux[];

  console.log("full rap:", JSON.parse(JSON.stringify(researchActivityPhases)));

  const researchPhasesLogsIds = researchActivityPhases
    .map((phase) => phase.researchLogsIds)
    .flat();

  const researchPhaseLogs = useSelectEntitiesByIds(
    viewType,
    "researchLog",
    researchPhasesLogsIds || [],
  ) as ResearchLogRedux[];

  const researchPhaseLogsResearchPoints = researchPhaseLogs.reduce(
    (total, log) => total + log.researchPoints,
    0,
  );

  const researchPhaseResearchPoints = researchPhaseLogsResearchPoints;

  return researchPhaseResearchPoints;
};
