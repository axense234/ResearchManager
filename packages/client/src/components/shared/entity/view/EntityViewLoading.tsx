// Interfaces
import { FC } from "react";
// Spinner
import { FadeLoader } from "react-spinners";
// SCSS
import entityViewLoadingStyles from "@/scss/components/shared/entity/view/EntityViewLoading.module.scss";
// Data
import { mainLightBlueColor } from "@/data/general";

const EntityViewLoading: FC = () => {
  return (
    <div className={entityViewLoadingStyles.entityViewLoadingContainer}>
      <FadeLoader color={mainLightBlueColor} />
      <h6>Loading, please wait...</h6>
    </div>
  );
};

export default EntityViewLoading;
