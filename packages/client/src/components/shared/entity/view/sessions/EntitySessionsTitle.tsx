// React
import { FC } from "react";
// SCSS
import entitySessionsTitleStyles from "@/scss/components/shared/entity/view/sessions/EntitySessionsTitle.module.scss";
// Interfaces
import { EntitySessionsTitleProps } from "@/core/interfaces";
// Components
import EntityViewSectionControl from "../EntityViewSectionControl";
// Data
import { mainBlackColor, secondaryWhiteColor } from "@/data/general";

const EntitySessionsTitle: FC<EntitySessionsTitleProps> = ({
  title,
  darkMode,
  showSessions,
  setShowSessions,
}) => {
  const textColor = darkMode ? mainBlackColor : secondaryWhiteColor;

  return (
    <div className={entitySessionsTitleStyles.sessionsTitle}>
      <div className={entitySessionsTitleStyles.sessionsTitleContent}>
        <h6 style={{ color: textColor }}>{title}</h6>
        <EntityViewSectionControl
          showSectionContent={showSessions}
          setShowSectionContent={setShowSessions}
        />
      </div>
      <hr style={{ backgroundColor: textColor }} />
    </div>
  );
};

export default EntitySessionsTitle;
