// Types
import { EntityType } from "@researchmanager/shared/types";
// Redux
import { useAppDispatch, useAppSelector } from "./redux";
import {
  closeDeleteEntityOverlay,
  setCurrentActivityLogSubject,
} from "@/redux/slices/general/slice";
import {
  updateResearchActivity,
  deleteResearchActivity,
} from "@/redux/slices/research/activity/thunks";
import {
  updateResearchPhase,
  deleteResearchPhase,
  selectNumberOfUnarchivedResearchPhases,
  setCurrentResearchPhaseIndex,
} from "@/redux/slices/research/phase";
import {
  selectResearchActivitiesCustom,
  setCurrentResearchActivityIndex,
} from "@/redux/slices/research/activity";

export const useDetermineDeleteEntityOverlayFunctions = (
  entityType: EntityType,
  entityId: string,
) => {
  const dispatch = useAppDispatch();

  let onArchiveFunctionUsed: () => void;
  let onPurgeFunctionUsed: () => void;

  const numberOfResearchActivities = useAppSelector((state) =>
    selectResearchActivitiesCustom(state, { sorted: true, unarchived: true }),
  ).length;

  const numberOfResearchPhases = useAppSelector(
    selectNumberOfUnarchivedResearchPhases,
  );

  switch (entityType) {
    case "researchActivity":
      onArchiveFunctionUsed = () => {
        dispatch(
          updateResearchActivity({
            dto: { archived: true },
            researchActivityId: entityId,
          }),
        );
        dispatch(closeDeleteEntityOverlay());
        dispatch(setCurrentActivityLogSubject("ARCHIVE"));
        dispatch(
          setCurrentResearchActivityIndex(numberOfResearchActivities - 1),
        );
      };
      onPurgeFunctionUsed = () => {
        dispatch(deleteResearchActivity(entityId));
        dispatch(closeDeleteEntityOverlay());
        dispatch(setCurrentActivityLogSubject("PURGE"));
        dispatch(
          setCurrentResearchActivityIndex(numberOfResearchActivities - 1),
        );
      };
      break;
    case "researchPhase":
      onArchiveFunctionUsed = () => {
        dispatch(
          updateResearchPhase({
            dto: { archived: true },
            researchPhaseId: entityId,
          }),
        );
        dispatch(closeDeleteEntityOverlay());
        dispatch(setCurrentActivityLogSubject("ARCHIVE"));
        dispatch(setCurrentResearchPhaseIndex(numberOfResearchPhases - 1));
      };
      onPurgeFunctionUsed = () => {
        dispatch(deleteResearchPhase(entityId));
        dispatch(closeDeleteEntityOverlay());
        dispatch(setCurrentActivityLogSubject("PURGE"));
        dispatch(setCurrentResearchPhaseIndex(numberOfResearchPhases - 1));
      };
      break;
    default:
      throw new Error("invalid Entity Type.");
  }

  return { onArchiveFunctionUsed, onPurgeFunctionUsed };
};
