// React
import { FC } from "react";
// Interfaces
import { EntityImagesOverlayTitleProps } from "@/core/interfaces";
// SCSS
import entityImagesOverlayTitleStyles from "@/scss/components/shared/overlay/entity/images/EntityImagesOverlayTitle.module.scss";

const EntityImagesOverlayTitle: FC<EntityImagesOverlayTitleProps> = ({
  entityName,
  specialEntityType,
}) => {
  return (
    <div
      className={
        entityImagesOverlayTitleStyles.entityImagesOverlayTitleContainer
      }
    >
      <h4
        style={{
          marginTop: specialEntityType === "researchPhase" ? "3rem" : "0",
        }}
      >
        {entityName}
      </h4>
    </div>
  );
};

export default EntityImagesOverlayTitle;
