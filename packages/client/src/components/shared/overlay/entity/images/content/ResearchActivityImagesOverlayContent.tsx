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
  viewType,
  setShowImageOverlay,
  onImageClickFunction,
  onSectionTitleClickFunction,
  onRemoveImageFunction,
}) => {
  return (
    <div className={overlayContentStyles.contentContainer}>
      <EntityImageOverlay
        optionsType={viewType}
        showOverlay={showImageOverlay}
        closeOverlayFunction={() => setShowImageOverlay(false)}
        imagesPayload={currentResearchPhasesImages}
        onRemoveImageFunction={onRemoveImageFunction}
      />
      <EntityImagesOverlay specialEntityType="researchPhase" />
      <ul className={overlayContentStyles.contentContainerItems}>
        {researchPhasesImages.map((phaseImages, index) => {
          return (
            <li key={index}>
              <EntityImagesOverlayItem
                itemEntityType="researchPhase"
                itemTitle={phaseImages.parentLabel}
                parentId={phaseImages.parentId}
                specialImages={phaseImages.specialImages}
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
