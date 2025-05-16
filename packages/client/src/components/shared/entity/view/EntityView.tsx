// React
import { FC, useEffect, useState } from "react";
// Interfaces
import { EntityViewProps } from "@/core/interfaces";
// SCSS
import entityViewStyles from "@/scss/components/shared/entity/view/EntityView.module.scss";
// Components
import EntityViewContent from "./EntityViewContent";
import EntityViewLoading from "./EntityViewLoading";
import EntityViewNoEntities from "./EntityViewNoEntities";
// Hooks
import { useGetCurrentEntityIdAndIndex } from "@/hooks";
// Helpers
import { determineContentPosition } from "@/helpers";

const EntityView: FC<EntityViewProps> = ({
  viewType,
  entityType,
  isLoading,
  darkMode,
  setShowEntityExamples,
  entitiesIds,
}) => {
  const { currentEntityIndex } = useGetCurrentEntityIdAndIndex(
    entityType,
    viewType,
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
    <section className={entityViewStyles.entityViewContainer}>
      {entitiesIds?.map((entityId, entityIndex) => {
        const position = determineContentPosition(
          entityIndex + 1,
          currentEntityIndex,
          entitiesIds.length,
        );

        console.log(position);

        if (position === "not-needed") return null;

        return (
          <EntityViewContent
            viewType={viewType}
            entityType={entityType}
            darkMode={darkMode}
            entityId={entityId}
            position={position}
            isCurrentView={currentEntityIndex === entityIndex + 1}
            key={entityId}
          />
        );
      })}
    </section>
  );
};

export default EntityView;
