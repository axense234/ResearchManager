// Types
import {
  EntityImagePayloadType,
  EntityViewType,
  ResearchActivityRedux,
  ResearchPhaseRedux,
} from "@/core/types";
// Redux
import {
  useSelectResearchActivityImages,
  useSelectResearchPhaseImages,
} from "@/hooks";

export const useSelectEntityImages = (
  specialEntity: ResearchActivityRedux | ResearchPhaseRedux,
  specialEntityType: "researchActivity" | "researchPhase",
  viewType: EntityViewType,
): EntityImagePayloadType[] => {
  const researchPhase = specialEntity as ResearchPhaseRedux;
  const researchActivity = specialEntity as ResearchActivityRedux;

  let entityImages: EntityImagePayloadType[] = [];

  switch (specialEntityType) {
    case "researchPhase":
      entityImages = useSelectResearchPhaseImages(researchPhase, viewType);
      return entityImages;
    case "researchActivity":
      entityImages = useSelectResearchActivityImages(
        researchActivity,
        viewType,
      );
      return entityImages;
    default:
      throw new Error(
        "Entity has nothing to do with Images and/or doesn't exist.",
      );
  }
};
