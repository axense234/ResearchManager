// React
import { FC } from "react";
// Components
import UpsertResearchActivityOverlayInterface from "./interfaces/UpsertResearchActivityOverlayInterface";
import UpsertResearchPhaseOverlayInterface from "./interfaces/UpsertResearchPhaseOverlayInterface";
import UpsertResearchSessionOverlayInterface from "./interfaces/UpsertResearchSessionOverlayInterface";
// Redux
import { useAppSelector } from "@/hooks";
import { selectUpsertEntityOverlay } from "@/redux/slices/general";

const UpsertEntityOverlay: FC = () => {
  const upsertEntityOverlay = useAppSelector(selectUpsertEntityOverlay);

  switch (upsertEntityOverlay.entityType) {
    case "researchActivity":
      return <UpsertResearchActivityOverlayInterface />;
    case "researchPhase":
      return <UpsertResearchPhaseOverlayInterface />;
    case "researchSession":
      return <UpsertResearchSessionOverlayInterface />;
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
