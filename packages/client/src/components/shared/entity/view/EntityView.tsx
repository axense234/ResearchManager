// Interfaces and Types
import { FC } from "react";
import { EntityViewProps } from "@/core/interfaces";
import { ResearchActivityRedux, ResearchPhaseRedux } from "@/core/types";
// Components
import EntityContainer from "../container/EntityContainer";
import EntityDetails from "./EntityDetails";
import EntityViewLoading from "./EntityViewLoading";
import EntityViewNoEntities from "./EntityViewNoEntities";
// SCSS
import entityViewStyles from "@/scss/components/shared/entity/view/EntityView.module.scss";
// Redux and Hooks
import { useAppDispatch, useSelectEntity } from "@/hooks";

const EntityView: FC<EntityViewProps> = ({
  viewType,
  entityType,
  entityId,
  isLoading,
}) => {
  const dispatch = useAppDispatch();
  const entity = useSelectEntity(viewType, entityType, entityId) as
    | ResearchActivityRedux
    | ResearchPhaseRedux;

  if (isLoading) {
    return <EntityViewLoading />;
  }

  if (!entity) {
    return <EntityViewNoEntities entityType={entityType} />;
  }

  return (
    <section className={entityViewStyles.entityViewContainer}>
      <EntityContainer
        containerType={viewType}
        entityType={entityType}
        entityId={entityId}
      />
      <EntityDetails
        specialEntity={entity}
        specialEntityType={entityType}
        viewType={viewType}
      />
    </section>
  );
};

export default EntityView;
