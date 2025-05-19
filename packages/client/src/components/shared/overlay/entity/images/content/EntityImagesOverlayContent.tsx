// React
import { FC, useState } from "react";
// Interfaces
import { EntityImagesOverlayContentProps } from "@/core/interfaces";
// Components
import ResearchActivityImagesOverlayContent from "./ResearchActivityImagesOverlayContent";
import ResearchPhaseImagesOverlayContent from "./ResearchPhaseImagesOverlayContent";
// Helpers
import { organizeEntityImagesByEntityIds } from "@/helpers";
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
  showImageOverlay,
  setShowImageOverlay,
  onRemoveImageFunction,
}) => {
  const dispatch = useAppDispatch();

  const [currentResearchLogId, setCurrentResearchLogId] = useState<string>("");
  const [currentResearchPhaseId, setCurrentResearchPhaseId] =
    useState<string>("");

  const researchPhaseImagesOverlayImages = organizeEntityImagesByEntityIds(
    entityImages || [],
    "researchLog",
  );
  const researchActivityImagesOverlayImages = organizeEntityImagesByEntityIds(
    entityImages || [],
    "researchPhase",
  );

  const currentResearchPhaseImagesOverlayImages =
    researchPhaseImagesOverlayImages.find(
      (logImages) => logImages.parentId === currentResearchLogId,
    );

  const currentResearchActivityImagesOverlayImages =
    researchActivityImagesOverlayImages.find(
      (phaseImages) => phaseImages.parentId === currentResearchPhaseId,
    );

  const onResearchPhaseItemClickFunction = (researchPhaseName: string) => {
    dispatch(
      setResearchPhaseImagesOverlay({
        showOverlay: true,
        viewType,
        parentLabel: researchPhaseName,
        entityImages: entityImages.filter(
          (entityImage) => entityImage.researchPhaseName === researchPhaseName,
        ),
      }),
    );
  };

  if (specialEntityType === "researchPhase") {
    return (
      <ResearchPhaseImagesOverlayContent
        currentResearchLogsImages={currentResearchPhaseImagesOverlayImages}
        researchLogsImages={researchPhaseImagesOverlayImages}
        showImageOverlay={showImageOverlay}
        viewType={viewType}
        onRemoveImageFunction={onRemoveImageFunction}
        setShowImageOverlay={setShowImageOverlay}
        onImageClickFunction={(
          logId: string,
          parentId: string,
          index: number,
        ) => {
          setShowImageOverlay(true);
          setCurrentResearchLogId(parentId);
          dispatch(setChosenImageResearchLogId(logId));
          dispatch(setCurrentEntityImageOverlayCarouselId(index));
        }}
      />
    );
  } else if (specialEntityType === "researchActivity") {
    return (
      <ResearchActivityImagesOverlayContent
        currentResearchPhasesImages={currentResearchActivityImagesOverlayImages}
        researchPhasesImages={researchActivityImagesOverlayImages}
        showImageOverlay={showImageOverlay}
        viewType={viewType}
        setShowImageOverlay={setShowImageOverlay}
        onSectionTitleClickFunction={onResearchPhaseItemClickFunction}
        onRemoveImageFunction={onRemoveImageFunction}
        onImageClickFunction={(
          logId: string,
          parentId: string,
          index: number,
        ) => {
          setShowImageOverlay(true);
          setCurrentResearchPhaseId(parentId);
          dispatch(setChosenImageResearchLogId(logId));
          dispatch(setCurrentEntityImageOverlayCarouselId(index));
        }}
      />
    );
  }
};

export default EntityImagesOverlayContent;
