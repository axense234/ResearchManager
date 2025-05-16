// React
import { FC } from "react";
// Interfaces
import { EntitySessionsProps } from "@/core/interfaces";
// SCSS
import entitySessionsStyles from "@/scss/components/shared/entity/view/sessions/EntitySessions.module.scss";
// Components
import EntitySessionsTitle from "./EntitySessionsTitle";
import EntitySessionsList from "./EntitySessionsList";

const EntitySessions: FC<EntitySessionsProps> = ({ entityId, entityType }) => {
  return (
    <section className={entitySessionsStyles.entitySessionsContainer}>
      <EntitySessionsTitle title="Research Sessions" darkMode />
      <EntitySessionsList entityId={entityId} entityType={entityType} />
    </section>
  );
};

export default EntitySessions;
