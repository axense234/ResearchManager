// React
import { FC } from "react";
// SCSS
import entityUsedOnListStyles from "@/scss/components/shared/entity/view/usedOn/EntityUsedOnList.module.scss";
// Components
import EntityUsedOnItem from "./EntityUsedOnItem";
// Interfaces
import { EntityUsedOnListProps } from "@/core/interfaces";
// Data
import { mainBlackColor, secondaryWhiteColor } from "@/data/general";

const EntityUsedOnList: FC<EntityUsedOnListProps> = ({
  darkMode,
  entitySelectors,
  showEntities,
}) => {
  const textColor = darkMode ? mainBlackColor : secondaryWhiteColor;

  return (
    <div className={entityUsedOnListStyles.entitiesListContainer}>
      {entitySelectors?.length > 0 ? (
        <ul
          className={entityUsedOnListStyles.entitiesList}
          style={{
            height: showEntities ? `${entitySelectors.length * 8}rem` : "0",
            padding: showEntities ? "1rem" : "0",
          }}
        >
          {entitySelectors?.map((entitySelector, index) => {
            return (
              <li key={entitySelector.entityId}>
                <EntityUsedOnItem entitySelector={entitySelector} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p style={{ color: textColor }}>Tag is not being used.</p>
      )}
    </div>
  );
};

export default EntityUsedOnList;
