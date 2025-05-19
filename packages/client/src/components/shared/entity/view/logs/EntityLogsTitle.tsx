// React
import { FC } from "react";
// SCSS
import entityLogsTitleStyles from "@/scss/components/shared/entity/view/logs/EntityLogsTitle.module.scss";
// Interfaces
import { EntityLogsTitleProps } from "@/core/interfaces";
// Components
import EntityViewSectionControl from "../EntityViewSectionControl";
// Data
import { mainBlackColor, secondaryWhiteColor } from "@/data/general";

const EntityLogsTitle: FC<EntityLogsTitleProps> = ({
  title,
  darkMode,
  showLogs,
  setShowLogs,
  showSectionControl,
}) => {
  const textColor = darkMode ? mainBlackColor : secondaryWhiteColor;

  return (
    <div className={entityLogsTitleStyles.logsTitle}>
      <div className={entityLogsTitleStyles.logsTitleContent}>
        <h6 style={{ color: textColor }}>{title}</h6>
        {showSectionControl && (
          <EntityViewSectionControl
            showSectionContent={showLogs}
            setShowSectionContent={setShowLogs}
          />
        )}
      </div>
      <hr style={{ backgroundColor: textColor }} />
    </div>
  );
};

export default EntityLogsTitle;
