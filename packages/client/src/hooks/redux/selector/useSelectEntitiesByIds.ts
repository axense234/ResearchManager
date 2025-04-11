// Types
import { EntityContainerType, EntityRedux } from "@/core/types";
import { ArchiveableEntityRedux } from "@/core/types/redux/other/ArchiveableEntityRedux";
import { EntityType } from "@researchmanager/shared/types";
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
    entities = useSelectEntitiesReduxByIds() as unknown as EntityRedux[];
    return entities;
  } else if (viewType === "archived") {
    entities = (
      useSelectEntitiesReduxByIds() as unknown as ArchiveableEntityRedux[]
    ).filter((entity) => entity.archived);
    return entities;
  }
};
