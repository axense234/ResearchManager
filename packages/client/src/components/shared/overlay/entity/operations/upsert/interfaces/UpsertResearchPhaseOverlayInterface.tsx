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
import { selectEntityOverlay } from "@/redux/slices/general";
import { setEntityOverlay } from "@/redux/slices/general/slice";
import { selectSelectedTagsIds } from "@/redux/slices/tag";
import {
  createResearchPhase,
  selectCreateResearchPhaseDto,
  selectLoadingCreateResearchPhase,
  selectLoadingUpdateResearchPhase,
  selectUpdateResearchPhaseDto,
  updateCreateResearchPhaseDto,
  updateResearchPhase,
  updateUpdateResearchPhaseDto,
} from "@/redux/slices/research/phase";

const UpsertResearchPhaseOverlayInterface: FC = () => {
  const dispatch = useAppDispatch();
  const overlayRef = useRef<HTMLDivElement>(null);

  const entityOverlay = useAppSelector(selectEntityOverlay);
  const selectedTagsIds = useAppSelector(selectSelectedTagsIds);

  const createResearchPhaseDto = useAppSelector(selectCreateResearchPhaseDto);
  const updateResearchPhaseDto = useAppSelector(selectUpdateResearchPhaseDto);

  const loadingCreateResearchPhase = useAppSelector(
    selectLoadingCreateResearchPhase,
  );
  const loadingUpdateResearchPhase = useAppSelector(
    selectLoadingUpdateResearchPhase,
  );

  const loadingUpsertResearchPhase =
    entityOverlay.method === "create"
      ? loadingCreateResearchPhase
      : loadingUpdateResearchPhase;

  const isRequestPending =
    loadingCreateResearchPhase === "PENDING" ||
    loadingUpdateResearchPhase === "PENDING";

  const interfaceTitle =
    entityOverlay.method === "create"
      ? "Create Research Phase"
      : "Update Research Phase";

  const dtoUsed =
    entityOverlay.method === "create"
      ? createResearchPhaseDto
      : updateResearchPhaseDto;

  const dtoUsedUpdateFunction =
    entityOverlay.method === "create"
      ? updateCreateResearchPhaseDto
      : updateUpdateResearchPhaseDto;

  const onResearchPhaseCreateFunction = () => {
    dispatch(
      createResearchPhase({
        ...createResearchPhaseDto,
      }),
    );
  };

  const onResearchPhaseUpdateFunction = () => {
    dispatch(
      updateResearchPhase({
        dto: { ...updateResearchPhaseDto },
        researchPhaseId: entityOverlay.entityId,
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
    entityOverlay.method === "create"
      ? onResearchPhaseCreateFunction
      : onResearchPhaseUpdateFunction;

  useHandleUpsertEntityOverlaySideEffects(
    "researchPhase",
    loadingUpsertResearchPhase,
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
          entityType="researchPhase"
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

export default UpsertResearchPhaseOverlayInterface;
