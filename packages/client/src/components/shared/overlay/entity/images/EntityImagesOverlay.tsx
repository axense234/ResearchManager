// React
import { FC, useRef } from "react";
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
  selectResearchActivityImagesOverlay,
  selectResearchPhaseImagesOverlay,
} from "@/redux/slices/general";
import {
  setResearchActivityImagesOverlay,
  setResearchPhaseImagesOverlay,
} from "@/redux/slices/general/slice";

const EntityImagesOverlay: FC<EntityImagesOverlayProps> = ({
  specialEntityType,
}) => {
  const dispatch = useAppDispatch();
  const overlayRef = useRef<HTMLDivElement>(null);

  const researchActivityImagesOverlay = useAppSelector(
    selectResearchActivityImagesOverlay,
  );
  const researchPhaseImagesOverlay = useAppSelector(
    selectResearchPhaseImagesOverlay,
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
        <EntityImagesOverlayTitle entityName={usedImagesOverlay.entityName} />
        <EntityImagesOverlayContent
          specialEntityType={specialEntityType}
          entityImages={usedImagesOverlay.entityImages || []}
        />
      </div>
    </div>
  );
};

export default EntityImagesOverlay;
