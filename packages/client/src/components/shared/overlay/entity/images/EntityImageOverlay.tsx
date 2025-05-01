// Interfaces
import { FC, useRef } from "react";
import { EntityImageOverlayProps } from "@/core/interfaces";
// Components
import CloseInterfaceButton from "../../../general/CloseInterfaceButton";
import EntityImageOverlayOptions from "./EntityImageOverlayOptions";
// SCSS
import entityImageOverlayStyles from "@/scss/components/shared/overlay/entity/images/EntityImageOverlay.module.scss";
// Next
import Image from "next/image";
// Hooks
import { useOverlayTransition } from "@/hooks";

const EntityImageOverlay: FC<EntityImageOverlayProps> = ({
  showOverlay,
  closeOverlayFunction,
  imagePayload,
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
      {showOverlay && (
        <Image alt="Image" src={imagePayload.src} width={1520} height={780} />
      )}
      <EntityImageOverlayOptions />
    </div>
  );
};

export default EntityImageOverlay;
