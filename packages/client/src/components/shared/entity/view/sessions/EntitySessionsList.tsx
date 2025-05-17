// React
import { FC } from "react";
// Interfaces
import { EntitySessionsListProps } from "@/core/interfaces";
// SCSS
import entitySessionsListStyles from "@/scss/components/shared/entity/view/sessions/EntitySessionsList.module.scss";
// Components
import EntitySessionItem from "./EntitySessionItem";
// Redux
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  selectResearchSessionsByResearchActivityId,
  selectResearchSessionsByResearchPhaseId,
} from "@/redux/slices/research/session";
// Data
import { mainBlackColor, secondaryWhiteColor } from "@/data/general";
import { setUpsertEntityOverlay } from "@/redux/slices/general/slice";

const EntitySessionsList: FC<EntitySessionsListProps> = ({
  entityType,
  entity,
  darkMode,
  showSessions,
}) => {
  const dispatch = useAppDispatch();

  const researchPhaseSessionsIds = useAppSelector((state) =>
    selectResearchSessionsByResearchPhaseId(state, entity.id),
  ).map((rs) => rs.id);

  const researchActivitySessionsIds = useAppSelector((state) =>
    selectResearchSessionsByResearchActivityId(state, entity.id),
  ).map((rs) => rs.id);

  const textColor = darkMode ? mainBlackColor : secondaryWhiteColor;

  const usedSessionsIds =
    entityType === "researchPhase"
      ? researchPhaseSessionsIds
      : researchActivitySessionsIds;

  return (
    <div className={entitySessionsListStyles.sessionsListContainer}>
      {usedSessionsIds?.length > 0 ? (
        <ul
          className={entitySessionsListStyles.sessionsList}
          style={{
            maxHeight: showSessions ? "30rem" : "0",
            padding: showSessions ? "1rem" : "0",
          }}
        >
          {usedSessionsIds?.map((researchSessionId, index) => {
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
