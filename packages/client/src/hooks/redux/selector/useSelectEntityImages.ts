// Types
import { EntityImagePayloadType, EntityViewType } from "@/core/types";
// Redux
import {
  useSelectResearchActivityImages,
  useSelectResearchPhaseImages,
} from "@/hooks";

export const useSelectEntityImages = (
  specialEntityId: string,
  specialEntityType: "researchActivity" | "researchPhase",
  viewType: EntityViewType,
): EntityImagePayloadType[] => {
  let entityImages: EntityImagePayloadType[] = [];

  switch (specialEntityType) {
    case "researchPhase":
      entityImages = useSelectResearchPhaseImages(specialEntityId, viewType);
      return entityImages;
    case "researchActivity":
      entityImages = useSelectResearchActivityImages(specialEntityId, viewType);
      return entityImages;
    default:
      throw new Error(
        "Entity has nothing to do with Images and/or doesn't exist.",
      );
  }
};
