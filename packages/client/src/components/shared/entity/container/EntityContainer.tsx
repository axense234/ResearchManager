// Interfaces
import { FC } from "react";
import { EntityContainerProps } from "@/core/interfaces";
// Components
import ResearchActivityInterface from "./interfaces/ResearchActivityInterface";
import ResearchPhaseInterface from "./interfaces/ResearchPhaseInterface";
import ResearchLogInterface from "./interfaces/ResearchLogInterface";
import ResearchSessionInterface from "./interfaces/ResearchSessionInterface";
import TagInterface from "./interfaces/TagInterface";

export const EntityContainer: FC<EntityContainerProps> = ({
  entityType,
  containerType,
  entityId,
}) => {
  let chosenEntityInterface = (
    <ResearchActivityInterface
      containerType={containerType}
      entityId={entityId}
    />
  );

  switch (entityType) {
    case "researchActivity":
      chosenEntityInterface = (
        <ResearchActivityInterface
          containerType={containerType}
          entityId={entityId}
        />
      );
      break;
    case "researchPhase":
      chosenEntityInterface = (
        <ResearchPhaseInterface
          containerType={containerType}
          entityId={entityId}
        />
      );
      break;
    case "researchLog":
      chosenEntityInterface = (
        <ResearchLogInterface
          containerType={containerType}
          entityId={entityId}
        />
      );
      break;
    case "researchSession":
      chosenEntityInterface = (
        <ResearchSessionInterface
          containerType={containerType}
          entityId={entityId}
        />
      );
      break;
    case "tag":
      chosenEntityInterface = (
        <TagInterface containerType={containerType} entityId={entityId} />
      );
      break;
    default:
      throw new Error("Invalid entity type.");
  }

  return chosenEntityInterface;
};
