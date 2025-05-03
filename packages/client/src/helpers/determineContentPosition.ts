// Types
import { EntityPositionType } from "@/core/types";

export const determineContentPosition = (
  entityIndex: number,
  currentEntityIndex: number,
  numberOfEntities: number,
): EntityPositionType => {
  let pos: EntityPositionType = "next";
  if (entityIndex === currentEntityIndex) {
    pos = "current";
  } else if (
    entityIndex + 1 === currentEntityIndex ||
    (entityIndex === numberOfEntities && currentEntityIndex === 1)
  ) {
    pos = "prev";
  } else if (entityIndex - 1 === currentEntityIndex) {
    pos = "next";
  }

  return pos;
};
