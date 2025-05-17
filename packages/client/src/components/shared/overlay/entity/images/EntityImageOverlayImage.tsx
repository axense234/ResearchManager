// React
import { FC } from "react";
// SCSS
import entityImageOverlayImageStyles from "@/scss/components/shared/overlay/entity/images/EntityImageOverlayImage.module.scss";
// Helpers
import { determineContentPosition } from "@/helpers";
// Interfaces
import { EntityImageOverlayImageProps } from "@/core/interfaces";
// Redux
import { useAppSelector } from "@/hooks";
import { selectCurrentEntityOverlayImageCarouselId } from "@/redux/slices/general";
// Next
import Image from "next/image";

const EntityImageOverlayImage: FC<EntityImageOverlayImageProps> = ({
  imagesPayload,
}) => {
  const currentEntityImageOverlayIndex = useAppSelector(
    selectCurrentEntityOverlayImageCarouselId,
  );

  return (
    <div className={entityImageOverlayImageStyles.imagesContainer}>
      {imagesPayload?.imagesSrc?.map((imagePayload, imagePayloadIndex) => {
        const position = determineContentPosition(
          imagePayloadIndex + 1,
          currentEntityImageOverlayIndex,
          imagesPayload.imagesSrc.length,
        );

        if (position === "not-needed") return null;

        return (
          <Image
            alt={imagesPayload?.entityName}
            title={imagesPayload?.entityName}
            aria-label={imagesPayload?.entityName}
            src={imagePayload}
            width={1520}
            height={780}
            key={imagePayload}
            className={position}
          />
        );
      })}
    </div>
  );
};

export default EntityImageOverlayImage;
