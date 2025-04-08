// Interfaces
import { FC } from "react";
import { EntityImageProps } from "@/core/interfaces";
// SCSS
import entityImageStyles from "@/scss/components/shared/entity/images/EntityImage.module.scss";
// Next
import Image from "next/image";

const EntityImage: FC<EntityImageProps> = ({ imageSrc, onClickFunction }) => {
  return (
    <div className={entityImageStyles.entityImageContainer}>
      {imageSrc ? (
        <Image
          alt="Entity Image"
          title="Expand Overlay"
          aria-label="Expand Overlay"
          src={imageSrc}
          width={496}
          height={256}
          onClick={onClickFunction}
        />
      ) : (
        <p>No Image Found.</p>
      )}
    </div>
  );
};

export default EntityImage;
