// React
import { FC } from "react";
// SCSS
import entityImageOverlayOptionsStyles from "@/scss/components/shared/overlay/entity/images/EntityImageOverlayOptions.module.scss";
// Interfaces
import { EntityImageOverlayOptionsProps } from "@/core/interfaces";
// Components
import FunctionalButton from "@/components/shared/general/FunctionalButton";
// Redux
import { useAppSelector } from "@/hooks";
import { selectCurrentEntityOverlayImageCarouselId } from "@/redux/slices/general";

const EntityImageOverlayOptions: FC<EntityImageOverlayOptionsProps> = ({
  optionsType,
  onRemoveImageFunction,
  imagesPayload,
}) => {
  const currentEntityImageOverlayIndex = useAppSelector(
    selectCurrentEntityOverlayImageCarouselId,
  );

  if (optionsType === "entity" || optionsType === "upsert") {
    return (
      <div className={entityImageOverlayOptionsStyles.overlayOptionsContainer}>
        <FunctionalButton
          content="Remove Image"
          disabled={false}
          onHoverContent="Remove Image"
          onHoverContentDisabled="Something is wrong."
          colorScheme="red"
          onClickFunction={() => {
            onRemoveImageFunction(
              imagesPayload?.imagesSrc[currentEntityImageOverlayIndex - 1],
            );
          }}
        />
      </div>
    );
  }
  return null;
};

export default EntityImageOverlayOptions;
