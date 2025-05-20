// React
import { FC, useRef, useState } from "react";
// SCSS
import viewEntityOverlayStyles from "@/scss/components/shared/overlay/entity/view/ViewEntityOverlayInterface.module.scss";
// Components
import CloseInterfaceButton from "@/components/shared/general/CloseInterfaceButton";
import GeneralModal from "@/components/shared/modal/GeneralModal";
import EntityOverlayLogContent from "../../fragments/log/EntityOverlayLogContent";
import EntityOverlayOptions from "../../fragments/EntityOverlayOptions";
import ViewEntityOverlayTags from "../../fragments/ViewEntityOverlayTags";
import EntityOverlayImages from "../../fragments/images/EntityOverlayImages";
// Redux
import { useAppDispatch, useAppSelector, useOverlayTransition } from "@/hooks";
import { closeViewEntityOverlay } from "@/redux/slices/general/slice";
import {
  selectCurrentEntityOverlayPriority,
  selectViewEntityOverlay,
} from "@/redux/slices/general";
import { selectResearchSessionById } from "@/redux/slices/research/session";
import { selectResearchPhaseById } from "@/redux/slices/research/phase";
import { selectResearchActivityById } from "@/redux/slices/research/activity";

const ViewResearchSessionOverlayInterface: FC = () => {
  const dispatch = useAppDispatch();
  const overlayRef = useRef<HTMLDivElement>(null);

  const [showImageOverlay, setShowImageOverlay] = useState<boolean>(false);

  const viewEntityOverlay = useAppSelector(selectViewEntityOverlay);
  const entityOverlayPriority = useAppSelector(
    selectCurrentEntityOverlayPriority,
  );

  const researchSession = useAppSelector((state) =>
    selectResearchSessionById(state, viewEntityOverlay?.entityId),
  );

  const researchPhase = useAppSelector((state) =>
    selectResearchPhaseById(state, researchSession?.researchPhaseId),
  );

  const researchActivity = useAppSelector((state) =>
    selectResearchActivityById(state, researchPhase?.researchActivityId),
  );

  useOverlayTransition(viewEntityOverlay.showOverlay, overlayRef);

  return (
    <div
      className={viewEntityOverlayStyles.overlayContainerWrapper}
      style={{ zIndex: entityOverlayPriority === "view" ? "101" : "100" }}
      ref={overlayRef}
    >
      <CloseInterfaceButton
        closeInterfaceFunction={() => dispatch(closeViewEntityOverlay())}
        color="pastelRed"
        title="Close Interface"
        size="large"
      />
      <div className={viewEntityOverlayStyles.overlayContainer}>
        <GeneralModal type="form" />
        <ViewEntityOverlayTags
          sourceTagsIds={researchSession?.tagsIds}
          tagSize="small"
        />
        <div className={viewEntityOverlayStyles.overlayTitleContainer}>
          <h5>{researchSession?.name}</h5>
          <h6>
            {researchActivity?.name} - {researchPhase?.name}
          </h6>
          <h6>{researchSession?.researchPoints} RP</h6>
        </div>
        <hr />
        <EntityOverlayLogContent
          type="view"
          sectionTitle="Content"
          dto={researchSession}
        />
        <hr />
        <EntityOverlayImages
          type="view"
          entityId={viewEntityOverlay.entityId}
          dto={researchSession}
          showImageOverlay={showImageOverlay}
          setShowImageOverlay={setShowImageOverlay}
        />
      </div>
      <EntityOverlayOptions
        currentStatusType={researchSession?.currentStatusType}
        dtoUsed={{
          ...researchSession,
          currentStatusDate: new Date(researchSession?.currentStatusDate),
        }}
        entityId={viewEntityOverlay.entityId}
        entityType="researchSession"
        type="view"
      />
    </div>
  );
};

export default ViewResearchSessionOverlayInterface;
