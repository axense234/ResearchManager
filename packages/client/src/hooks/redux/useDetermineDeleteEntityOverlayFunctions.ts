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
import {
  deleteResearchLog,
  updateResearchLog,
} from "@/redux/slices/research/log";
import { deleteTag, updateTag } from "@/redux/slices/tag/thunks";
import {
  selectCurrentTagIndex,
  selectNumberOfTags,
  setCurrentTagIndex,
} from "@/redux/slices/tag";

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

  const numberOfTags = useAppSelector(selectNumberOfTags);

  switch (entityType) {
    case "researchActivity":
      onArchiveFunctionUsed = () => {
        dispatch(setCurrentActivityLogSubject("ARCHIVE"));
        dispatch(
          updateResearchActivity({
            dto: { archived: true },
            researchActivityId: entityId,
          }),
        );
        dispatch(closeDeleteEntityOverlay());
        dispatch(
          setCurrentResearchActivityIndex(numberOfResearchActivities - 1),
        );
      };
      onPurgeFunctionUsed = () => {
        dispatch(setCurrentActivityLogSubject("PURGE"));
        dispatch(deleteResearchActivity(entityId));
        dispatch(closeDeleteEntityOverlay());
        dispatch(
          setCurrentResearchActivityIndex(numberOfResearchActivities - 1),
        );
      };
      break;
    case "researchPhase":
      onArchiveFunctionUsed = () => {
        dispatch(setCurrentActivityLogSubject("ARCHIVE"));
        dispatch(
          updateResearchPhase({
            dto: { archived: true },
            researchPhaseId: entityId,
          }),
        );
        dispatch(closeDeleteEntityOverlay());
        dispatch(setCurrentResearchPhaseIndex(numberOfResearchPhases - 1));
      };
      onPurgeFunctionUsed = () => {
        dispatch(setCurrentActivityLogSubject("PURGE"));
        dispatch(deleteResearchPhase(entityId));
        dispatch(closeDeleteEntityOverlay());
        dispatch(setCurrentResearchPhaseIndex(numberOfResearchPhases - 1));
      };
      break;
    case "researchSession":
      onArchiveFunctionUsed = () => {
        dispatch(setCurrentActivityLogSubject("ARCHIVE"));
        dispatch(
          updateResearchSession({
            dto: { archived: true },
            researchSessionId: entityId,
          }),
        );
        dispatch(closeDeleteEntityOverlay());
        dispatch(closeViewEntityOverlay());
        dispatch(closeUpsertEntityOverlay());
      };
      onPurgeFunctionUsed = () => {
        dispatch(setCurrentActivityLogSubject("PURGE"));
        dispatch(deleteResearchSession(entityId));
        dispatch(closeDeleteEntityOverlay());
        dispatch(closeViewEntityOverlay());
        dispatch(closeUpsertEntityOverlay());
      };
      break;
    case "researchLog":
      onArchiveFunctionUsed = () => {
        dispatch(setCurrentActivityLogSubject("ARCHIVE"));
        dispatch(
          updateResearchLog({
            dto: { archived: true },
            researchLogId: entityId,
          }),
        );
        dispatch(closeDeleteEntityOverlay());
        dispatch(closeViewEntityOverlay());
        dispatch(closeUpsertEntityOverlay());
      };
      onPurgeFunctionUsed = () => {
        dispatch(setCurrentActivityLogSubject("PURGE"));
        dispatch(deleteResearchLog(entityId));
        dispatch(closeDeleteEntityOverlay());
        dispatch(closeViewEntityOverlay());
        dispatch(closeUpsertEntityOverlay());
      };
      break;
    case "tag":
      onArchiveFunctionUsed = () => {
        dispatch(setCurrentActivityLogSubject("ARCHIVE"));
        dispatch(updateTag({ dto: { archived: true }, tagId: entityId }));
        dispatch(closeDeleteEntityOverlay());
        dispatch(setCurrentTagIndex(numberOfTags - 1));
      };
      onPurgeFunctionUsed = () => {
        dispatch(setCurrentActivityLogSubject("PURGE"));
        dispatch(deleteTag(entityId));
        dispatch(closeDeleteEntityOverlay());
        dispatch(setCurrentTagIndex(numberOfTags - 1));
      };
      break;
    default:
      throw new Error("invalid Entity Type.");
  }

  return { onArchiveFunctionUsed, onPurgeFunctionUsed };
};
