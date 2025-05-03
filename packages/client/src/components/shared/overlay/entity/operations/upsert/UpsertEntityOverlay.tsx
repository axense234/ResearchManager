// React
import { FC } from "react";
// Components
import UpsertResearchActivityOverlayInterface from "./interfaces/UpsertResearchActivityOverlayInterface";
// Redux
import { useAppSelector } from "@/hooks";
import { selectEntityOverlay } from "@/redux/slices/general";

const UpsertEntityOverlay: FC = () => {
  const entityOverlay = useAppSelector(selectEntityOverlay);

  switch (entityOverlay.entityType) {
    case "researchActivity":
      return <UpsertResearchActivityOverlayInterface />;
    case "researchPhase":
      return null;
    case "researchLog":
      return null;
    default:
      throw new Error("Invalid entity type.");
  }
};

export default UpsertEntityOverlay;
