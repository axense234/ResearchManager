// Interfaces
import { FC } from "react";
import { HomeSectionTitleProps } from "@/core/interfaces";
// SCSS
import homeContactOptionStyles from "@/scss/components/page/home/contact/HomeContactOption.module.scss";

const HomeContactOption: FC<HomeSectionTitleProps> = ({
  title,
  description,
}) => {
  return (
    <div className={homeContactOptionStyles.homeContactOptionContainer}>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default HomeContactOption;
