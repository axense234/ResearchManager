// Types
import { EntityRedux } from "@/core/types/redux/other/EntityRedux";
import { Entity } from "@researchmanager/shared/types";

export const transformEntityIntoEntityRedux = (entity: Entity): EntityRedux => {
  return {
    ...entity,
    createdAt: new Date(entity.createdAt).toISOString(),
    updatedAt: new Date(entity.updatedAt).toISOString(),
  } as EntityRedux;
};
