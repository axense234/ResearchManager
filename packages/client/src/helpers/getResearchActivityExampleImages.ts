// Types
import {
  ResearchActivityRedux,
  ResearchPhaseRedux,
  ResearchLogRedux,
} from "@/core/types";

export const getResearchActivityExampleImages = (
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

  const researchActivityExampleImages =
    researchActivityExampleResearchLogs[0]?.imagesSrc;

  return researchActivityExampleImages;
};
