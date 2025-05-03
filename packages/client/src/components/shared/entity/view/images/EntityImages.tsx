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
import { setEntityImagesOverlay } from "@/redux/slices/general/slice";

const EntityImages: FC<EntityImagesProps> = ({
  specialEntity,
  specialEntityType,
  viewType,
  darkMode,
  position,
}) => {
  const dispatch = useAppDispatch();

  const entityImages = useSelectEntityImages(
    specialEntity,
    specialEntityType,
    viewType,
  );

  const onEntityImageClickFunction = () => {
    dispatch(
      setEntityImagesOverlay({
        entityImages,
        entityName: specialEntity.name,
        entityType: specialEntityType,
        showOverlay: true,
      }),
    );
  };

  return (
    <article
      className={`${entityImagesStyles.entityImagesContainer} ${position}`}
      style={{ backgroundColor: specialEntity.backgroundColorOrImageSrc }}
    >
      <EntityImagesTitle title="Images" darkMode={darkMode} />
      <EntityImage
        imageSrc={entityImages[0]?.src}
        onClickFunction={() => onEntityImageClickFunction()}
        darkMode={darkMode}
      />
    </article>
  );
};

export default EntityImages;
