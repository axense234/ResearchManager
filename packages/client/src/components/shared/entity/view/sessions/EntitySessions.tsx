// React
import { FC, useState } from "react";
// Interfaces
import { EntitySessionsProps } from "@/core/interfaces";
// SCSS
import entitySessionsStyles from "@/scss/components/shared/entity/view/sessions/EntitySessions.module.scss";
// Components
import EntitySessionsTitle from "./EntitySessionsTitle";
import EntitySessionsList from "./EntitySessionsList";

const EntitySessions: FC<EntitySessionsProps> = ({
  entity,
  entityType,
  darkMode,
  position,
}) => {
  const [showSessions, setShowSessions] = useState<boolean>(false);

  return (
    <section
      className={`${entitySessionsStyles.entitySessionsContainer} ${position}`}
      style={{ backgroundColor: entity.backgroundColorOrImageSrc }}
    >
      <EntitySessionsTitle
        title="Research Sessions"
        darkMode={darkMode}
        showSessions={showSessions}
        setShowSessions={setShowSessions}
      />
      <EntitySessionsList
        entity={entity}
        entityType={entityType}
        darkMode={darkMode}
        showSessions={showSessions}
      />
    </section>
  );
};

export default EntitySessions;
