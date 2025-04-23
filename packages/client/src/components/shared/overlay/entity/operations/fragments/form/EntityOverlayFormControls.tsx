// Interfaces
import { FC } from "react";
import { EntityOverlayFormControlsProps } from "@/core/interfaces";
// Components
import ResearchActivityOverlayFormControls from "./controls/ResearchActivityOverlayFormControls";
import ResearchPhaseOverlayFormControls from "./controls/ResearchPhaseOverlayFormControls";
import ResearchLogOverlayFormControls from "./controls/ResearchLogOverlayFormControls";

const EntityOverlayFormControls: FC<EntityOverlayFormControlsProps> = ({
  dto,
  entityType,
  method,
}) => {
  switch (entityType) {
    case "researchActivity":
      return (
        <ResearchActivityOverlayFormControls
          dto={dto}
          entityType="researchActivity"
          method={method}
        />
      );
    case "researchPhase":
      return <ResearchPhaseOverlayFormControls />;
    case "researchLog":
      return <ResearchLogOverlayFormControls />;
    default:
      throw new Error("Invalid entity type.");
  }
};

export default EntityOverlayFormControls;
