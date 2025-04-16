// React
import { FC } from "react";
import { PageSectionTitleProps } from "@/core/interfaces";
// SCSS
import pageSectionTitleStyles from "@/scss/components/shared/general/PageSectionTitle.module.scss";

const PageSectionTitle: FC<PageSectionTitleProps> = ({
  title,
  description,
}) => {
  return (
    <div className={pageSectionTitleStyles.pageSectionTitleContainer}>
      <h3>{title}</h3>
      <div className={pageSectionTitleStyles.pageSectionTitleDescription}>
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

export default PageSectionTitle;
