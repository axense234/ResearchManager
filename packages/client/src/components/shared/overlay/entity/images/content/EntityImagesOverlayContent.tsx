// Interfaces
import { FC, useState } from "react";
import { EntityImagesOverlayContentProps } from "@/core/interfaces";
// Components
import ResearchActivityImagesOverlayContent from "./ResearchActivityImagesOverlayContent";
import ResearchPhaseImagesOverlayContent from "./ResearchPhaseImagesOverlayContent";
// Helpers
import { organizeEntityImagesByEntityNames } from "@/helpers";

const EntityImagesOverlayContent: FC<EntityImagesOverlayContentProps> = ({
  specialEntityType,
  entityImages,
}) => {
  const [currentEntityName, setCurrentEntityName] = useState<string>("");
  const [currentImageSrc, setCurrentImageSrc] = useState<string>(null);
  const [showImageOverlay, setShowImageOverlay] = useState<boolean>(false);

  const entityImagesLogsNames =
    new Set(
      entityImages.map((entityImage) => {
        return entityImage.researchLogName;
      }),
    ) || new Set([]);

  const entityImagesLogsImages =
    organizeEntityImagesByEntityNames(
      entityImages,
      entityImagesLogsNames || new Set([]),
      "researchLog",
    ) || [];

  const entityImagesResearchPhasesNames =
    new Set(
      entityImages.map((entityImage) => {
        return entityImage.researchPhaseName;
      }),
    ) || new Set([]);

  const entityImagesResearchPhasesImages =
    organizeEntityImagesByEntityNames(
      entityImages,
      entityImagesResearchPhasesNames || new Set([]),
      "researchPhase",
    ) || [];

  const currentEntityImages =
    entityImages.filter(
      (entityImage) => entityImage.researchPhaseName === currentEntityName,
    ) || entityImages;

  const currentEntityImage =
    entityImages.find((entityImage) => entityImage.src === currentImageSrc) ||
    entityImages[0];

  if (specialEntityType === "researchPhase") {
    return (
      <ResearchPhaseImagesOverlayContent
        currentImagePayload={currentEntityImage}
        researchLogsImages={entityImagesLogsImages}
        setCurrentImageSrc={setCurrentImageSrc}
        showImageOverlay={showImageOverlay}
        setShowImageOverlay={setShowImageOverlay}
      />
    );
  } else if (specialEntityType === "researchActivity") {
    return (
      <ResearchActivityImagesOverlayContent
        currentImagePayload={currentEntityImage}
        currentImagesPayload={currentEntityImages}
        researchPhasesImages={entityImagesResearchPhasesImages}
        currentResearchPhaseName={currentEntityName}
        setCurrentResearchPhaseName={setCurrentEntityName}
        setCurrentImageSrc={setCurrentImageSrc}
        showImageOverlay={showImageOverlay}
        setShowImageOverlay={setShowImageOverlay}
      />
    );
  }
};

export default EntityImagesOverlayContent;
