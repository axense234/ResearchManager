// React
import { FC } from "react";
// Interfaces
import { ResearchPhaseImagesOverlayContentProps } from "@/core/interfaces";
// SCSS
import overlayContentStyles from "@/scss/components/shared/overlay/entity/images/content/ResearchPhaseImagesOverlayContent.module.scss";
// Components
import EntityImageOverlay from "../EntityImageOverlay";
import EntityImagesOverlayItem from "../EntityImagesOverlayItem";

const ResearchPhaseImagesOverlayContent: FC<
  ResearchPhaseImagesOverlayContentProps
> = ({
  currentResearchLogsImages,
  researchLogsImages,
  showImageOverlay,
  setShowImageOverlay,
  onImageClickFunction,
  viewType,
  onRemoveImageFunction,
}) => {
  console.log(currentResearchLogsImages);
  return (
    <div className={overlayContentStyles.contentContainer}>
      <EntityImageOverlay
        optionsType={viewType}
        showOverlay={showImageOverlay}
        closeOverlayFunction={() => setShowImageOverlay(false)}
        imagesPayload={currentResearchLogsImages}
        onRemoveImageFunction={onRemoveImageFunction}
      />
      <ul className={overlayContentStyles.contentContainerItems}>
        {researchLogsImages.map((logImages, index) => {
          return (
            <li key={index}>
              <EntityImagesOverlayItem
                itemEntityType="researchLog"
                itemTitle={logImages.parentLabel}
                parentId={logImages.parentId}
                specialImages={logImages.specialImages}
                onImageClickFunction={onImageClickFunction}
                onItemClickFunction={() => {}}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResearchPhaseImagesOverlayContent;
