// React
import { FC, useRef } from "react";
// SCSS
import upsertEntityOverlayStyles from "@/scss/components/shared/overlay/entity/upsert/UpsertEntityOverlayInterface.module.scss";
// Components and Fragments
import FunctionalButton from "@/components/shared/general/FunctionalButton";
import CloseInterfaceButton from "@/components/shared/general/CloseInterfaceButton";
import EntityOverlayFormControls from "../../fragments/form/EntityOverlayFormControls";
import GeneralModal from "@/components/shared/modal/GeneralModal";
// Redux and Hooks
import {
  useAppDispatch,
  useAppSelector,
  useHandleUpsertEntityOverlaySideEffects,
  useOverlayTransition,
} from "@/hooks";
import { selectEntityOverlay, selectUserProfile } from "@/redux/slices/general";
import { setEntityOverlay } from "@/redux/slices/general/slice";
import {
  updateCreateResearchActivityDto,
  updateUpdateResearchActivityDto,
} from "@/redux/slices/research/activity";
import {
  selectCreateTagDto,
  selectLoadingCreateTag,
  selectLoadingUpdateTag,
  selectUpdateTagDto,
  updateCreateTagDto,
  updateUpdateTagDto,
} from "@/redux/slices/tag";
import { createTag, updateTag } from "@/redux/slices/tag/thunks";
import EntityOverlayTagPreview from "../../fragments/tags/EntityOverlayTagPreview";

const UpsertTagOverlayInterface: FC = () => {
  const dispatch = useAppDispatch();
  const overlayRef = useRef<HTMLDivElement>(null);

  const userProfile = useAppSelector(selectUserProfile);
  const entityOverlay = useAppSelector(selectEntityOverlay);

  const createTagDto = useAppSelector(selectCreateTagDto);
  const updateTagDto = useAppSelector(selectUpdateTagDto);

  const loadingCreateTag = useAppSelector(selectLoadingCreateTag);
  const loadingUpdateTag = useAppSelector(selectLoadingUpdateTag);

  const loadingUpsertTag =
    entityOverlay.method === "create" ? loadingCreateTag : loadingUpdateTag;

  const isRequestPending =
    loadingCreateTag === "PENDING" || loadingUpdateTag === "PENDING";

  const interfaceTitle =
    entityOverlay.method === "create" ? "Create Tag" : "Update Tag";

  const dtoUsed =
    entityOverlay.method === "create" ? createTagDto : updateTagDto;

  const dtoUsedUpdateFunction =
    entityOverlay.method === "create" ? updateCreateTagDto : updateUpdateTagDto;

  const onTagCreateFunction = () => {
    dispatch(createTag({ ...createTagDto, userId: userProfile.id }));
  };

  const onTagUpdateFunction = () => {
    dispatch(
      updateTag({
        dto: { ...updateTagDto, userId: userProfile.id },
        tagId: entityOverlay.entityId,
      }),
    );
  };

  const dtoUsedUpsertFunction =
    entityOverlay.method === "create"
      ? onTagCreateFunction
      : onTagUpdateFunction;

  useHandleUpsertEntityOverlaySideEffects(
    "tag",
    loadingUpsertTag,
    entityOverlay.method,
  );

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
          entityType="tag"
          dto={dtoUsed}
          method={entityOverlay.method}
          dtoUpdateFunction={dtoUsedUpdateFunction}
        />
        <hr />
        <EntityOverlayTagPreview dto={dtoUsed} />
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

export default UpsertTagOverlayInterface;
