// React
import { FC, useRef } from "react";
// SCSS
import viewEntityOverlayStyles from "@/scss/components/shared/overlay/entity/view/ViewEntityOverlayInterface.module.scss";
// Components
import CloseInterfaceButton from "@/components/shared/general/CloseInterfaceButton";
import GeneralModal from "@/components/shared/modal/GeneralModal";
import EntityOverlayLogContent from "../../fragments/log/EntityOverlayLogContent";
import TagsList from "@/components/shared/entity/tag/TagsList";
import EntityOverlayOptions from "../../fragments/EntityOverlayOptions";
// Redux
import { useAppDispatch, useAppSelector, useOverlayTransition } from "@/hooks";
import { closeViewEntityOverlay } from "@/redux/slices/general/slice";
import { selectViewEntityOverlay } from "@/redux/slices/general";
import { selectResearchSessionById } from "@/redux/slices/research/session";
import EntityOverlayTags from "../../fragments/tags/EntityOverlayTags";
import EntityContainerTags from "@/components/shared/entity/container/fragments/EntityContainerTags";

const ViewResearchSessionOverlayInterface: FC = () => {
  const dispatch = useAppDispatch();
  const overlayRef = useRef<HTMLDivElement>(null);

  const viewEntityOverlay = useAppSelector(selectViewEntityOverlay);

  const researchSession = useAppSelector((state) =>
    selectResearchSessionById(state, viewEntityOverlay?.entityId),
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
        <EntityContainerTags
          sourceTagsIds={researchSession?.tagsIds}
          containerType="entity"
          tagSize="small"
        />
        <h5>Research Session</h5>
        <EntityOverlayLogContent
          type="view"
          sectionTitle="Content"
          dto={researchSession}
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
