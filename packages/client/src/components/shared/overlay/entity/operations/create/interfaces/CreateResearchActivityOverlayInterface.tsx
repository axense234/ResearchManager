// React
import { FC, useRef } from "react";
// SCSS
import createEntityOverlayStyles from "@/scss/components/shared/overlay/entity/create/CreateEntityOverlayInterface.module.scss";
// Components and Fragments
import FunctionalButton from "@/components/shared/general/FunctionalButton";
import CloseInterfaceButton from "@/components/shared/general/CloseInterfaceButton";
import EntityOverlayFormControls from "../../fragments/form/EntityOverlayFormControls";
import EntityOverlayTags from "../../fragments/tags/EntityOverlayTags";
import GeneralModal from "@/components/shared/modal/GeneralModal";
// Redux and Hooks
import { useAppDispatch, useAppSelector, useOverlayTransition } from "@/hooks";
import { selectEntityOverlay, selectUserProfile } from "@/redux/slices/general";
import { setEntityOverlay } from "@/redux/slices/general/slice";
import {
  selectCreateDefaultResearchPhase,
  selectCreateResearchActivityDto,
  selectLoadingCreateResearchActivity,
  selectLoadingUpdateResearchActivity,
  updateCreateResearchActivityDto,
} from "@/redux/slices/research/activity";
import { createResearchActivity } from "@/redux/slices/research/activity/thunks";
import {
  selectAddTagModal,
  selectSelectedTagsIds,
  setAddTagModal,
  setSelectedTagsIds,
} from "@/redux/slices/tag";
import { onEditTagFunction } from "@/helpers";

const CreateResearchActivityOverlayInterface: FC = () => {
  const dispatch = useAppDispatch();
  const overlayRef = useRef<HTMLDivElement>(null);

  const userProfile = useAppSelector(selectUserProfile);

  const entityOverlay = useAppSelector(selectEntityOverlay);

  const selectedTagsIds = useAppSelector(selectSelectedTagsIds);

  const addTagModal = useAppSelector(selectAddTagModal);

  const createDefaultResearchPhase = useAppSelector(
    selectCreateDefaultResearchPhase,
  );

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

  const onEditTagFunctionUsed = (type: "remove" | "add") => {
    onEditTagFunction(
      type,
      createResearchActivityDto.tags,
      selectedTagsIds,
      (editedTags: string[]) =>
        updateCreateResearchActivityDto({
          key: "tags",
          value: editedTags,
        }),
      dispatch,
    );
  };

  return (
    <div
      className={createEntityOverlayStyles.overlayContainerWrapper}
      ref={overlayRef}
    >
      <CloseInterfaceButton
        closeInterfaceFunction={() =>
          dispatch(setEntityOverlay({ ...entityOverlay, showOverlay: false }))
        }
        color="pastelRed"
        title="Close Interface"
        size="large"
      />
      <div className={createEntityOverlayStyles.overlayContainer}>
        <GeneralModal type="form" />
        <h5>Create Research Activity</h5>
        <EntityOverlayFormControls
          entityType="researchActivity"
          dto={createResearchActivityDto}
          method="create"
        />
        <hr />
        <EntityOverlayTags
          sourceTagsIds={createResearchActivityDto.tags}
          onAddTagFunction={() => onEditTagFunctionUsed("add")}
          onRemoveTagFunction={() => onEditTagFunctionUsed("remove")}
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
                dto: { ...createResearchActivityDto, userId: userProfile.id },
                createDefaultResearchPhase,
              }),
            )
          }
        />
      </div>
    </div>
  );
};

export default CreateResearchActivityOverlayInterface;
