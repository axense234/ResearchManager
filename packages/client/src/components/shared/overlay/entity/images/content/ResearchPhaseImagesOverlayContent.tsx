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
}) => {
  return (
    <div className={overlayContentStyles.contentContainer}>
      <EntityImageOverlay
        showOverlay={showImageOverlay}
        closeOverlayFunction={() => setShowImageOverlay(false)}
        imagesPayload={currentResearchLogsImages}
      />
      <ul className={overlayContentStyles.contentContainerItems}>
        {researchLogsImages.map((logImages) => {
          return (
            <li key={logImages.entityName}>
              <EntityImagesOverlayItem
                itemEntityType="researchLog"
                itemName={logImages.entityName}
                itemImages={logImages.imagesSrc}
                itemId={logImages.entityId}
                onImageClickFunction={onImageClickFunction}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResearchPhaseImagesOverlayContent;
