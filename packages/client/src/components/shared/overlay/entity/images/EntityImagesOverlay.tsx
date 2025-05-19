// React
import { FC, useRef, useState } from "react";
// Interfaces
import { EntityImagesOverlayProps } from "@/core/interfaces";
// SCSS
import entityImagesOverlayStyles from "@/scss/components/shared/overlay/entity/images/EntityImagesOverlay.module.scss";
// Hooks
import { useAppDispatch, useAppSelector, useOverlayTransition } from "@/hooks";
// Components
import CloseInterfaceButton from "../../../general/CloseInterfaceButton";
import EntityImagesOverlayContent from "./content/EntityImagesOverlayContent";
import EntityImagesOverlayTitle from "./EntityImagesOverlayTitle";
// Redux
import {
  selectChosenImageResearchLogId,
  selectResearchActivityImagesOverlay,
  selectResearchPhaseImagesOverlay,
} from "@/redux/slices/general";
import {
  setResearchActivityImagesOverlay,
  setResearchPhaseImagesOverlay,
} from "@/redux/slices/general/slice";
import {
  selectResearchLogById,
  updateResearchLog,
} from "@/redux/slices/research/log";

const EntityImagesOverlay: FC<EntityImagesOverlayProps> = ({
  specialEntityType,
}) => {
  const dispatch = useAppDispatch();
  const overlayRef = useRef<HTMLDivElement>(null);

  const [showImageOverlay, setShowImageOverlay] = useState<boolean>(false);

  const researchActivityImagesOverlay = useAppSelector(
    selectResearchActivityImagesOverlay,
  );
  const researchPhaseImagesOverlay = useAppSelector(
    selectResearchPhaseImagesOverlay,
  );

  const chosenImageResearchLogId = useAppSelector(
    selectChosenImageResearchLogId,
  );

  const chosenImageResearchLog = useAppSelector((state) =>
    selectResearchLogById(state, chosenImageResearchLogId),
  );

  const usedImagesOverlay =
    specialEntityType === "researchActivity"
      ? researchActivityImagesOverlay
      : researchPhaseImagesOverlay;

  const usedEntityImagesOverlayUpdater =
    specialEntityType === "researchActivity"
      ? setResearchActivityImagesOverlay
      : setResearchPhaseImagesOverlay;

  useOverlayTransition(usedImagesOverlay.showOverlay, overlayRef);

  return (
    <div
      className={entityImagesOverlayStyles.entityImagesOverlayContainer}
      ref={overlayRef}
    >
      <CloseInterfaceButton
        closeInterfaceFunction={() =>
          dispatch(
            usedEntityImagesOverlayUpdater({
              ...usedImagesOverlay,
              showOverlay: false,
            }),
          )
        }
        color="pastelRed"
        title="Close Overlay"
        size="large"
      />
      <div className={entityImagesOverlayStyles.entityImagesOverlayContent}>
        <EntityImagesOverlayTitle entityName={usedImagesOverlay.parentLabel} />
        <EntityImagesOverlayContent
          specialEntityType={specialEntityType}
          entityImages={usedImagesOverlay.entityImages || []}
          viewType={usedImagesOverlay.viewType}
          showImageOverlay={showImageOverlay}
          setShowImageOverlay={setShowImageOverlay}
          onRemoveImageFunction={(givenImageSrc: string) => {
            dispatch(
              updateResearchLog({
                dto: {
                  imagesSrc: chosenImageResearchLog?.imagesSrc?.filter(
                    (imageSrc) => imageSrc !== givenImageSrc,
                  ),
                },
                researchLogId: chosenImageResearchLogId,
              }),
            );
            setShowImageOverlay(false);
            dispatch(
              usedEntityImagesOverlayUpdater({
                ...usedImagesOverlay,
                entityImages: usedImagesOverlay?.entityImages?.filter(
                  (entityImage) => entityImage.src !== givenImageSrc,
                ),
              }),
            );
          }}
        />
      </div>
    </div>
  );
};

export default EntityImagesOverlay;
