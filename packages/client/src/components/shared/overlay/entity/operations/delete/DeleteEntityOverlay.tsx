// React
import { FC, useRef } from "react";
// Components
import CloseInterfaceButton from "@/components/shared/general/CloseInterfaceButton";
import DeleteEntityOverlayInfo from "./DeleteEntityOverlayInfo";
import DeleteEntityOverlayOptions from "./DeleteEntityOverlayOptions";
// SCSS
import deleteEntityOverlayStyles from "@/scss/components/shared/overlay/entity/operations/delete/DeleteEntityOverlay.module.scss";
// Redux
import { useAppDispatch, useAppSelector, useOverlayTransition } from "@/hooks";
import { selectDeleteEntityOverlay } from "@/redux/slices/general";
import { setDeleteEntityOverlay } from "@/redux/slices/general/slice";
import {
  deleteResearchActivity,
  updateResearchActivity,
} from "@/redux/slices/research/activity/thunks";

const DeleteEntityOverlay: FC = () => {
  const dispatch = useAppDispatch();
  const overlayRef = useRef<HTMLDivElement>(null);

  const entityOverlay = useAppSelector(selectDeleteEntityOverlay);

  const closeEntityOverlayFunction = () =>
    dispatch(setDeleteEntityOverlay({ ...entityOverlay, showOverlay: false }));

  let onArchiveFunctionUsed: () => void;
  let onPurgeFunctionUsed: () => void;

  switch (entityOverlay.entityType) {
    case "researchActivity":
      onArchiveFunctionUsed = () => {
        {
          dispatch(
            updateResearchActivity({
              dto: { archived: true },
              researchActivityId: entityOverlay.entityId,
            }),
          );
        }
        closeEntityOverlayFunction();
      };
      onPurgeFunctionUsed = () => {
        dispatch(deleteResearchActivity(entityOverlay.entityId));
        closeEntityOverlayFunction();
      };
      break;
    default:
      throw new Error("invalid Entity Type.");
  }

  useOverlayTransition(entityOverlay.showOverlay, overlayRef);

  return (
    <div
      className={deleteEntityOverlayStyles.overlayContainer}
      ref={overlayRef}
    >
      <CloseInterfaceButton
        closeInterfaceFunction={closeEntityOverlayFunction}
        color="pastelRed"
        title="Close Overlay"
        size="large"
      />
      <div className={deleteEntityOverlayStyles.overlayContent}>
        <DeleteEntityOverlayInfo />
        <DeleteEntityOverlayOptions
          showOverlay={entityOverlay.showOverlay}
          onCancelFunction={closeEntityOverlayFunction}
          onArchiveFunction={onArchiveFunctionUsed}
          onPurgeFunction={onPurgeFunctionUsed}
        />
      </div>
    </div>
  );
};

export default DeleteEntityOverlay;
