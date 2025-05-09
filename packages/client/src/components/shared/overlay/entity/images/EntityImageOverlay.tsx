// React
import { FC, useRef } from "react";
// Interfaces
import { EntityImageOverlayProps } from "@/core/interfaces";
// Components
import CloseInterfaceButton from "../../../general/CloseInterfaceButton";
import EntityImageOverlayOptions from "./EntityImageOverlayOptions";
// SCSS
import entityImageOverlayStyles from "@/scss/components/shared/overlay/entity/images/EntityImageOverlay.module.scss";
// Next
import Image from "next/image";
// Hooks
import { useAppSelector, useOverlayTransition } from "@/hooks";
// Helpers
import { determineContentPosition } from "@/helpers";
// Redux
import { selectCurrentEntityOverlayImageCarouselId } from "@/redux/slices/general";

const EntityImageOverlay: FC<EntityImageOverlayProps> = ({
  showOverlay,
  closeOverlayFunction,
  imagesPayload,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const currentEntityImageOverlayIndex = useAppSelector(
    selectCurrentEntityOverlayImageCarouselId,
  );

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
        <div className={entityImageOverlayStyles.entityImageOverlayImages}>
          {imagesPayload?.imagesSrc?.map((imagePayload, imagePayloadIndex) => {
            const position = determineContentPosition(
              imagePayloadIndex + 1,
              currentEntityImageOverlayIndex,
              imagesPayload.imagesSrc.length,
            );

            return (
              <Image
                alt={imagesPayload?.entityName}
                title={imagesPayload?.entityName}
                aria-label={imagesPayload?.entityName}
                src={imagePayload}
                width={1520}
                height={780}
                key={imagePayload}
                className={position}
              />
            );
          })}
        </div>
      )}
      <EntityImageOverlayOptions />
    </div>
  );
};

export default EntityImageOverlay;
