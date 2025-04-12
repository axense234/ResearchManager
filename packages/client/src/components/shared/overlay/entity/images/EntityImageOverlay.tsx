// Interfaces
import { FC, useRef } from "react";
import { EntityImageOverlayProps } from "@/core/interfaces";
// Components
import ExitOverlayButton from "../../ExitOverlayButton";
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
      <ExitOverlayButton closeOverlayFunction={closeOverlayFunction} />
      {showOverlay && (
        <Image alt="Image" src={imagePayload.src} width={1520} height={780} />
      )}
      <EntityImageOverlayOptions />
    </div>
  );
};

export default EntityImageOverlay;
