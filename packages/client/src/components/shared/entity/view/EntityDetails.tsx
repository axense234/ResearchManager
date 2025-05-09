// React
import { FC } from "react";
// Interfaces
import { EntityDetailsProps } from "@/core/interfaces";
// Components
import EntityGraphs from "./graphs/EntityGraphs";
import EntityImages from "./images/EntityImages";
// SCSS
import entityDetailsStyles from "@/scss/components/shared/entity/view/EntityDetails.module.scss";

const EntityDetails: FC<EntityDetailsProps> = ({
  specialEntity,
  specialEntityType,
  viewType,
  darkMode,
  position,
  isCurrentView,
}) => {
  return (
    <section className={entityDetailsStyles.entityDetailsContainer}>
      <EntityImages
        specialEntity={specialEntity}
        specialEntityType={specialEntityType}
        viewType={viewType}
        darkMode={darkMode}
        position={position}
        isCurrentView={isCurrentView}
      />
      <EntityGraphs
        specialEntity={specialEntity}
        darkMode={darkMode}
        position={position}
      />
    </section>
  );
};

export default EntityDetails;
