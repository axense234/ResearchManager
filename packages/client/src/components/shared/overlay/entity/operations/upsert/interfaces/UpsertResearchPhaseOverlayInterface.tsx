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
import { selectUpsertEntityOverlay } from "@/redux/slices/general";
import {
  setCurrentActivityLogSubject,
  setUpsertEntityOverlay,
} from "@/redux/slices/general/slice";
import { selectSelectedTagsIds } from "@/redux/slices/tag";
import {
  createResearchPhase,
  selectCreateResearchPhaseDto,
  selectLoadingCreateResearchPhase,
  selectLoadingUpdateResearchPhase,
  selectNumberOfUnarchivedResearchPhases,
  selectUpdateResearchPhaseDto,
  updateCreateResearchPhaseDto,
  updateResearchPhase,
  updateUpdateResearchPhaseDto,
} from "@/redux/slices/research/phase";
import { selectResearchActivitiesCustom } from "@/redux/slices/research/activity";

const UpsertResearchPhaseOverlayInterface: FC = () => {
  const dispatch = useAppDispatch();
  const overlayRef = useRef<HTMLDivElement>(null);

  const upsertEntityOverlay = useAppSelector(selectUpsertEntityOverlay);
  const selectedTagsIds = useAppSelector(selectSelectedTagsIds);

  const createResearchPhaseDto = useAppSelector(selectCreateResearchPhaseDto);
  const updateResearchPhaseDto = useAppSelector(selectUpdateResearchPhaseDto);

  const researchActivitiesIds = useAppSelector((state) =>
    selectResearchActivitiesCustom(state, {
      sorted: true,
      unarchived: true,
    }),
  ).map((ra) => ra.id);

  const loadingCreateResearchPhase = useAppSelector(
    selectLoadingCreateResearchPhase,
  );
  const loadingUpdateResearchPhase = useAppSelector(
    selectLoadingUpdateResearchPhase,
  );

  const loadingUpsertResearchPhase =
    upsertEntityOverlay.method === "create"
      ? loadingCreateResearchPhase
      : loadingUpdateResearchPhase;

  const isRequestPending =
    loadingCreateResearchPhase === "PENDING" ||
    loadingUpdateResearchPhase === "PENDING";

  const interfaceTitle =
    upsertEntityOverlay.method === "create"
      ? "Create Research Phase"
      : "Update Research Phase";

  const dtoUsed =
    upsertEntityOverlay.method === "create"
      ? createResearchPhaseDto
      : updateResearchPhaseDto;

  const dtoUsedUpdateFunction =
    upsertEntityOverlay.method === "create"
      ? updateCreateResearchPhaseDto
      : updateUpdateResearchPhaseDto;

  const onResearchPhaseCreateFunction = () => {
    dispatch(setCurrentActivityLogSubject("CREATE"));
    dispatch(
      createResearchPhase({
        ...createResearchPhaseDto,
        researchActivityId:
          createResearchPhaseDto.researchActivityId || researchActivitiesIds[0],
      }),
    );
  };

  const onResearchPhaseUpdateFunction = () => {
    dispatch(setCurrentActivityLogSubject("UPDATE"));
    dispatch(
      updateResearchPhase({
        dto: { ...updateResearchPhaseDto },
        researchPhaseId: upsertEntityOverlay.entityId,
      }),
    );
  };

  const onEditTagFunctionUsed = (type: "remove" | "add") => {
    console.log(dtoUsed);
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
      ? onResearchPhaseCreateFunction
      : onResearchPhaseUpdateFunction;

  useHandleUpsertEntityOverlaySideEffects(
    "researchPhase",
    loadingUpsertResearchPhase,
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
          entityType="researchPhase"
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
          disabled={isRequestPending || researchActivitiesIds.length === 0}
          onHoverContent={interfaceTitle}
          onHoverContentDisabled={
            isRequestPending
              ? "Please wait, we are doing some tech stuff right now."
              : "No Research Activities found. Create some."
          }
          onClickFunction={() => dtoUsedUpsertFunction()}
        />
      </div>
    </div>
  );
};

export default UpsertResearchPhaseOverlayInterface;
