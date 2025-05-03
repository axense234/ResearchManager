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
import { selectEntityImagesOverlay } from "@/redux/slices/general";
import { setEntityImagesOverlay } from "@/redux/slices/general/slice";

const EntityImagesOverlay: FC<EntityImagesOverlayProps> = ({
  entityName,
  showOverlay,
  closeOverlayFunction,
  entityImages,
  specialEntityType,
}) => {
  const dispatch = useAppDispatch();
  const overlayRef = useRef<HTMLDivElement>(null);

  const entityImagesOverlay = useAppSelector(selectEntityImagesOverlay);

  const useEntityImagesOverlayValues = specialEntityType === "researchActivity";

  const usedEntityName = useEntityImagesOverlayValues
    ? entityImagesOverlay.entityName
    : entityName;

  const usedShowOverlay = useEntityImagesOverlayValues
    ? entityImagesOverlay.showOverlay
    : showOverlay;

  const usedEntityImages = useEntityImagesOverlayValues
    ? entityImagesOverlay.entityImages
    : entityImages;

  const usedEntityType = useEntityImagesOverlayValues
    ? entityImagesOverlay.entityType
    : specialEntityType;

  const usedCloseOverlayFunction = useEntityImagesOverlayValues
    ? () =>
        dispatch(
          setEntityImagesOverlay({
            ...entityImagesOverlay,
            showOverlay: false,
          }),
        )
    : () => closeOverlayFunction();

  useOverlayTransition(usedShowOverlay, overlayRef);

  return (
    <div
      className={entityImagesOverlayStyles.entityImagesOverlayContainer}
      ref={overlayRef}
    >
      <CloseInterfaceButton
        closeInterfaceFunction={usedCloseOverlayFunction}
        color="pastelRed"
        title="Close Overlay"
        size="large"
      />
      <EntityImagesOverlayTitle
        entityName={usedEntityName}
        specialEntityType={usedEntityType}
      />
      <EntityImagesOverlayContent
        specialEntityType={usedEntityType}
        entityImages={usedEntityImages || []}
      />
    </div>
  );
};

export default EntityImagesOverlay;
