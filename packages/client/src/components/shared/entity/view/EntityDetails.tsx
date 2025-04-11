// Interfaces
import { FC } from "react";
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
}) => {
  return (
    <section className={entityDetailsStyles.entityDetailsContainer}>
      <EntityImages
        specialEntity={specialEntity}
        specialEntityType={specialEntityType}
        viewType={viewType}
      />
      <EntityGraphs />
    </section>
  );
};

export default EntityDetails;
