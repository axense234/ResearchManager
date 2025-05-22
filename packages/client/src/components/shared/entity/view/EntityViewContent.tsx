// React
import { FC } from "react";
// Interfaces
import { EntityViewContentProps } from "@/core/interfaces";
// SCSS
import entityViewStyles from "@/scss/components/shared/entity/view/EntityView.module.scss";
// Components
import EntityContainer from "../container/EntityContainer";
import EntityDetails from "./EntityDetails";
import EntitySessions from "./sessions/EntitySessions";
import EntityLogs from "./logs/EntityLogs";
import EntityUsedOn from "./usedOn/EntityUsedOn";
// Types
import {
  ResearchActivityRedux,
  ResearchPhaseRedux,
  TagRedux,
} from "@/core/types";
// Redux
import { useSelectEntity } from "@/hooks";

const EntityViewContent: FC<EntityViewContentProps> = ({
  viewType,
  entityType,
  darkMode,
  entityId,
  position,
  isCurrentView,
  showSessions,
  showImages,
  showGraph,
  showLogs,
  showEntities,
  setShowSessions,
  setShowImages,
  setShowGraph,
  setShowLogs,
  setShowEntities,
}) => {
  const entity = useSelectEntity(viewType, entityType, entityId) as
    | ResearchActivityRedux
    | ResearchPhaseRedux
    | TagRedux;

  if (entityType === "tag") {
    return (
      <div className={`${entityViewStyles.entityViewContent} ${position}`}>
        <EntityContainer
          containerType={viewType}
          entityType={entityType}
          entityId={entity?.id}
          darkMode={viewType === "example" ? true : darkMode}
          position={position}
          isCurrentView={isCurrentView}
        />
        <EntityUsedOn
          darkMode={viewType === "example" ? true : darkMode}
          position={position}
          setShowEntities={setShowEntities}
          showEntities={showEntities}
          isCurrentView={isCurrentView}
          tag={entity as TagRedux}
        />
      </div>
    );
  }

  const specialEntity = entity as ResearchActivityRedux | ResearchPhaseRedux;

  return (
    <div className={`${entityViewStyles.entityViewContent} ${position}`}>
      <EntityContainer
        containerType={viewType}
        entityType={entityType}
        entityId={entity?.id}
        darkMode={viewType === "example" ? true : darkMode}
        position={position}
        isCurrentView={isCurrentView}
      />
      <EntityDetails
        specialEntity={specialEntity}
        specialEntityType={entityType}
        viewType={viewType}
        darkMode={viewType === "example" ? true : darkMode}
        position={position}
        isCurrentView={isCurrentView}
        showImages={showImages}
        showGraph={showGraph}
        setShowImages={setShowImages}
        setShowGraph={setShowGraph}
      />
      {viewType === "entity" && (
        <EntitySessions
          entity={specialEntity}
          entityType={entityType}
          darkMode={darkMode}
          position={position}
          showSessions={showSessions}
          setShowSessions={setShowSessions}
        />
      )}

      {viewType === "entity" && entityType === "researchPhase" && (
        <EntityLogs
          entity={specialEntity}
          entityType={entityType}
          darkMode={darkMode}
          position={position}
          showLogs={showLogs}
          setShowLogs={setShowLogs}
        />
      )}
    </div>
  );
};

export default EntityViewContent;
