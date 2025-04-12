// Interfaces
import { FC } from "react";
import { EntityImagesTitleProps } from "@/core/interfaces";
// SCSS
import entityImagesTitleStyles from "@/scss/components/shared/entity/view/images/EntityImagesTitle.module.scss";

const EntityImagesTitle: FC<EntityImagesTitleProps> = ({ title }) => {
  return (
    <div className={entityImagesTitleStyles.entityImagesTitleContainer}>
      <h6>{title}</h6>
      <hr />
    </div>
  );
};

export default EntityImagesTitle;
