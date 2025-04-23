// React
import { FC, useRef } from "react";
// SCSS
import createEntityOverlayStyles from "@/scss/components/shared/overlay/entity/create/CreateEntityOverlayInterface.module.scss";
// Components and Fragments
import FunctionalButton from "@/components/shared/general/FunctionalButton";
import ExitOverlayButton from "@/components/shared/overlay/ExitOverlayButton";
import EntityOverlayFormControls from "../../fragments/form/EntityOverlayFormControls";
import EntityOverlayTags from "../../fragments/EntityOverlayTags";
// Redux and Hooks
import { useAppDispatch, useAppSelector, useOverlayTransition } from "@/hooks";
import { selectEntityOverlay, selectUserProfile } from "@/redux/slices/general";
import { setEntityOverlay } from "@/redux/slices/general/slice";
import {
  selectCreateResearchActivityDto,
  selectLoadingCreateResearchActivity,
  selectLoadingUpdateResearchActivity,
} from "@/redux/slices/research/activity";
import { createResearchActivity } from "@/redux/slices/research/activity/thunks";

const CreateResearchActivityOverlayInterface: FC = () => {
  const dispatch = useAppDispatch();
  const overlayRef = useRef<HTMLDivElement>(null);

  const userProfile = useAppSelector(selectUserProfile);

  const entityOverlay = useAppSelector(selectEntityOverlay);

  const createResearchActivityDto = useAppSelector(
    selectCreateResearchActivityDto,
  );

  const loadingCreateResearchActivity = useAppSelector(
    selectLoadingCreateResearchActivity,
  );
  const loadingUpdateResearchActivity = useAppSelector(
    selectLoadingUpdateResearchActivity,
  );

  const isRequestPending =
    loadingCreateResearchActivity === "PENDING" ||
    loadingUpdateResearchActivity === "PENDING";

  useOverlayTransition(entityOverlay.showOverlay, overlayRef);

  return (
    <div
      className={createEntityOverlayStyles.overlayContainerWrapper}
      ref={overlayRef}
    >
      <ExitOverlayButton
        closeOverlayFunction={() =>
          dispatch(setEntityOverlay({ ...entityOverlay, showOverlay: false }))
        }
      />
      <div className={createEntityOverlayStyles.overlayContainer}>
        <h5>Create Research Activity</h5>
        <EntityOverlayFormControls
          entityType="researchActivity"
          dto={createResearchActivityDto}
          method="create"
        />
        <hr />
        <EntityOverlayTags
          dto={createResearchActivityDto}
          entityType="researchActivity"
          method="create"
        />
        <hr />
        <FunctionalButton
          content="Create Research Activity"
          disabled={isRequestPending}
          onHoverContent="Create Research Activity"
          onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
          onClickFunction={() =>
            dispatch(
              createResearchActivity({
                ...createResearchActivityDto,
                userId: userProfile.id,
              }),
            )
          }
        />
      </div>
    </div>
  );
};

export default CreateResearchActivityOverlayInterface;
