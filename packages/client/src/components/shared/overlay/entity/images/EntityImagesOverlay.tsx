// Interfaces
import { FC, useRef } from "react";
import { EntityImagesOverlayProps } from "@/core/interfaces";
// SCSS
import entityImagesOverlayStyles from "@/scss/components/shared/overlay/entity/images/EntityImagesOverlay.module.scss";
// Hooks
import { useOverlayTransition } from "@/hooks";
// Components
import ExitOverlayButton from "../../ExitOverlayButton";
import EntityImagesOverlayContent from "./EntityImagesOverlayContent";

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
      <ExitOverlayButton closeOverlayFunction={closeOverlayFunction} />
      <h4
        style={{
          marginTop: specialEntityType === "researchPhase" ? "3rem" : "0",
        }}
      >
        {entityName}
      </h4>
      <EntityImagesOverlayContent
        specialEntityType={specialEntityType}
        entityImages={entityImages}
      />
    </div>
  );
};

export default EntityImagesOverlay;
