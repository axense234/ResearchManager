// React
import { FC, useState } from "react";
// Interfaces
import { EntityViewProps } from "@/core/interfaces";
// SCSS
import entityViewStyles from "@/scss/components/shared/entity/view/EntityView.module.scss";
// Components
import EntityViewContent from "./EntityViewContent";
import EntityViewLoading from "./EntityViewLoading";
import EntityViewNoEntities from "./EntityViewNoEntities";
// Hooks
import {
  useCalculateEntityViewHeight,
  useGetCurrentEntityIdAndIndex,
} from "@/hooks";
// Helpers
import { determineContentPosition } from "@/helpers";

const EntityView: FC<EntityViewProps> = ({
  viewType,
  entityType,
  isLoading,
  darkMode,
  setShowEntityExamples,
  entitiesIds,
  pageType,
}) => {
  const [showSessions, setShowSessions] = useState<boolean>(false);
  const [showImages, setShowImages] = useState<boolean>(false);
  const [showGraph, setShowGraph] = useState<boolean>(false);
  const [showLogs, setShowLogs] = useState<boolean>(false);
  const [showEntities, setShowEntities] = useState<boolean>(false);

  const { currentEntityIndex, currentEntityId } = useGetCurrentEntityIdAndIndex(
    entityType,
    viewType,
  );

  const entityViewHeight = useCalculateEntityViewHeight(
    currentEntityId,
    entityType,
    viewType,
    showSessions,
    showImages,
    showGraph,
    showLogs,
    showEntities,
  );

  if (isLoading) {
    return <EntityViewLoading />;
  }

  if (entitiesIds?.length < 1) {
    return (
      <EntityViewNoEntities
        entityType={entityType}
        setShowEntityExamples={setShowEntityExamples}
      />
    );
  }

  return (
    <section
      className={entityViewStyles.entityViewContainer}
      style={{ height: entityViewHeight }}
      id={`${pageType}-${entityType}-view`}
    >
      {entitiesIds?.map((entityId, entityIndex) => {
        const position = determineContentPosition(
          entityIndex + 1,
          currentEntityIndex,
          entitiesIds.length,
        );

        if (position === "not-needed") return null;

        return (
          <EntityViewContent
            key={entityId}
            viewType={viewType}
            entityType={entityType}
            darkMode={darkMode}
            entityId={entityId}
            position={position}
            isCurrentView={currentEntityIndex === entityIndex + 1}
            showSessions={showSessions}
            showImages={showImages}
            showGraph={showGraph}
            showLogs={showLogs}
            showEntities={showEntities}
            setShowSessions={setShowSessions}
            setShowImages={setShowImages}
            setShowGraph={setShowGraph}
            setShowLogs={setShowLogs}
            setShowEntities={setShowEntities}
          />
        );
      })}
    </section>
  );
};

export default EntityView;
