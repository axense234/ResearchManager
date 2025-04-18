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
import { changeShowEntityContainerWrapper } from "@/redux/slices/general/slice";

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
    return <EntityViewNoEntities />;
  }

  return (
    <section
      className={entityViewStyles.entityViewContainer}
      onMouseEnter={() => dispatch(changeShowEntityContainerWrapper(true))}
      onMouseLeave={() => dispatch(changeShowEntityContainerWrapper(false))}
    >
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
