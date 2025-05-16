// React
import { FC } from "react";
// Interfaces
import { EntitySessionsListProps } from "@/core/interfaces";
// SCSS
import entitySessionsListStyles from "@/scss/components/shared/entity/view/sessions/EntitySessionsList.module.scss";
// Types
import { ResearchActivityRedux, ResearchPhaseRedux } from "@/core/types";
// Components
import EntitySessionItem from "./EntitySessionItem";
// Redux
import { useAppSelector, useSelectEntity } from "@/hooks";
import { selectResearchPhasesByResearchActivityId } from "@/redux/slices/research/phase";

const EntitySessionsList: FC<EntitySessionsListProps> = ({
  entityId,
  entityType,
}) => {
  const entity = useSelectEntity("entity", entityType, entityId) as
    | ResearchActivityRedux
    | ResearchPhaseRedux;

  const researchPhaseSessionsIds = (entity as ResearchPhaseRedux)
    .researchSessionsIds;

  const researchActivitySessionsIds = useAppSelector((state) =>
    selectResearchPhasesByResearchActivityId(state, entityId),
  )
    ?.map((researchPhase) => researchPhase.researchSessionsIds)
    ?.flat();

  const usedSessionsIds =
    entityType === "researchPhase"
      ? researchPhaseSessionsIds
      : researchActivitySessionsIds;

  return (
    <div className={entitySessionsListStyles.sessionsListContainer}>
      {usedSessionsIds?.length > 0 ? (
        <ul className={entitySessionsListStyles.sessionsList}>
          {usedSessionsIds?.map((researchSessionIds) => {
            return (
              <li key={researchSessionIds}>
                <EntitySessionItem researchSessionId={researchSessionIds} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No Research Session Found.</p>
      )}
    </div>
  );
};

export default EntitySessionsList;
