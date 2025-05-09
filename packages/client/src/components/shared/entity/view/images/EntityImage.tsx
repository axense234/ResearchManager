// React
import { FC } from "react";
// Interfaces
import { EntityImageProps } from "@/core/interfaces";
// SCSS
import entityImageStyles from "@/scss/components/shared/entity/view/images/EntityImage.module.scss";
// Next
import Image from "next/image";
// Data
import { mainBlackColor, secondaryWhiteColor } from "@/data/general";
// Helpers
import { determineContentPosition } from "@/helpers";
// Redux
import { useAppDispatch, useAppSelector, useAutoCarousel } from "@/hooks";
import { selectCurrentEntityImageCarouselId } from "@/redux/slices/general";
import { handleEntityImageCarouselStepDirection } from "@/redux/slices/general/slice";

const EntityImage: FC<EntityImageProps> = ({
  imagesSrc,
  onClickFunction,
  darkMode,
  isCurrentView,
}) => {
  const currentEntityImageCarouselId = useAppSelector(
    selectCurrentEntityImageCarouselId,
  );

  useHandleEntityImageAutoCarousel(isCurrentView, imagesSrc.length);

  const textColor = darkMode ? mainBlackColor : secondaryWhiteColor;

  return (
    <div className={entityImageStyles.entityImageContainer}>
      {imagesSrc.length > 0 ? (
        <div className={entityImageStyles.entityImage}>
          {imagesSrc?.map((imageSrc, imageSrcIndex) => {
            const position = determineContentPosition(
              imageSrcIndex + 1,
              currentEntityImageCarouselId,
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
          })}
        </div>
      ) : (
        <p style={{ color: textColor }}>No Image Found.</p>
      )}
    </div>
  );
};

const useHandleEntityImageAutoCarousel = (
  isCurrentView: boolean,
  numberOfImages: number,
) => {
  const dispatch = useAppDispatch();
  useAutoCarousel(
    isCurrentView,
    () =>
      dispatch(
        handleEntityImageCarouselStepDirection({
          direction: "right",
          numberOfImages,
        }),
      ),
    () => {},
    2000,
    5000,
    3000,
  );
};

export default EntityImage;
