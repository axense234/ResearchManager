"use client";
// Interfaces
import { FC, useRef } from "react";
import { EntityImagesOverlayProps } from "@/core/interfaces";
// SCSS
import entityImagesOverlayStyles from "@/scss/components/shared/overlay/entity/images/EntityImagesOverlay.module.scss";
// Hooks
import { useOverlayTransition } from "@/hooks";
// Components
import EntityImagesOverlayList from "./EntityImagesOverlayList";
import EntityImagesOverlayOptions from "./EntityImagesOverlayOptions";

const EntityImagesOverlay: FC<EntityImagesOverlayProps> = ({
  imagesSrc,
  closeOverlayFunction,
  showOverlay,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useOverlayTransition(showOverlay, overlayRef);

  return (
    <div
      className={entityImagesOverlayStyles.entityImagesOverlayContainer}
      ref={overlayRef}
      onClick={closeOverlayFunction}
    >
      <EntityImagesOverlayList imagesSrc={imagesSrc} />
      <EntityImagesOverlayOptions />
    </div>
  );
};

export default EntityImagesOverlay;
