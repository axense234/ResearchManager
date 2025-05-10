// React
import { FC, useRef } from "react";
// Interfaces
import { EntityImageOverlayProps } from "@/core/interfaces";
// Components
import CloseInterfaceButton from "../../../general/CloseInterfaceButton";
import EntityImageOverlayContent from "./EntityImageOverlayContent";
// SCSS
import entityImageOverlayStyles from "@/scss/components/shared/overlay/entity/images/EntityImageOverlay.module.scss";
// Hooks
import { useOverlayTransition } from "@/hooks";

const EntityImageOverlay: FC<EntityImageOverlayProps> = ({
  showOverlay,
  closeOverlayFunction,
  imagesPayload,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useOverlayTransition(showOverlay, overlayRef);

  return (
    <div
      className={entityImageOverlayStyles.entityImageOverlayContainer}
      ref={overlayRef}
    >
      <CloseInterfaceButton
        closeInterfaceFunction={closeOverlayFunction}
        color="pastelRed"
        title="Close Overlay"
        size="large"
      />
      <EntityImageOverlayContent imagesPayload={imagesPayload} />
    </div>
  );
};

export default EntityImageOverlay;
