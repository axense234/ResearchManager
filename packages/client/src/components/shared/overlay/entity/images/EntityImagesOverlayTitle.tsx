// React
import { FC } from "react";
// Interfaces
import { EntityImagesOverlayTitleProps } from "@/core/interfaces";
// SCSS
import entityImagesOverlayTitleStyles from "@/scss/components/shared/overlay/entity/images/EntityImagesOverlayTitle.module.scss";

const EntityImagesOverlayTitle: FC<EntityImagesOverlayTitleProps> = ({
  entityName,
}) => {
  return (
    <div
      className={
        entityImagesOverlayTitleStyles.entityImagesOverlayTitleContainer
      }
    >
      <h4>{entityName}</h4>
    </div>
  );
};

export default EntityImagesOverlayTitle;
