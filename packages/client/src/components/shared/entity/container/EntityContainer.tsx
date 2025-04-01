// Interfaces
import { FC } from "react";
import { EntityContainerProps } from "@/core/interfaces";
// Entity Interfaces
import ResearchActivityInterface from "./interfaces/ResearchActivityInterface";
import ResearchPhaseInterface from "./interfaces/ResearchPhaseInterface";
import ResearchLogInterface from "./interfaces/ResearchLogInterface";
import ResearchSessionInterface from "./interfaces/ResearchSessionInterface";
import TagInterface from "./interfaces/TagInterface";

const EntityContainer: FC<EntityContainerProps> = ({
  entityType,
  containerType,
}) => {
  switch (entityType) {
    case "researchActivity":
      return <ResearchActivityInterface containerType={containerType} />;
    case "researchPhase":
      return <ResearchPhaseInterface containerType={containerType} />;
    case "researchLog":
      return <ResearchLogInterface containerType={containerType} />;
    case "researchSession":
      return <ResearchSessionInterface containerType={containerType} />;
    case "tag":
      return <TagInterface containerType={containerType} />;
    default:
      throw new Error("Invalid entity type.");
  }
};

export default EntityContainer;
