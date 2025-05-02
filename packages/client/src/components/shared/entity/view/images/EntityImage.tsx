// Interfaces
import { FC } from "react";
import { EntityImageProps } from "@/core/interfaces";
// SCSS
import entityImageStyles from "@/scss/components/shared/entity/view/images/EntityImage.module.scss";
// Next
import Image from "next/image";
// Data
import { mainBlackColor, secondaryWhiteColor } from "@/data/general";

const EntityImage: FC<EntityImageProps> = ({
  imageSrc,
  onClickFunction,
  darkMode,
}) => {
  const textColor = darkMode ? mainBlackColor : secondaryWhiteColor;

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
        <p style={{ color: textColor }}>No Image Found.</p>
      )}
    </div>
  );
};

export default EntityImage;
