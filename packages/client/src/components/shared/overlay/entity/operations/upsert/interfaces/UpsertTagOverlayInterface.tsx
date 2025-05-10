// React
import { FC, useRef } from "react";
// SCSS
import upsertEntityOverlayStyles from "@/scss/components/shared/overlay/entity/upsert/UpsertEntityOverlayInterface.module.scss";
// Components and Fragments
import FunctionalButton from "@/components/shared/general/FunctionalButton";
import CloseInterfaceButton from "@/components/shared/general/CloseInterfaceButton";
import EntityOverlayFormControls from "../../fragments/form/EntityOverlayFormControls";
import GeneralModal from "@/components/shared/modal/GeneralModal";
import EntityOverlayTagPreview from "../../fragments/tags/EntityOverlayTagPreview";
// Redux and Hooks
import {
  useAppDispatch,
  useAppSelector,
  useHandleUpsertEntityOverlaySideEffects,
  useOverlayTransition,
} from "@/hooks";
import {
  selectUpsertTagOverlay,
  selectUserProfile,
} from "@/redux/slices/general";
import { closeUpsertTagOverlay } from "@/redux/slices/general/slice";
import {
  selectCreateTagDto,
  selectLoadingCreateTag,
  selectLoadingUpdateTag,
  selectUpdateTagDto,
  updateCreateTagDto,
  updateUpdateTagDto,
} from "@/redux/slices/tag";
import { createTag, updateTag } from "@/redux/slices/tag/thunks";

const UpsertTagOverlayInterface: FC = () => {
  const dispatch = useAppDispatch();
  const overlayRef = useRef<HTMLDivElement>(null);

  const userProfile = useAppSelector(selectUserProfile);
  const upsertTagOverlay = useAppSelector(selectUpsertTagOverlay);

  const createTagDto = useAppSelector(selectCreateTagDto);
  const updateTagDto = useAppSelector(selectUpdateTagDto);

  const loadingCreateTag = useAppSelector(selectLoadingCreateTag);
  const loadingUpdateTag = useAppSelector(selectLoadingUpdateTag);

  const loadingUpsertTag =
    upsertTagOverlay.method === "create" ? loadingCreateTag : loadingUpdateTag;

  const isRequestPending =
    loadingCreateTag === "PENDING" || loadingUpdateTag === "PENDING";

  const interfaceTitle =
    upsertTagOverlay.method === "create" ? "Create Tag" : "Update Tag";

  const dtoUsed =
    upsertTagOverlay.method === "create" ? createTagDto : updateTagDto;

  const dtoUsedUpdateFunction =
    upsertTagOverlay.method === "create"
      ? updateCreateTagDto
      : updateUpdateTagDto;

  const onTagCreateFunction = () => {
    dispatch(createTag({ ...createTagDto, userId: userProfile.id }));
  };

  const onTagUpdateFunction = () => {
    dispatch(
      updateTag({
        dto: { ...updateTagDto, userId: userProfile.id },
        tagId: upsertTagOverlay.entityId,
      }),
    );
  };

  const dtoUsedUpsertFunction =
    upsertTagOverlay.method === "create"
      ? onTagCreateFunction
      : onTagUpdateFunction;

  useHandleUpsertEntityOverlaySideEffects(
    "tag",
    loadingUpsertTag,
    upsertTagOverlay.method,
  );

  useOverlayTransition(upsertTagOverlay.showOverlay, overlayRef);

  return (
    <div
      className={upsertEntityOverlayStyles.overlayContainerWrapper}
      ref={overlayRef}
    >
      <CloseInterfaceButton
        closeInterfaceFunction={() => dispatch(closeUpsertTagOverlay())}
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
          method={upsertTagOverlay.method}
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
