// React
import { FC } from "react";
// Interfaces
import { EntitySessionsListProps } from "@/core/interfaces";
// SCSS
import entitySessionsListStyles from "@/scss/components/shared/entity/view/sessions/EntitySessionsList.module.scss";
// Components
import EntitySessionItem from "./EntitySessionItem";
// Data
import { mainBlackColor, secondaryWhiteColor } from "@/data/general";

const EntitySessionsList: FC<EntitySessionsListProps> = ({
  darkMode,
  showSessions,
  sessionsIds,
}) => {
  const textColor = darkMode ? mainBlackColor : secondaryWhiteColor;

  return (
    <div className={entitySessionsListStyles.sessionsListContainer}>
      {sessionsIds?.length > 0 ? (
        <ul
          className={entitySessionsListStyles.sessionsList}
          style={{
            height: showSessions ? `${sessionsIds.length * 7}rem` : "0",
            padding: showSessions ? "1rem" : "0",
          }}
        >
          {sessionsIds?.map((researchSessionId, index) => {
            return (
              <li key={researchSessionId}>
                <EntitySessionItem
                  researchSessionId={researchSessionId}
                  researchSessionIndex={index + 1}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p style={{ color: textColor }}>No Research Session Found.</p>
      )}
    </div>
  );
};

export default EntitySessionsList;
