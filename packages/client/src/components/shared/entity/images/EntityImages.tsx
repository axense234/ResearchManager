// Interfaces
import { FC, useState } from "react";
import { EntityImagesProps } from "@/core/interfaces";
// SCSS
import entityImagesStyles from "@/scss/components/shared/entity/EntityImages.module.scss";
// Components
import EntityImage from "./EntityImage";
import EntityImagesOverlay from "../../overlay/entity/EntityImagesOverlay";

const EntityImages: FC<EntityImagesProps> = ({ images }) => {
  const [showImagesOverlay, setShowImagesOverlay] = useState<boolean>(false);

  return (
    <div className={entityImagesStyles.entityImagesContainer}>
      <EntityImagesOverlay
        imagesSrc={images.map((image) => image)}
        showOverlay={showImagesOverlay}
        closeOverlayFunction={() => setShowImagesOverlay(false)}
      />
      <div className={entityImagesStyles.entityImagesTitle}>
        <h6>Images</h6>
        <hr />
      </div>
      <EntityImage
        imageSrc={images[0]}
        onClickFunction={() => setShowImagesOverlay(true)}
      />
    </div>
  );
};

export default EntityImages;
