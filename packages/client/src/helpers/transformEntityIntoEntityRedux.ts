// Types
import { ResearchSessionRedux } from "@/core/types";
import { EntityRedux } from "@/core/types/redux/other/EntityRedux";
import { ResearchSession } from "@prisma/client";
import { Entity, EntityType } from "@researchmanager/shared/types";

export const transformEntityIntoEntityRedux = (
  entity: Entity,
  entityType?: EntityType,
): EntityRedux => {
  if (entityType === "researchSession") {
    const researchSession = entity as ResearchSession;
    return {
      ...researchSession,
      createdAt: new Date(researchSession.createdAt).toISOString(),
      updatedAt: new Date(researchSession.updatedAt).toISOString(),
      currentStatusDate: new Date(
        researchSession.currentStatusDate,
      ).toISOString(),
    } as ResearchSessionRedux;
  }

  return {
    ...entity,
    createdAt: new Date(entity.createdAt).toISOString(),
    updatedAt: new Date(entity.updatedAt).toISOString(),
  } as EntityRedux;
};
