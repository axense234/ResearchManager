"use client";
// Interfaces
import { FC, useState } from "react";
import { ResearchActivityImagesOverlayContentProps } from "@/core/interfaces";
// SCSS
import overlayContentStyles from "@/scss/components/shared/overlay/entity/images/content/ResearchActivityImagesOverlayContent.module.scss";
// Components
import EntityImageOverlay from "../EntityImageOverlay";
import EntityImagesOverlay from "../EntityImagesOverlay";
import EntityImagesOverlayItem from "../EntityImagesOverlayItem";

const ResearchActivityImagesOverlayContent: FC<
  ResearchActivityImagesOverlayContentProps
> = ({
  currentImagePayload,
  currentImagesPayload,
  researchPhasesImages,
  currentResearchPhaseName,
  setCurrentResearchPhaseName,
  setCurrentImageSrc,
  showImageOverlay,
  setShowImageOverlay,
}) => {
  const [showImagesOverlay, setShowImagesOverlay] = useState<boolean>(false);

  return (
    <div className={overlayContentStyles.contentContainer}>
      <EntityImageOverlay
        showOverlay={showImageOverlay}
        closeOverlayFunction={() => setShowImageOverlay(false)}
        imagePayload={currentImagePayload}
      />
      <EntityImagesOverlay
        closeOverlayFunction={() => setShowImagesOverlay(false)}
        showOverlay={showImagesOverlay}
        entityName={currentResearchPhaseName}
        specialEntityType="researchPhase"
        entityImages={currentImagesPayload}
      />
      <ul className={overlayContentStyles.contentContainerItems}>
        {researchPhasesImages.map((phaseImages) => {
          return (
            <li key={phaseImages.entityName}>
              <EntityImagesOverlayItem
                itemEntityType="researchPhase"
                itemName={phaseImages.entityName}
                itemImages={phaseImages.imagesSrc}
                itemId={phaseImages.entityId}
                onItemClickFunction={() => {
                  setCurrentResearchPhaseName(phaseImages.entityName);
                  setShowImagesOverlay(true);
                }}
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

export default ResearchActivityImagesOverlayContent;
