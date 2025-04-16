// Types
import { EntityContainerType } from "@/core/types";
import { EntityType } from "@researchmanager/shared/types";
// Hooks
import { useSelectEntityRedux } from "./useSelectEntityRedux";
import { useSelectEntityExampleById } from "./useSelectEntityExampleById";

const selectors = {
  example: useSelectEntityExampleById,
  entity: useSelectEntityRedux,
  archived: useSelectEntityRedux,
};

export const useSelectEntity = (
  viewType: EntityContainerType,
  entityType: EntityType,
  entityId: string,
) => {
  const selector = selectors[viewType];
  if (!selector) throw new Error("Invalid view type or something went wrong.");

  return selector(entityType, entityId);
};
