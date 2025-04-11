// Types
import {
  EntityContainerType,
  EntityImagePayloadType,
  ResearchActivityRedux,
  ResearchLogRedux,
  ResearchPhaseRedux,
} from "@/core/types";
// Hooks
import { useSelectEntitiesByIds } from "./useSelectEntitiesByIds";

export const useSelectResearchActivityImages = (
  researchActivity: ResearchActivityRedux,
  viewType: EntityContainerType,
): EntityImagePayloadType[] => {
  const researchActivityPhases = useSelectEntitiesByIds(
    viewType,
    "researchPhase",
    researchActivity.researchPhasesIds,
  ) as ResearchPhaseRedux[];

  const researchPhasesLogsIds = researchActivityPhases
    .map((phase) => phase.researchLogsIds)
    .flat();

  const researchPhaseLogs = useSelectEntitiesByIds(
    viewType,
    "researchLog",
    researchPhasesLogsIds || [],
  ) as ResearchLogRedux[];

  const researchPhaseLogsImages = researchPhaseLogs
    .map((log) => {
      return log.imagesSrc.map((image) => {
        return {
          src: image,
          researchLogId: log.id,
          researchLogName: log.name,
          researchPhaseId: log.researchPhaseId,
          researchPhaseName: researchActivityPhases.find(
            (actvityPhase) => actvityPhase.id === log.researchPhaseId,
          ).name,
        };
      }) as EntityImagePayloadType[];
    })
    .flat();

  const researchActivityImages = researchPhaseLogsImages;

  return researchActivityImages;
};
