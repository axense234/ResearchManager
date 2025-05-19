// Types
import {
  EntityImagePayloadType,
  SpecialEntityImagesPayloadType,
} from "@/core/types";

export const organizeEntityImagesByEntityIds = (
  entityImages: EntityImagePayloadType[],
  specialEntityType: "researchPhase" | "researchLog",
) => {
  const specialEntityNameSelector = `${specialEntityType}Name`;
  const specialEntityIdSelector = `${specialEntityType}Id`;

  const entityNames =
    new Set(
      entityImages.map(
        (entityImage) => entityImage[specialEntityNameSelector] as string,
      ),
    ) || new Set([]);

  if (entityNames && entityNames.size > 0) {
    const entityNamesValues = entityNames?.values();

    const entityImageGroups = entityNamesValues?.map((entityName) => {
      return {
        entityName,
        entityId: entityImages.find(
          (entityImage) =>
            entityImage[specialEntityNameSelector] === entityName,
        )[specialEntityIdSelector],
      };
    });

    const filterEntityImagesByEntityId = (entityName: string) => {
      return entityImages.filter(
        (entityImage) => entityImage[specialEntityNameSelector] === entityName,
      );
    };

    const organizedEntityImages = entityImageGroups.map(
      ({ entityId, entityName }) => {
        return {
          specialImages: filterEntityImagesByEntityId(entityName).map(
            (entityImage) => {
              return {
                logId: entityImage.researchLogId,
                src: entityImage.src,
              };
            },
          ),
          parentLabel: entityName,
          parentId: entityId,
        } as SpecialEntityImagesPayloadType;
      },
    );

    return organizedEntityImages.toArray();
  } else {
    return [];
  }
};
