// Interfaces
import { FC } from "react";
// Components
import CreateResearchActivityOverlayInterface from "./interfaces/CreateResearchActivityOverlayInterface";
// Redux
import { useAppSelector } from "@/hooks";
import { selectEntityOverlay } from "@/redux/slices/general";

const CreateEntityOverlay: FC = () => {
  const entityOverlay = useAppSelector(selectEntityOverlay);

  switch (entityOverlay.entityType) {
    case "researchActivity":
      return <CreateResearchActivityOverlayInterface />;
    case "researchPhase":
      return null;
    case "researchLog":
      return null;
    default:
      throw new Error("Invalid entity type.");
  }
};

export default CreateEntityOverlay;
