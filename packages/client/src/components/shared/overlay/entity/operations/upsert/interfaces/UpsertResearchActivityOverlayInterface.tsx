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
// Helpers
import { onEditTagFunction } from "@/helpers";
// Redux and Hooks
import {
  useAppDispatch,
  useAppSelector,
  useHandleUpsertEntityOverlaySideEffects,
  useOverlayTransition,
} from "@/hooks";
import {
  selectUpsertEntityOverlay,
  selectUserProfile,
} from "@/redux/slices/general";
import {
  setCurrentActivityLogSubject,
  setUpsertEntityOverlay,
} from "@/redux/slices/general/slice";
import {
  selectCreateDefaultResearchPhase,
  selectCreateResearchActivityDto,
  selectLoadingCreateResearchActivity,
  selectLoadingUpdateResearchActivity,
  selectUpdateResearchActivityDto,
  updateCreateResearchActivityDto,
  updateUpdateResearchActivityDto,
} from "@/redux/slices/research/activity";
import {
  createResearchActivity,
  updateResearchActivity,
} from "@/redux/slices/research/activity/thunks";
import { selectSelectedTagsIds } from "@/redux/slices/tag";

const UpsertResearchActivityOverlayInterface: FC = () => {
  const dispatch = useAppDispatch();
  const overlayRef = useRef<HTMLDivElement>(null);

  const userProfile = useAppSelector(selectUserProfile);
  const upsertEntityOverlay = useAppSelector(selectUpsertEntityOverlay);
  const selectedTagsIds = useAppSelector(selectSelectedTagsIds);

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

  const loadingUpsertResearchActivity =
    upsertEntityOverlay.method === "create"
      ? loadingCreateResearchActivity
      : loadingUpdateResearchActivity;

  const isRequestPending =
    loadingCreateResearchActivity === "PENDING" ||
    loadingUpdateResearchActivity === "PENDING";

  const interfaceTitle =
    upsertEntityOverlay.method === "create"
      ? "Create Research Activity"
      : "Update Research Activity";

  const dtoUsed =
    upsertEntityOverlay.method === "create"
      ? createResearchActivityDto
      : updateResearchActivityDto;

  const dtoUsedUpdateFunction =
    upsertEntityOverlay.method === "create"
      ? updateCreateResearchActivityDto
      : updateUpdateResearchActivityDto;

  const onResearchActivityCreateFunction = () => {
    dispatch(setCurrentActivityLogSubject("CREATE"));
    dispatch(
      createResearchActivity({
        dto: { ...createResearchActivityDto, userId: userProfile.id },
        createDefaultResearchPhase,
      }),
    );
  };

  const onResearchActivityUpdateFunction = () => {
    dispatch(setCurrentActivityLogSubject("UPDATE"));
    dispatch(
      updateResearchActivity({
        dto: { ...updateResearchActivityDto, userId: userProfile.id },
        researchActivityId: upsertEntityOverlay.entityId,
      }),
    );
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
    upsertEntityOverlay.method === "create"
      ? onResearchActivityCreateFunction
      : onResearchActivityUpdateFunction;

  useHandleUpsertEntityOverlaySideEffects(
    "researchActivity",
    loadingUpsertResearchActivity,
    upsertEntityOverlay.method,
  );

  useOverlayTransition(upsertEntityOverlay.showOverlay, overlayRef);

  return (
    <div
      className={upsertEntityOverlayStyles.overlayContainerWrapper}
      ref={overlayRef}
    >
      <CloseInterfaceButton
        closeInterfaceFunction={() =>
          dispatch(
            setUpsertEntityOverlay({
              ...upsertEntityOverlay,
              showOverlay: false,
            }),
          )
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
          method={upsertEntityOverlay.method}
          dtoUpdateFunction={dtoUsedUpdateFunction}
        />
        <hr />
        <EntityOverlayTags
          type="upsert"
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
