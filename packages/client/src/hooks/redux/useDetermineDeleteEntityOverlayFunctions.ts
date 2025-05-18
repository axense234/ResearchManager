// Types
import { EntityType } from "@researchmanager/shared/types";
// Redux
import { useAppDispatch, useAppSelector } from "./redux";
import {
  closeDeleteEntityOverlay,
  closeUpsertEntityOverlay,
  closeViewEntityOverlay,
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
import {
  deleteResearchSession,
  updateResearchSession,
} from "@/redux/slices/research/session";

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
    case "researchSession":
      onArchiveFunctionUsed = () => {
        dispatch(
          updateResearchSession({
            dto: { archived: true },
            researchSessionId: entityId,
          }),
        );
        dispatch(closeDeleteEntityOverlay());
        dispatch(setCurrentActivityLogSubject("ARCHIVE"));
        dispatch(closeViewEntityOverlay());
        dispatch(closeUpsertEntityOverlay());
      };
      onPurgeFunctionUsed = () => {
        dispatch(deleteResearchSession(entityId));
        dispatch(closeDeleteEntityOverlay());
        dispatch(setCurrentActivityLogSubject("PURGE"));
        dispatch(closeViewEntityOverlay());
        dispatch(closeUpsertEntityOverlay());
      };
      break;
    default:
      throw new Error("invalid Entity Type.");
  }

  return { onArchiveFunctionUsed, onPurgeFunctionUsed };
};
