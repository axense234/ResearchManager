// React
import { FC } from "react";
// Interfaces
import { EntityContainerProps } from "@/core/interfaces";
// Components
import ResearchActivityInterface from "./interfaces/ResearchActivityInterface";
import ResearchPhaseInterface from "./interfaces/ResearchPhaseInterface";
import ResearchLogInterface from "./interfaces/ResearchLogInterface";
import ResearchSessionInterface from "./interfaces/ResearchSessionInterface";
import TagInterface from "./interfaces/TagInterface";

const EntityContainer: FC<EntityContainerProps> = ({
  entityType,
  entityId,
  containerType,
  darkMode,
  position,
  isCurrentView,
}) => {
  switch (entityType) {
    case "researchActivity":
      return (
        <ResearchActivityInterface
          containerType={containerType}
          entityId={entityId}
          darkMode={darkMode}
          position={position}
          isCurrentView={isCurrentView}
        />
      );
    case "researchPhase":
      return (
        <ResearchPhaseInterface
          containerType={containerType}
          entityId={entityId}
          darkMode={darkMode}
          position={position}
          isCurrentView={isCurrentView}
        />
      );
    case "researchLog":
      return (
        <ResearchLogInterface
          containerType={containerType}
          entityId={entityId}
          darkMode={darkMode}
          position={position}
          isCurrentView={isCurrentView}
        />
      );
    case "researchSession":
      return (
        <ResearchSessionInterface
          containerType={containerType}
          entityId={entityId}
          darkMode={darkMode}
          position={position}
          isCurrentView={isCurrentView}
        />
      );
    case "tag":
      return (
        <TagInterface
          containerType={containerType}
          entityId={entityId}
          darkMode={darkMode}
          position={position}
          isCurrentView={isCurrentView}
        />
      );
    default:
      throw new Error("Invalid entity type.");
  }
};

export default EntityContainer;
