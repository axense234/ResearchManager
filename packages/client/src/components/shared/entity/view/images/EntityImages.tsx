// React
import { FC } from "react";
// Interfaces
import { EntityImagesProps } from "@/core/interfaces";
// SCSS
import entityImagesStyles from "@/scss/components/shared/entity/view/images/EntityImages.module.scss";
// Components
import EntityImage from "./EntityImage";
import EntityImagesTitle from "./EntityImagesTitle";
// Redux
import { useSelectEntityImages } from "@/hooks/redux/selector";
import { useAppDispatch } from "@/hooks";
import {
  setResearchActivityImagesOverlay,
  setResearchPhaseImagesOverlay,
} from "@/redux/slices/general/slice";

const EntityImages: FC<EntityImagesProps> = ({
  specialEntity,
  specialEntityType,
  viewType,
  darkMode,
  position,
  isCurrentView,
  showImages,
  setShowImages,
}) => {
  const dispatch = useAppDispatch();

  const entityImages = useSelectEntityImages(
    specialEntity?.id,
    specialEntityType,
    viewType,
  );

  const usedEntityImagesOverlayUpdater =
    specialEntityType === "researchActivity"
      ? setResearchActivityImagesOverlay
      : setResearchPhaseImagesOverlay;

  const onEntityImageClickFunction = () => {
    dispatch(
      usedEntityImagesOverlayUpdater({
        showOverlay: true,
        entityImages,
        viewType,
        parentLabel: specialEntity?.name,
      }),
    );
  };

  return (
    <article
      className={`${entityImagesStyles.entityImagesContainer} ${position}`}
      style={{ backgroundColor: specialEntity.backgroundColorOrImageSrc }}
    >
      <EntityImagesTitle
        title="Images"
        darkMode={darkMode}
        showImages={showImages}
        setShowImages={setShowImages}
        showSectionControl={entityImages.length > 0}
      />
      <EntityImage
        imagesSrc={entityImages.map((entityImage) => entityImage.src)}
        onClickFunction={onEntityImageClickFunction}
        darkMode={darkMode}
        isCurrentView={isCurrentView}
        showImages={showImages}
      />
    </article>
  );
};

export default EntityImages;
