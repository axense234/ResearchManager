// Interfaces
import { FC } from "react";
import { EntityContainerProps } from "@/core/interfaces";
// Components
import ResearchActivityInterface from "./interfaces/ResearchActivityInterface";
import ResearchPhaseInterface from "./interfaces/ResearchPhaseInterface";
import ResearchLogInterface from "./interfaces/ResearchLogInterface";
import ResearchSessionInterface from "./interfaces/ResearchSessionInterface";
import TagInterface from "./interfaces/TagInterface";

const EntityContainer: FC<EntityContainerProps> = ({
  entityType,
  containerType,
  entityId,
}) => {
  switch (entityType) {
    case "researchActivity":
      return (
        <ResearchActivityInterface
          containerType={containerType}
          entityId={entityId}
        />
      );
    case "researchPhase":
      return (
        <ResearchPhaseInterface
          containerType={containerType}
          entityId={entityId}
        />
      );
    case "researchLog":
      return (
        <ResearchLogInterface
          containerType={containerType}
          entityId={entityId}
        />
      );
    case "researchSession":
      return (
        <ResearchSessionInterface
          containerType={containerType}
          entityId={entityId}
        />
      );
    case "tag":
      return <TagInterface containerType={containerType} entityId={entityId} />;
    default:
      throw new Error("Invalid entity type.");
  }
};

export default EntityContainer;
