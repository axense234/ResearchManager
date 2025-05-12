// Types
import { EntityType } from "@researchmanager/shared/types";
// Redux
import { useAppDispatch } from "./redux";
import { closeDeleteEntityOverlay } from "@/redux/slices/general/slice";
import {
  updateResearchActivity,
  deleteResearchActivity,
} from "@/redux/slices/research/activity/thunks";
import {
  updateResearchPhase,
  deleteResearchPhase,
} from "@/redux/slices/research/phase";

export const useDetermineDeleteEntityOverlayFunctions = (
  entityType: EntityType,
  entityId: string,
) => {
  const dispatch = useAppDispatch();

  let onArchiveFunctionUsed: () => void;
  let onPurgeFunctionUsed: () => void;

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
      };
      onPurgeFunctionUsed = () => {
        dispatch(deleteResearchActivity(entityId));
        dispatch(closeDeleteEntityOverlay());
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
      };
      onPurgeFunctionUsed = () => {
        dispatch(deleteResearchPhase(entityId));
        dispatch(closeDeleteEntityOverlay());
      };
      break;
    default:
      throw new Error("invalid Entity Type.");
  }

  return { onArchiveFunctionUsed, onPurgeFunctionUsed };
};
