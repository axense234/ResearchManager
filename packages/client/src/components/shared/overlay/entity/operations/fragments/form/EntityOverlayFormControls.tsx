// React
import { FC } from "react";
// Interfaces
import { EntityOverlayFormControlsProps } from "@/core/interfaces";
// Components
import ResearchActivityOverlayFormControls from "./controls/ResearchActivityOverlayFormControls";
import ResearchPhaseOverlayFormControls from "./controls/ResearchPhaseOverlayFormControls";
import ResearchLogOverlayFormControls from "./controls/ResearchLogOverlayFormControls";
import TagOverlayFormControls from "./controls/TagOverlayFormControls";

const EntityOverlayFormControls: FC<EntityOverlayFormControlsProps> = ({
  dto,
  entityType,
  method,
  dtoUpdateFunction,
}) => {
  switch (entityType) {
    case "researchActivity":
      return (
        <ResearchActivityOverlayFormControls
          dto={dto}
          entityType="researchActivity"
          method={method}
          dtoUpdateFunction={dtoUpdateFunction}
        />
      );
    case "researchPhase":
      return <ResearchPhaseOverlayFormControls />;
    case "researchLog":
      return <ResearchLogOverlayFormControls />;
    case "tag":
      return (
        <TagOverlayFormControls
          dto={dto}
          entityType="tag"
          method={method}
          dtoUpdateFunction={dtoUpdateFunction}
        />
      );
    default:
      throw new Error("Invalid entity type.");
  }
};

export default EntityOverlayFormControls;
