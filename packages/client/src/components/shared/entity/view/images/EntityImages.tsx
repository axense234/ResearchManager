// Interfaces
import { FC, useState } from "react";
import { EntityImagesProps } from "@/core/interfaces";
// SCSS
import entityImagesStyles from "@/scss/components/shared/entity/view/images/EntityImages.module.scss";
// Components
import EntityImage from "./EntityImage";
import EntityImagesOverlay from "@/components/shared/overlay/entity/images/EntityImagesOverlay";
// Hooks
import { useSelectEntityImages } from "@/hooks/redux/selector";

const EntityImages: FC<EntityImagesProps> = ({
  specialEntity,
  specialEntityType,
  viewType,
}) => {
  const [showImagesOverlay, setShowImagesOverlay] = useState<boolean>(false);

  const entityImages = useSelectEntityImages(
    specialEntity,
    specialEntityType,
    viewType,
  );

  const entityName = specialEntity.name;

  return (
    <article className={entityImagesStyles.entityImagesContainer}>
      <EntityImagesOverlay
        entityImages={entityImages}
        entityName={entityName}
        showOverlay={showImagesOverlay}
        closeOverlayFunction={() => setShowImagesOverlay(false)}
        specialEntityType={specialEntityType}
      />
      <div className={entityImagesStyles.entityImagesTitle}>
        <h6>Images</h6>
        <hr />
      </div>
      <EntityImage
        imageSrc={entityImages[0].src}
        onClickFunction={() => setShowImagesOverlay(true)}
      />
    </article>
  );
};

export default EntityImages;
