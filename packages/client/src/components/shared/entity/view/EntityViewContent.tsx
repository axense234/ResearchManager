// React
import { FC } from "react";
// Interfaces
import { EntityViewContentProps } from "@/core/interfaces";
// SCSS
import entityViewStyles from "@/scss/components/shared/entity/view/EntityView.module.scss";
// Components
import EntityContainer from "../container/EntityContainer";
import EntityDetails from "./EntityDetails";
// Types
import { ResearchActivityRedux, ResearchPhaseRedux } from "@/core/types";
// Redux
import { useSelectEntity } from "@/hooks";

const EntityViewContent: FC<EntityViewContentProps> = ({
  viewType,
  entityType,
  darkMode,
  entityId,
  position,
  isCurrentView,
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
      />
    </div>
  );
};

export default EntityViewContent;
