// React
import { FC } from "react";
// Components
import UpsertResearchActivityOverlayInterface from "./interfaces/UpsertResearchActivityOverlayInterface";
import UpsertResearchPhaseOverlayInterface from "./interfaces/UpsertResearchPhaseOverlayInterface";
// Redux
import { useAppSelector } from "@/hooks";
import { selectEntityOverlay } from "@/redux/slices/general";

const UpsertEntityOverlay: FC = () => {
  const entityOverlay = useAppSelector(selectEntityOverlay);

  switch (entityOverlay.entityType) {
    case "researchActivity":
      return <UpsertResearchActivityOverlayInterface />;
    case "researchPhase":
      return <UpsertResearchPhaseOverlayInterface />;
    case "researchLog":
      return null;
    case "tag":
      throw new Error(
        "Entity Overlay should never allow the tag entity type since it is automatically placed in the layout.",
      );
    default:
      throw new Error("Invalid entity type.");
  }
};

export default UpsertEntityOverlay;
