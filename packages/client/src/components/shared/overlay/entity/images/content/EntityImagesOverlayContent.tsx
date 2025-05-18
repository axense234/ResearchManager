// React
import { FC, useState } from "react";
// Interfaces
import { EntityImagesOverlayContentProps } from "@/core/interfaces";
// Components
import ResearchActivityImagesOverlayContent from "./ResearchActivityImagesOverlayContent";
import ResearchPhaseImagesOverlayContent from "./ResearchPhaseImagesOverlayContent";
// Helpers
import { organizeEntityImagesByEntityNames } from "@/helpers";
// Redux
import { useAppDispatch } from "@/hooks";
import {
  setChosenImageResearchLogId,
  setCurrentEntityImageOverlayCarouselId,
  setResearchPhaseImagesOverlay,
} from "@/redux/slices/general/slice";

const EntityImagesOverlayContent: FC<EntityImagesOverlayContentProps> = ({
  specialEntityType,
  entityImages,
  viewType,
}) => {
  const dispatch = useAppDispatch();

  const [showImageOverlay, setShowImageOverlay] = useState<boolean>(false);

  const [currentResearchLogName, setCurrentResearchLogName] =
    useState<string>("Default Name");

  const [currentResearchPhaseName, setCurrentResearchPhaseName] =
    useState<string>("Default Name");

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

  const currentResearchLogImages = entityImagesLogsImages.find(
    (logsImages) => logsImages.entityName === currentResearchLogName,
  );
  const currentResearchPhaseImages = entityImagesResearchPhasesImages.find(
    (phasesImages) => phasesImages.entityName === currentResearchPhaseName,
  );

  const onResearchPhaseItemClickFunction = (entityName: string) => {
    dispatch(
      setResearchPhaseImagesOverlay({
        showOverlay: true,
        entityName,
        entityImages: entityImages.filter(
          (entityImage) => entityImage.researchPhaseName === entityName,
        ),
        viewType,
      }),
    );
  };

  if (specialEntityType === "researchPhase") {
    return (
      <ResearchPhaseImagesOverlayContent
        currentResearchLogsImages={currentResearchLogImages}
        researchLogsImages={entityImagesLogsImages}
        showImageOverlay={showImageOverlay}
        setShowImageOverlay={setShowImageOverlay}
        onImageClickFunction={(parentName: string, index: number) => {
          setCurrentResearchLogName(parentName);
          setShowImageOverlay(true);
          dispatch(setCurrentEntityImageOverlayCarouselId(index));
        }}
        viewType={viewType}
      />
    );
  } else if (specialEntityType === "researchActivity") {
    return (
      <ResearchActivityImagesOverlayContent
        currentResearchPhasesImages={currentResearchPhaseImages}
        researchPhasesImages={entityImagesResearchPhasesImages}
        showImageOverlay={showImageOverlay}
        setShowImageOverlay={setShowImageOverlay}
        onSectionTitleClickFunction={onResearchPhaseItemClickFunction}
        viewType={viewType}
        onImageClickFunction={(parentName: string, index: number) => {
          setCurrentResearchPhaseName(parentName);
          setShowImageOverlay(true);
          dispatch(setCurrentEntityImageOverlayCarouselId(index));
        }}
      />
    );
  }
};

export default EntityImagesOverlayContent;
