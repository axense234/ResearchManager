// Interfaces
import { FC, useRef } from "react";
import { EntityImagesOverlayProps } from "@/core/interfaces";
// SCSS
import entityImagesOverlayStyles from "@/scss/components/shared/overlay/entity/images/EntityImagesOverlay.module.scss";
// Hooks
import { useOverlayTransition } from "@/hooks";
// Components
import CloseInterfaceButton from "../../../general/CloseInterfaceButton";
import EntityImagesOverlayContent from "./content/EntityImagesOverlayContent";
import EntityImagesOverlayTitle from "./EntityImagesOverlayTitle";

const EntityImagesOverlay: FC<EntityImagesOverlayProps> = ({
  entityImages,
  closeOverlayFunction,
  showOverlay,
  specialEntityType,
  entityName,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useOverlayTransition(showOverlay, overlayRef);

  return (
    <div
      className={entityImagesOverlayStyles.entityImagesOverlayContainer}
      ref={overlayRef}
    >
      <CloseInterfaceButton
        closeInterfaceFunction={closeOverlayFunction}
        color="pastelRed"
        title="Close Overlay"
        size="large"
      />
      <EntityImagesOverlayTitle
        entityName={entityName}
        specialEntityType={specialEntityType}
      />
      <EntityImagesOverlayContent
        specialEntityType={specialEntityType}
        entityImages={entityImages || []}
      />
    </div>
  );
};

export default EntityImagesOverlay;
