// React
import { FC } from "react";
// SCSS
import entitySessionsTitleStyles from "@/scss/components/shared/entity/view/sessions/EntitySessionsTitle.module.scss";
// Interfaces
import { EntitySessionsTitleProps } from "@/core/interfaces";
// Data
import { mainBlackColor, secondaryWhiteColor } from "@/data/general";

const EntitySessionsTitle: FC<EntitySessionsTitleProps> = ({
  title,
  darkMode,
}) => {
  const textColor = darkMode ? mainBlackColor : secondaryWhiteColor;

  return (
    <div className={entitySessionsTitleStyles.sessionsTitle}>
      <h6 style={{ color: textColor }}>{title}</h6>
      <hr style={{ backgroundColor: textColor }} />
    </div>
  );
};

export default EntitySessionsTitle;
