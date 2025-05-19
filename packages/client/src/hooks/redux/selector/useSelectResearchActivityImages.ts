// Types
import { EntityContainerType, EntityImagePayloadType } from "@/core/types";
// Hooks
import { useAppSelector } from "../redux";
import {
  selectResearchPhasesByResearchActivityId,
  selectResearchPhasesExamples,
} from "@/redux/slices/research/phase";
import {
  selectAllResearchLogs,
  selectResearchLogsExamples,
} from "@/redux/slices/research/log";
import {
  selectResearchActivityById,
  selectResearchActivityExampleById,
} from "@/redux/slices/research/activity";

export const useSelectResearchActivityImages = (
  researchActivityId: string,
  viewType: EntityContainerType,
): EntityImagePayloadType[] => {
  const researchPhasesExamples = useAppSelector(
    selectResearchPhasesExamples,
  ).filter((example) => example.researchActivityId === researchActivityId);
  const researchPhases = useAppSelector((state) =>
    selectResearchPhasesByResearchActivityId(state, researchActivityId),
  );

  const usedResearchPhases =
    viewType === "example" ? researchPhasesExamples : researchPhases;
  const usedResearchPhasesIds = usedResearchPhases.map((rp) => rp.id);

  const researchLogsExamples = useAppSelector(
    selectResearchLogsExamples,
  ).filter((example) =>
    usedResearchPhasesIds.includes(example?.researchPhaseId),
  );
  const researchLogs = useAppSelector(selectAllResearchLogs).filter((log) =>
    usedResearchPhasesIds.includes(log.researchPhaseId),
  );

  const usedResearchLogs =
    viewType === "example" ? researchLogsExamples : researchLogs;

  const researchActivityExample = useAppSelector((state) =>
    selectResearchActivityExampleById(state, researchActivityId),
  );
  const researchActivity = useAppSelector((state) =>
    selectResearchActivityById(state, researchActivityId),
  );

  const usedResearchActivity =
    viewType === "example" ? researchActivityExample : researchActivity;

  const researchPhaseLogsImages = usedResearchLogs
    .map((log) => {
      return log.imagesSrc.map((image) => {
        return {
          src: image,
          researchLogId: log.id,
          researchLogName: log.name,
          researchPhaseId: log.researchPhaseId,
          researchPhaseName: usedResearchPhases?.find(
            (researchPhase) => researchPhase.id === log.researchPhaseId,
          ).name,
        } as EntityImagePayloadType;
      });
    })
    .flat();

  const researchActivityImages = researchPhaseLogsImages;

  return researchActivityImages;
};
