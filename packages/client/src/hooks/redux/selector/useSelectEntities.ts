// Types
import { EntityContainerType, EntityRedux } from "@/core/types";
import { ArchiveableEntityRedux } from "@/core/types/redux/other/ArchiveableEntityRedux";
import { EntityType } from "@researchmanager/shared/types";
// Hooks
import { useSelectEntitiesExamples } from "./useSelectEntitiesExamples";
import { useSelectEntitiesRedux } from "./useSelectEntitiesRedux";

export const useSelectEntities = (
  viewType: EntityContainerType,
  entityType: EntityType,
) => {
  let entities: EntityRedux[];
  if (viewType === "example") {
    entities = useSelectEntitiesExamples(entityType);
    return entities;
  } else if (viewType === "entity") {
    entities = useSelectEntitiesRedux() as unknown as EntityRedux[];
    return entities;
  } else if (viewType === "archived") {
    entities = (
      useSelectEntitiesRedux() as unknown as ArchiveableEntityRedux[]
    ).filter((entity) => entity.archived);
    return entities;
  }
};
