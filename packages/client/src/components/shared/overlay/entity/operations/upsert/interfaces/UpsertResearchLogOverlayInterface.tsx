// React
import { FC, useRef, useState } from "react";
// SCSS
import upsertEntityOverlayStyles from "@/scss/components/shared/overlay/entity/upsert/UpsertEntityOverlayInterface.module.scss";
// Helpers
import { onEditImageFunction, onEditTagFunction } from "@/helpers";
// Components
import CloseInterfaceButton from "@/components/shared/general/CloseInterfaceButton";
import FunctionalButton from "@/components/shared/general/FunctionalButton";
import GeneralModal from "@/components/shared/modal/GeneralModal";
import EntityOverlayFormControls from "../../fragments/form/EntityOverlayFormControls";
import EntityOverlayTags from "../../fragments/tags/EntityOverlayTags";
import EntityOverlayLogContent from "../../fragments/log/EntityOverlayLogContent";
import EntityOverlayOptions from "../../fragments/EntityOverlayOptions";
import EntityOverlayImages from "../../fragments/images/EntityOverlayImages";
// Redux and Hooks
import {
  useAppDispatch,
  useAppSelector,
  useHandleUpsertEntityOverlaySideEffects,
  useOverlayTransition,
} from "@/hooks";
import {
  selectLoadingUploadImageToCloudinary,
  selectUpsertEntityOverlay,
} from "@/redux/slices/general";
import {
  setCurrentActivityLogSubject,
  setUpsertEntityOverlay,
} from "@/redux/slices/general/slice";
import { selectSelectedTagsIds } from "@/redux/slices/tag";
import {
  selectNumberOfResearchPhases,
  selectResearchPhaseById,
} from "@/redux/slices/research/phase";
import { selectResearchActivityById } from "@/redux/slices/research/activity";
import {
  createResearchLog,
  selectCreateResearchLogDto,
  selectLoadingCreateResearchLog,
  selectLoadingUpdateResearchLog,
  selectUpdateResearchLogDto,
  updateCreateResearchLogDto,
  updateResearchLog,
  updateUpdateResearchLogDto,
} from "@/redux/slices/research/log";

const UpsertResearchLogOverlayInterface: FC = () => {
  const dispatch = useAppDispatch();
  const overlayRef = useRef<HTMLDivElement>(null);

  const [showImageOverlay, setShowImageOverlay] = useState<boolean>(false);

  const upsertEntityOverlay = useAppSelector(selectUpsertEntityOverlay);
  const selectedTagsIds = useAppSelector(selectSelectedTagsIds);

  const numberOfResearchPhases = useAppSelector(selectNumberOfResearchPhases);

  const createResearchLogDto = useAppSelector(selectCreateResearchLogDto);
  const updateResearchLogDto = useAppSelector(selectUpdateResearchLogDto);

  const loadingUploadImageToCloudinary = useAppSelector(
    selectLoadingUploadImageToCloudinary,
  );

  const loadingCreateResearchLog = useAppSelector(
    selectLoadingCreateResearchLog,
  );
  const loadingUpdateResearchSession = useAppSelector(
    selectLoadingUpdateResearchLog,
  );

  const loadingUpsertResearchLog =
    upsertEntityOverlay.method === "create"
      ? loadingCreateResearchLog
      : loadingUpdateResearchSession;

  const isRequestPending =
    loadingCreateResearchLog === "PENDING" ||
    loadingUpdateResearchSession === "PENDING" ||
    loadingUploadImageToCloudinary === "PENDING";

  const entityLogContentSectionTitle =
    upsertEntityOverlay.method === "create" ? "Content" : "Content";

  const interfaceTitle =
    upsertEntityOverlay.method === "create"
      ? "Create Research Log"
      : "Research Log";

  const dtoUsed =
    upsertEntityOverlay.method === "create"
      ? createResearchLogDto
      : updateResearchLogDto;

  const dtoUsedUpdateFunction =
    upsertEntityOverlay.method === "create"
      ? updateCreateResearchLogDto
      : updateUpdateResearchLogDto;

  const onUpserButtonDisabledMessage = isRequestPending
    ? "Please wait."
    : numberOfResearchPhases === 0
      ? "No Research Phases!"
      : "Something is wrong.";

  const researchPhase = useAppSelector((state) =>
    selectResearchPhaseById(state, dtoUsed?.researchPhaseId),
  );
  const researchActivity = useAppSelector((state) =>
    selectResearchActivityById(state, researchPhase?.researchActivityId),
  );

  const onResearchLogCreateFunction = () => {
    dispatch(setCurrentActivityLogSubject("CREATE"));
    dispatch(
      createResearchLog({
        ...createResearchLogDto,
      }),
    );
  };

  const onResearchLogUpdateFunction = () => {
    dispatch(setCurrentActivityLogSubject("UPDATE"));
    dispatch(
      updateResearchLog({
        dto: { ...updateResearchLogDto },
        researchLogId: upsertEntityOverlay.entityId,
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

  const onEditImageFunctionUsed = (
    type: "remove" | "add",
    images?: string[],
  ) => {
    onEditImageFunction(
      type,
      dtoUsed?.imagesSrc,
      images,
      (imagesSrc: string[]) =>
        dtoUsedUpdateFunction({
          key: "imagesSrc",
          value: imagesSrc,
        }),
      dispatch,
    );
  };

  const dtoUsedUpsertFunction =
    upsertEntityOverlay.method === "create"
      ? onResearchLogCreateFunction
      : onResearchLogUpdateFunction;

  useHandleUpsertEntityOverlaySideEffects(
    "researchLog",
    loadingUpsertResearchLog,
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
        <div className={upsertEntityOverlayStyles.overlayTitleContainer}>
          <h5>{interfaceTitle}</h5>
          <h6>
            {researchActivity?.name} - {researchPhase?.name}
          </h6>
          <h6>{dtoUsed?.researchPoints} RP</h6>
        </div>
        <EntityOverlayFormControls
          entityType="researchLog"
          dto={dtoUsed}
          method={upsertEntityOverlay.method}
          dtoUpdateFunction={dtoUsedUpdateFunction}
        />
        <hr />
        <EntityOverlayLogContent
          type="upsert"
          dto={dtoUsed}
          sectionTitle={entityLogContentSectionTitle}
          onContentChange={(e) =>
            dispatch(
              dtoUsedUpdateFunction({
                key: "content",
                value: e.target.value,
              }),
            )
          }
        />
        <hr />
        <EntityOverlayTags
          type="upsert"
          sourceTagsIds={dtoUsed.tags}
          onAddTagFunction={() => onEditTagFunctionUsed("add")}
          onRemoveTagFunction={() => onEditTagFunctionUsed("remove")}
        />
        <hr />
        <EntityOverlayImages
          type="upsert"
          showImageOverlay={showImageOverlay}
          setShowImageOverlay={setShowImageOverlay}
          dto={dtoUsed}
          entityId={upsertEntityOverlay.entityId}
          onAddImagesFunction={(images: string[]) =>
            onEditImageFunctionUsed("add", images)
          }
          onRemoveImagesFunction={(imageSrc: string) => {
            onEditImageFunctionUsed("remove", [imageSrc]);
            setShowImageOverlay(false);
          }}
        />
        <hr />
        <FunctionalButton
          content={
            upsertEntityOverlay.method === "create"
              ? interfaceTitle
              : "Save Changes"
          }
          disabled={isRequestPending || numberOfResearchPhases === 0}
          onHoverContent={interfaceTitle}
          onHoverContentDisabled={onUpserButtonDisabledMessage}
          onClickFunction={() => dtoUsedUpsertFunction()}
          colorScheme={
            upsertEntityOverlay.method === "create" ? "green" : "orange"
          }
        />
      </div>
      {upsertEntityOverlay.method === "update" && (
        <EntityOverlayOptions
          dtoUsed={dtoUsed}
          entityType="researchLog"
          entityId={upsertEntityOverlay.entityId}
          type="upsert"
        />
      )}
    </div>
  );
};

export default UpsertResearchLogOverlayInterface;
