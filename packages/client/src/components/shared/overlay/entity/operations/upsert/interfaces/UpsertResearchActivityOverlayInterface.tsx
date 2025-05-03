// React
import { FC, useRef } from "react";
// SCSS
import upsertEntityOverlayStyles from "@/scss/components/shared/overlay/entity/upsert/UpsertEntityOverlayInterface.module.scss";
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
  selectNumberOfResearchActivities,
  selectUpdateResearchActivityDto,
  setCreateResearchActivityDto,
  setCurrentResearchActivityIndex,
  updateCreateResearchActivityDto,
  updateUpdateResearchActivityDto,
} from "@/redux/slices/research/activity";
import {
  createResearchActivity,
  updateResearchActivity,
} from "@/redux/slices/research/activity/thunks";
import { selectSelectedTagsIds } from "@/redux/slices/tag";
// Helpers
import { onEditTagFunction } from "@/helpers";
import { defaultCreateResearchActivityDto } from "@/data/redux";

const UpsertResearchActivityOverlayInterface: FC = () => {
  const dispatch = useAppDispatch();
  const overlayRef = useRef<HTMLDivElement>(null);

  const userProfile = useAppSelector(selectUserProfile);
  const entityOverlay = useAppSelector(selectEntityOverlay);
  const selectedTagsIds = useAppSelector(selectSelectedTagsIds);

  const numberOfResearchActivities = useAppSelector(
    selectNumberOfResearchActivities,
  );

  const createDefaultResearchPhase = useAppSelector(
    selectCreateDefaultResearchPhase,
  );

  const createResearchActivityDto = useAppSelector(
    selectCreateResearchActivityDto,
  );
  const updateResearchActivityDto = useAppSelector(
    selectUpdateResearchActivityDto,
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

  const interfaceTitle =
    entityOverlay.method === "create"
      ? "Create Research Activity"
      : "Update Research Activity";

  const dtoUsed =
    entityOverlay.method === "create"
      ? createResearchActivityDto
      : updateResearchActivityDto;

  const dtoUsedUpdateFunction =
    entityOverlay.method === "create"
      ? updateCreateResearchActivityDto
      : updateUpdateResearchActivityDto;

  const onResearchActivityCreateFunction = () => {
    dispatch(
      createResearchActivity({
        dto: { ...createResearchActivityDto, userId: userProfile.id },
        createDefaultResearchPhase,
      }),
    );
    dispatch(setEntityOverlay({ ...entityOverlay, showOverlay: false }));
    dispatch(setCurrentResearchActivityIndex(numberOfResearchActivities + 1));
    dispatch(
      setCreateResearchActivityDto({ ...defaultCreateResearchActivityDto }),
    );
  };

  const onResearchActivityUpdateFunction = () => {
    dispatch(
      updateResearchActivity({
        dto: { ...updateResearchActivityDto, userId: userProfile.id },
        researchActivityId: entityOverlay.entityId,
      }),
    );
    dispatch(setEntityOverlay({ ...entityOverlay, showOverlay: false }));
  };

  const onEditTagFunctionUsed = (type: "remove" | "add") => {
    onEditTagFunction(
      type,
      dtoUsed.tags,
      selectedTagsIds,
      (editedTags: string[]) =>
        dtoUsedUpdateFunction({
          key: "tags",
          value: editedTags,
        }),
      dispatch,
    );
  };

  const dtoUsedUpsertFunction =
    entityOverlay.method === "create"
      ? onResearchActivityCreateFunction
      : onResearchActivityUpdateFunction;

  useOverlayTransition(entityOverlay.showOverlay, overlayRef);

  return (
    <div
      className={upsertEntityOverlayStyles.overlayContainerWrapper}
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
      <div className={upsertEntityOverlayStyles.overlayContainer}>
        <GeneralModal type="form" />
        <h5>{interfaceTitle}</h5>
        <EntityOverlayFormControls
          entityType="researchActivity"
          dto={dtoUsed}
          method={entityOverlay.method}
          dtoUpdateFunction={dtoUsedUpdateFunction}
        />
        <hr />
        <EntityOverlayTags
          sourceTagsIds={dtoUsed.tags}
          onAddTagFunction={() => onEditTagFunctionUsed("add")}
          onRemoveTagFunction={() => onEditTagFunctionUsed("remove")}
        />
        <hr />
        <FunctionalButton
          content={interfaceTitle}
          disabled={isRequestPending}
          onHoverContent={interfaceTitle}
          onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
          onClickFunction={() => dtoUsedUpsertFunction()}
        />
      </div>
    </div>
  );
};

export default UpsertResearchActivityOverlayInterface;
