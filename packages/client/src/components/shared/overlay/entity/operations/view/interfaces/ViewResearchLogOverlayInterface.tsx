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
import { selectViewEntityOverlay } from "@/redux/slices/general";
import { selectResearchPhaseById } from "@/redux/slices/research/phase";
import { selectResearchActivityById } from "@/redux/slices/research/activity";
import { selectResearchLogById } from "@/redux/slices/research/log";

const ViewResearchLogOverlayInterface: FC = () => {
  const dispatch = useAppDispatch();
  const overlayRef = useRef<HTMLDivElement>(null);

  const [showImageOverlay, setShowImageOverlay] = useState<boolean>(false);

  const viewEntityOverlay = useAppSelector(selectViewEntityOverlay);

  const researchLog = useAppSelector((state) =>
    selectResearchLogById(state, viewEntityOverlay?.entityId),
  );

  const researchPhase = useAppSelector((state) =>
    selectResearchPhaseById(state, researchLog?.researchPhaseId),
  );

  const researchActivity = useAppSelector((state) =>
    selectResearchActivityById(state, researchPhase?.researchActivityId),
  );

  useOverlayTransition(viewEntityOverlay.showOverlay, overlayRef);

  return (
    <div
      className={viewEntityOverlayStyles.overlayContainerWrapper}
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
          sourceTagsIds={researchLog?.tagsIds}
          tagSize="small"
        />
        <div className={viewEntityOverlayStyles.overlayTitleContainer}>
          <h5>{researchLog?.name}</h5>
          <h6>
            {researchActivity?.name} - {researchPhase?.name}
          </h6>
          <h6>{researchLog?.researchPoints} RP</h6>
        </div>
        <hr />
        <EntityOverlayLogContent
          type="view"
          sectionTitle="Content"
          dto={researchLog}
        />
        <hr />
        <EntityOverlayImages
          type="view"
          entityId={viewEntityOverlay.entityId}
          dto={researchLog}
          showImageOverlay={showImageOverlay}
          setShowImageOverlay={setShowImageOverlay}
        />
      </div>
      <EntityOverlayOptions
        dtoUsed={{ ...researchLog }}
        entityId={viewEntityOverlay.entityId}
        entityType="researchLog"
        type="view"
      />
    </div>
  );
};

export default ViewResearchLogOverlayInterface;
