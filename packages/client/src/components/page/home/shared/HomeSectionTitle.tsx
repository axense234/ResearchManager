// React
import { FC } from "react";
import { HomeSectionTitleProps } from "@/core/interfaces";
// SCSS
import homeSectionTitleStyles from "@/scss/components/page/home/shared/HomeSectionTitle.module.scss";

const HomeSectionTitle: FC<HomeSectionTitleProps> = ({
  title,
  description,
}) => {
  return (
    <div className={homeSectionTitleStyles.homeSectionTitleContainer}>
      <h3>{title}</h3>
      <div className={homeSectionTitleStyles.homeSectionTitleDescription}>
        {typeof description === "string" ? (
          <p>{description}</p>
        ) : (
          description.map((desc) => {
            return <p key={desc.slice(0, 7)}>{desc}</p>;
          })
        )}
      </div>
    </div>
  );
};

export default HomeSectionTitle;
