// Types
import {
  ResearchActivityRedux,
  ResearchLogRedux,
  ResearchPhaseRedux,
} from "@/core/types";

export const calculateResearchActivityExampleResearchPoints = (
  researchActivity: ResearchActivityRedux,
  researchPhases: ResearchPhaseRedux[],
  researchLogs: ResearchLogRedux[],
) => {
  const researchActivityExampleResearchPhases = researchPhases.filter(
    (phase) => phase.researchActivityId === researchActivity.id,
  );

  const researchActivityExampleResearchLogs =
    researchActivityExampleResearchPhases
      .map((phase) => {
        return researchLogs.filter((log) => log.researchPhaseId === phase.id);
      })
      .flat();

  const researchPoints = researchActivityExampleResearchLogs.reduce(
    (total, log) => total + log.researchPoints,
    0,
  );

  return researchPoints;
};
