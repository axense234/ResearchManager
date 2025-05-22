// React
import { FC } from "react";
// SCSS
import entityLogsListStyles from "@/scss/components/shared/entity/view/logs/EntityLogsList.module.scss";
// Interfaces
import { EntityLogsListProps } from "@/core/interfaces";
// Data
import { mainBlackColor, secondaryWhiteColor } from "@/data/general";
// Components
import EntityLogItem from "./EntityLogItem";

const EntityLogsList: FC<EntityLogsListProps> = ({
  darkMode,
  logsIds,
  showLogs,
}) => {
  const textColor = darkMode ? mainBlackColor : secondaryWhiteColor;

  const entityLogsListHeight = showLogs
    ? Math.min(25, Math.ceil(logsIds.length / 3) * 3.2)
    : 0;

  return (
    <div className={entityLogsListStyles.logsListContainer}>
      {logsIds?.length > 0 ? (
        <ul
          className={entityLogsListStyles.logsList}
          style={{
            height: `${entityLogsListHeight}rem`,
            padding: showLogs ? "1rem" : "0",
          }}
        >
          {logsIds?.map((researchLogId, index) => {
            return (
              <li key={researchLogId}>
                <EntityLogItem
                  researchLogId={researchLogId}
                  researchLogIndex={index + 1}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p style={{ color: textColor }}>No Research Log Found.</p>
      )}
    </div>
  );
};

export default EntityLogsList;
