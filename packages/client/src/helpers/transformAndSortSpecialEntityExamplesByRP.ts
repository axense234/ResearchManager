// Types
import { ResearchActivityRedux, ResearchPhaseRedux } from "@/core/types";
import { SpecialEntityType } from "@researchmanager/shared/types";
// Mock Data
import {
  researchPhasesMockData,
  researchLogsMockData,
  researchActivitiesMockData,
} from "@researchmanager/shared/mock";
// Helpers
import { calculateSpecialEntityRP } from "./calculateSpecialEntityRP";
import { transformEntityIntoEntityRedux } from "./transformEntityIntoEntityRedux";

export const transformAndSortSpecialEntityExamplesByRP = (
  specialEntityType: SpecialEntityType,
) => {
  if (specialEntityType === "researchActivity") {
    return researchActivitiesMockData
      .map((ra) => {
        return transformEntityIntoEntityRedux(
          ra,
          "researchActivity",
        ) as ResearchActivityRedux;
      })
      .sort((firstResearchActivity, secondResearchActivity) => {
        const firstResearchActivityPhases = researchPhasesMockData.filter(
          (researchPhase) =>
            firstResearchActivity.researchPhasesIds.includes(researchPhase.id),
        );
        const secondResearchActivityPhases = researchPhasesMockData.filter(
          (researchPhase) =>
            secondResearchActivity.researchPhasesIds.includes(researchPhase.id),
        );

        const firstResearchActivityLogs = firstResearchActivityPhases
          .map((activityPhase) => activityPhase.researchLogs)
          .flat();
        const secondResearchActivityLogs = secondResearchActivityPhases
          .map((activityPhase) => activityPhase.researchLogs)
          .flat();

        const firstResearchActivityRP = calculateSpecialEntityRP(
          firstResearchActivityLogs,
        );
        const secondResearchActivityRP = calculateSpecialEntityRP(
          secondResearchActivityLogs,
        );

        return secondResearchActivityRP - firstResearchActivityRP;
      });
  } else if (specialEntityType === "researchPhase") {
    return researchPhasesMockData
      .map((rp) => {
        return transformEntityIntoEntityRedux(
          rp,
          "researchPhase",
        ) as ResearchPhaseRedux;
      })
      .sort((firstResearchPhase, secondResearchPhase) => {
        const firstResearchPhaseLogs = researchLogsMockData.filter((log) =>
          firstResearchPhase.researchLogsIds.includes(log.id),
        );
        const secondResearchPhaseLogs = researchLogsMockData.filter((log) =>
          secondResearchPhase.researchLogsIds.includes(log.id),
        );

        const firstResearchPhaseRP = calculateSpecialEntityRP(
          firstResearchPhaseLogs,
        );
        const secondResearchPhaseRP = calculateSpecialEntityRP(
          secondResearchPhaseLogs,
        );

        return secondResearchPhaseRP - firstResearchPhaseRP;
      });
  }
};
