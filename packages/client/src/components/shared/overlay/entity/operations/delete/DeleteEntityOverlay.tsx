// React
import { FC, useRef } from "react";
// Components
import CloseInterfaceButton from "@/components/shared/general/CloseInterfaceButton";
import DeleteEntityOverlayInfo from "./DeleteEntityOverlayInfo";
import DeleteEntityOverlayOptions from "./DeleteEntityOverlayOptions";
// SCSS
import deleteEntityOverlayStyles from "@/scss/components/shared/overlay/entity/operations/delete/DeleteEntityOverlay.module.scss";
// Redux
import {
  useAppDispatch,
  useAppSelector,
  useDetermineDeleteEntityOverlayFunctions,
  useOverlayTransition,
} from "@/hooks";
import { selectDeleteEntityOverlay } from "@/redux/slices/general";
import { closeDeleteEntityOverlay } from "@/redux/slices/general/slice";

const DeleteEntityOverlay: FC = () => {
  const dispatch = useAppDispatch();
  const overlayRef = useRef<HTMLDivElement>(null);

  const deleteEntityOverlay = useAppSelector(selectDeleteEntityOverlay);

  const { onArchiveFunctionUsed, onPurgeFunctionUsed } =
    useDetermineDeleteEntityOverlayFunctions(
      deleteEntityOverlay.entityType,
      deleteEntityOverlay.entityId,
    );

  useOverlayTransition(deleteEntityOverlay.showOverlay, overlayRef);

  return (
    <div
      className={deleteEntityOverlayStyles.overlayContainer}
      ref={overlayRef}
    >
      <CloseInterfaceButton
        closeInterfaceFunction={() => dispatch(closeDeleteEntityOverlay())}
        color="pastelRed"
        title="Close Overlay"
        size="large"
      />
      <div className={deleteEntityOverlayStyles.overlayContent}>
        <DeleteEntityOverlayInfo entityType={deleteEntityOverlay.entityType} />
        <DeleteEntityOverlayOptions
          showOverlay={deleteEntityOverlay.showOverlay}
          entityType={deleteEntityOverlay.entityType}
          onCancelFunction={() => dispatch(closeDeleteEntityOverlay())}
          onArchiveFunction={onArchiveFunctionUsed}
          onPurgeFunction={onPurgeFunctionUsed}
        />
      </div>
    </div>
  );
};

export default DeleteEntityOverlay;
