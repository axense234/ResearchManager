// Types
import { EntityContainerType, EntityRedux } from "@/core/types";
import { EntityType } from "@researchmanager/shared/types";
import { ArchiveableEntityRedux } from "@/core/types/redux/other/ArchiveableEntityRedux";
// Hooks
import { useSelectEntitiesExamplesByIds } from "./useSelectEntitiesExamplesByIds";
import { useSelectEntitiesReduxByIds } from "./useSelectEntitiesReduxByIds";

export const useSelectEntitiesByIds = (
  viewType: EntityContainerType,
  entityType: EntityType,
  entityIds: string[],
) => {
  let entities: EntityRedux[];
  if (viewType === "example") {
    entities = useSelectEntitiesExamplesByIds(entityType, entityIds);
    return entities;
  } else if (viewType === "entity") {
    entities = useSelectEntitiesReduxByIds(entityType, entityIds);
    return entities;
  } else if (viewType === "archived") {
    entities = useSelectEntitiesReduxByIds(entityType, entityIds).filter(
      (entity: ArchiveableEntityRedux) => entity.archived,
    );
    return entities;
  }
};
