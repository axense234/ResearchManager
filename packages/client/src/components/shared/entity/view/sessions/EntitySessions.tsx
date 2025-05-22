// React
import { FC } from "react";
// Interfaces
import { EntitySessionsProps } from "@/core/interfaces";
// SCSS
import entitySessionsStyles from "@/scss/components/shared/entity/view/sessions/EntitySessions.module.scss";
// Components
import EntitySessionsTitle from "./EntitySessionsTitle";
import EntitySessionsContent from "./EntitySessionsContent";
// Redux
import { useAppSelector } from "@/hooks";
import {
  selectResearchSessionsByResearchPhaseId,
  selectResearchSessionsByResearchActivityId,
} from "@/redux/slices/research/session";

const EntitySessions: FC<EntitySessionsProps> = ({
  entity,
  entityType,
  darkMode,
  position,
  showSessions,
  setShowSessions,
}) => {
  const researchPhaseSessionsIds = useAppSelector((state) =>
    selectResearchSessionsByResearchPhaseId(state, entity.id),
  )
    .filter((rs) => !rs.archived)
    .map((rs) => rs.id);

  const researchActivitySessionsIds = useAppSelector((state) =>
    selectResearchSessionsByResearchActivityId(state, entity.id),
  )
    .filter((rs) => !rs.archived)
    .map((rs) => rs.id);

  const usedSessionsIds =
    entityType === "researchPhase"
      ? researchPhaseSessionsIds
      : researchActivitySessionsIds;

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
        showSectionControl={usedSessionsIds.length > 0}
      />
      <EntitySessionsContent
        sessionsIds={usedSessionsIds}
        darkMode={darkMode}
        showSessions={showSessions}
      />
    </section>
  );
};

export default EntitySessions;
