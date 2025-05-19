// Types
import { EntityContainerType, EntityImagePayloadType } from "@/core/types";
// Hooks
import { useAppSelector } from "../redux";
import {
  selectResearchLogsByResearchPhaseId,
  selectResearchLogsExamples,
} from "@/redux/slices/research/log";
import {
  selectResearchPhaseById,
  selectResearchPhasesExamples,
} from "@/redux/slices/research/phase";

export const useSelectResearchPhaseImages = (
  researchPhaseId: string,
  viewType: EntityContainerType,
): EntityImagePayloadType[] => {
  const researchLogsExamples = useAppSelector(
    selectResearchLogsExamples,
  ).filter(
    (researchLogExample) =>
      researchLogExample.researchPhaseId === researchPhaseId,
  );
  const researchLogs = useAppSelector((state) =>
    selectResearchLogsByResearchPhaseId(state, researchPhaseId),
  );

  const usedResearchLogs =
    viewType === "example" ? researchLogsExamples : researchLogs;

  const researchPhaseExample = useAppSelector(
    selectResearchPhasesExamples,
  ).find((example) => example.id === researchPhaseId);
  const researchPhase = useAppSelector((state) =>
    selectResearchPhaseById(state, researchPhaseId),
  );

  const usedResearchPhase =
    viewType === "example" ? researchPhaseExample : researchPhase;

  const researchPhaseLogsImages = usedResearchLogs
    .map((log) => {
      return log?.imagesSrc.map((image) => {
        return {
          src: image,
          researchLogId: log.id,
          researchLogName: log.name,
          researchPhaseId: researchPhaseId,
          researchPhaseName: usedResearchPhase?.name,
        } as EntityImagePayloadType;
      });
    })
    .flat();

  const researchPhaseImages = researchPhaseLogsImages;

  return researchPhaseImages;
};
