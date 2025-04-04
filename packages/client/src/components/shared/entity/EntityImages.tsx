// Interfaces
import { FC } from "react";
import { EntityImageProps } from "@/core/interfaces";
// SCSS
import entityImagesStyles from "@/scss/components/shared/entity/EntityImages.module.scss";
// Next
import Image from "next/image";

const EntityImages: FC<EntityImageProps> = ({ images }) => {
  return (
    <div className={entityImagesStyles.entityImagesContainer}>
      <div className={entityImagesStyles.entityImagesTitle}>
        <h6>Images</h6>
        <hr />
      </div>
      {images?.length >= 1 ? (
        <Image alt="Entity Image" src={images[0]} width={496} height={256} />
      ) : (
        <p>No images.</p>
      )}
    </div>
  );
};

export default EntityImages;
