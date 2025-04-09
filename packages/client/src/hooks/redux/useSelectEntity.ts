// Types
import { EntityContainerType, EntityRedux } from "@/core/types";
import { EntityType } from "@researchmanager/shared/types";
import { ArchiveableEntityRedux } from "@/core/types/redux/other/ArchiveableEntityRedux";
// Hooks
import { useSelectEntityExampleById } from "./useSelectEntityExampleById";
import { useSelectEntityRedux } from "./useSelectEntityRedux";

export const useSelectEntity = (
  viewType: EntityContainerType,
  entityType: EntityType,
  entityId: string,
) => {
  let entity: EntityRedux;
  if (viewType === "example") {
    entity = useSelectEntityExampleById(entityType, entityId);
    return entity;
  } else if (viewType === "entity") {
    entity = useSelectEntityRedux() as unknown as EntityRedux;
    return entity;
  } else if (viewType === "archived") {
    entity = useSelectEntityRedux() as unknown as ArchiveableEntityRedux;
    return entity;
  }
};
