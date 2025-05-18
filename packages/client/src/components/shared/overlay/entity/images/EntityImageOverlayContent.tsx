// React
import { FC } from "react";
// SCSS
import entityImageOverlayContentStyles from "@/scss/components/shared/overlay/entity/images/EntityImageOverlayContent.module.scss";
// Interfaces
import { EntityImageOverlayContentProps } from "@/core/interfaces";
// Components
import EntityImageOverlaySlider from "./EntityImageOverlaySlider";
import EntityImageOverlayOptions from "./EntityImageOverlayOptions";

const EntityImageOverlayContent: FC<EntityImageOverlayContentProps> = ({
  imagesPayload,
  optionsType,
  onRemoveImageFunction,
}) => {
  return (
    <div className={entityImageOverlayContentStyles.contentContainer}>
      <EntityImageOverlaySlider imagesPayload={imagesPayload} />
      <EntityImageOverlayOptions
        optionsType={optionsType}
        onRemoveImageFunction={onRemoveImageFunction}
        imagesPayload={imagesPayload}
      />
    </div>
  );
};

export default EntityImageOverlayContent;
