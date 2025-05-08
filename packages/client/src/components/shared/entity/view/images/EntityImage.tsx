// React
import { FC, useState } from "react";
// Interfaces
import { EntityImageProps } from "@/core/interfaces";
// SCSS
import entityImageStyles from "@/scss/components/shared/entity/view/images/EntityImage.module.scss";
// Next
import Image from "next/image";
// Data
import { mainBlackColor, secondaryWhiteColor } from "@/data/general";
import {
  determineContentPosition,
  handleCarouselStepDirection,
} from "@/helpers";
import { useAutoCarousel } from "@/hooks";

const EntityImage: FC<EntityImageProps> = ({
  imagesSrc,
  onClickFunction,
  darkMode,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(1);

  const textColor = darkMode ? mainBlackColor : secondaryWhiteColor;

  // useAutoCarousel(
  //   true,
  //   () =>
  //     setCurrentImageIndex(
  //       handleCarouselStepDirection(
  //         "right",
  //         currentImageIndex,
  //         imagesSrc.length,
  //       ),
  //     ),
  //   () => {},
  // );

  return (
    <div className={entityImageStyles.entityImageContainer}>
      {imagesSrc.length > 0 ? (
        imagesSrc?.map((imageSrc, imageSrcIndex) => {
          const position = determineContentPosition(
            imageSrcIndex + 1,
            currentImageIndex,
            imagesSrc.length,
          );

          return (
            <Image
              alt="Entity Image"
              title="Expand Overlay"
              aria-label="Expand Overlay"
              src={imageSrc}
              width={496}
              height={256}
              onClick={onClickFunction}
              className={position}
              key={imageSrc}
            />
          );
        })
      ) : (
        <p style={{ color: textColor }}>No Image Found.</p>
      )}
    </div>
  );
};

export default EntityImage;
