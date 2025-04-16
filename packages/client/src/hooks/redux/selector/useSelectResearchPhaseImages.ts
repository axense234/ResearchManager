// Types
import {
  EntityContainerType,
  EntityImagePayloadType,
  ResearchLogRedux,
  ResearchPhaseRedux,
} from "@/core/types";
// Hooks
import { useSelectEntitiesByIds } from "./useSelectEntitiesByIds";

export const useSelectResearchPhaseImages = (
  researchPhase: ResearchPhaseRedux,
  viewType: EntityContainerType,
): EntityImagePayloadType[] => {
  const researchPhaseLogs = useSelectEntitiesByIds(
    viewType,
    "researchLog",
    researchPhase?.researchLogsIds || [],
  ) as ResearchLogRedux[];

  const researchPhaseLogsImages = researchPhaseLogs
    .map((log) => {
      return log.imagesSrc.map((image) => {
        return {
          src: image,
          researchLogId: log.id,
          researchLogName: log.name,
          researchPhaseId: researchPhase.id,
          researchPhaseName: researchPhase.name,
        };
      }) as EntityImagePayloadType[];
    })
    .flat();

  const researchPhaseImages = researchPhaseLogsImages;

  return researchPhaseImages;
};
