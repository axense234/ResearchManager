// React
import { FC } from "react";
// Interfaces
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
  currentResearchPhasesImages,
  researchPhasesImages,
  showImageOverlay,
  setShowImageOverlay,
  onImageClickFunction,
  onSectionTitleClickFunction,
  viewType,
}) => {
  return (
    <div className={overlayContentStyles.contentContainer}>
      <EntityImageOverlay
        optionsType={viewType}
        showOverlay={showImageOverlay}
        closeOverlayFunction={() => setShowImageOverlay(false)}
        imagesPayload={currentResearchPhasesImages}
      />
      <EntityImagesOverlay specialEntityType="researchPhase" />
      <ul className={overlayContentStyles.contentContainerItems}>
        {researchPhasesImages.map((phaseImages) => {
          return (
            <li key={phaseImages.entityName}>
              <EntityImagesOverlayItem
                itemEntityType="researchPhase"
                itemName={phaseImages.entityName}
                itemImages={phaseImages.imagesSrc}
                itemId={phaseImages.entityId}
                onItemClickFunction={onSectionTitleClickFunction}
                onImageClickFunction={onImageClickFunction}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResearchActivityImagesOverlayContent;
