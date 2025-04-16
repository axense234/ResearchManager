// Types
import {
  EntityImagePayloadType,
  SpecialEntityImagesPayloadType,
} from "@/core/types";

export const organizeEntityImagesByEntityNames = (
  entityImages: EntityImagePayloadType[],
  entityNames: Set<string>,
  specialEntityType: "researchPhase" | "researchLog",
) => {
  const specialEntityNameSelector = `${specialEntityType}Name`;
  const specialEntityIdSelector = `${specialEntityType}Id`;

  const organizedEntityNames =
    entityNames.size > 0 ? [...entityNames.values()] : [];

  const organizedEntityImages = organizedEntityNames.map((entityName) => {
    return {
      imagesSrc: entityImages
        .filter(
          (entityImage) =>
            entityImage[specialEntityNameSelector] === entityName,
        )
        .map((entityImageFiltered) => entityImageFiltered.src),
      entityName: entityName,
      entityId: entityImages.find(
        (entityImage) => entityImage[specialEntityNameSelector] === entityName,
      )[specialEntityIdSelector],
    };
  }) as SpecialEntityImagesPayloadType;

  return organizedEntityImages;
};
