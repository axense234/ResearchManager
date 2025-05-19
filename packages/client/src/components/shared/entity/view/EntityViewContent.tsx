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
// Types
import { ResearchActivityRedux, ResearchPhaseRedux } from "@/core/types";
// Redux
import { useSelectEntity } from "@/hooks";
import EntityLogs from "./logs/EntityLogs";

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
  setShowSessions,
  setShowImages,
  setShowGraph,
  setShowLogs,
}) => {
  const entity = useSelectEntity(viewType, entityType, entityId) as
    | ResearchActivityRedux
    | ResearchPhaseRedux;

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
        specialEntity={entity}
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
          entity={entity}
          entityType={entityType}
          darkMode={darkMode}
          position={position}
          showSessions={showSessions}
          setShowSessions={setShowSessions}
        />
      )}

      {viewType === "entity" && entityType === "researchPhase" && (
        <EntityLogs
          entity={entity}
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
