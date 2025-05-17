// React
import { FC } from "react";
// Interfaces
import { EntityOverlayFormControlsProps } from "@/core/interfaces";
// Components
import ResearchActivityOverlayFormControls from "./controls/ResearchActivityOverlayFormControls";
import ResearchPhaseOverlayFormControls from "./controls/ResearchPhaseOverlayFormControls";
import ResearchLogOverlayFormControls from "./controls/ResearchLogOverlayFormControls";
import TagOverlayFormControls from "./controls/TagOverlayFormControls";
import ResearchSessionOverlayFormControls from "./controls/ResearchSessionOverlayFormControls";

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
      return (
        <ResearchPhaseOverlayFormControls
          dto={dto}
          entityType="researchPhase"
          method={method}
          dtoUpdateFunction={dtoUpdateFunction}
        />
      );
    case "researchSession":
      return (
        <ResearchSessionOverlayFormControls
          dto={dto}
          entityType="researchSession"
          method={method}
          dtoUpdateFunction={dtoUpdateFunction}
        />
      );
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
