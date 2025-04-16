"use client";
// Interfaces
import { FC } from "react";
import { ResearchPhaseImagesOverlayContentProps } from "@/core/interfaces";
// SCSS
import overlayContentStyles from "@/scss/components/shared/overlay/entity/images/content/ResearchPhaseImagesOverlayContent.module.scss";
// Components
import EntityImageOverlay from "../EntityImageOverlay";
import EntityImagesOverlayItem from "../EntityImagesOverlayItem";

const ResearchPhaseImagesOverlayContent: FC<
  ResearchPhaseImagesOverlayContentProps
> = ({
  researchLogsImages,
  currentImagePayload,
  setCurrentImageSrc,
  showImageOverlay,
  setShowImageOverlay,
}) => {
  return (
    <div className={overlayContentStyles.contentContainer}>
      <EntityImageOverlay
        showOverlay={showImageOverlay}
        closeOverlayFunction={() => setShowImageOverlay(false)}
        imagePayload={currentImagePayload}
      />
      <ul className={overlayContentStyles.contentContainerItems}>
        {researchLogsImages.map((logImages, index) => {
          return (
            <li key={logImages.entityName}>
              <EntityImagesOverlayItem
                itemEntityType="researchLog"
                itemName={logImages.entityName}
                itemImages={logImages.imagesSrc}
                itemId={logImages.entityId}
                onImageClickFunction={(imageSrc) => {
                  setCurrentImageSrc(imageSrc);
                  setShowImageOverlay(true);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResearchPhaseImagesOverlayContent;
