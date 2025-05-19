// React
import { FC, useEffect } from "react";
// Interfaces
import { EntityContainerInterfaceProps } from "@/core/interfaces";
// Types
import { ResearchPhaseRedux } from "@/core/types";
// SCSS
import entityContainerStyles from "@/scss/components/shared/entity/container/EntityContainer.module.scss";
// Fragments
import EntityContainerTags from "../fragments/EntityContainerTags";
import EntityContainerLabel from "../fragments/EntityContainerLabel";
import EntityContainerOptions from "../fragments/EntityContainerOptions";
// Helpers
import { onEditTagFunction } from "@/helpers";
// Wrapper
import EntityContainerInterfaceWrapper from "../EntityContainerInterfaceWrapper";
// Redux and Hooks
import {
  useAppDispatch,
  useAppSelector,
  useCalculateEntityResearchPoints,
  useSelectEntity,
} from "@/hooks";
// Data
import { mainWhiteColor } from "@/data/general";
// Redux
import {
  handleResearchPhaseCarouselStepDirection,
  handleResearchPhaseExampleCarouselStepDirection,
  selectCurrentResearchPhaseExampleIndex,
  selectCurrentResearchPhaseIndex,
  selectNumberOfUnarchivedResearchPhases,
  setUpdateResearchPhaseDto,
  updateResearchPhase,
} from "@/redux/slices/research/phase";
import { selectSelectedTagsIds } from "@/redux/slices/tag";
import {
  setCurrentActivityLogSubject,
  setDeleteEntityOverlay,
  setUpsertEntityOverlay,
} from "@/redux/slices/general/slice";
import { setCreateResearchSessionDto } from "@/redux/slices/research/session";
import {
  defaultCreateResearchLogDto,
  defaultCreateResearchSessionDto,
} from "@/data/redux";
import { setCreateResearchLogDto } from "@/redux/slices/research/log";

const ResearchPhaseInterface: FC<EntityContainerInterfaceProps> = ({
  containerType,
  entityId,
  darkMode,
  isCurrentView,
  position,
}) => {
  const dispatch = useAppDispatch();

  const selectedTagsIds = useAppSelector(selectSelectedTagsIds);

  const currentResearchPhaseExampleIndex = useAppSelector(
    selectCurrentResearchPhaseExampleIndex,
  );
  const currentResearchPhaseIndex = useAppSelector(
    selectCurrentResearchPhaseIndex,
  );

  const usedOnDirectionButtonClick =
    containerType === "example"
      ? handleResearchPhaseExampleCarouselStepDirection
      : handleResearchPhaseCarouselStepDirection;

  const usedEntityRanking =
    containerType === "example"
      ? currentResearchPhaseExampleIndex
      : currentResearchPhaseIndex;

  const researchPhase = useSelectEntity(
    containerType,
    "researchPhase",
    entityId,
  ) as ResearchPhaseRedux;

  const numberOfResearchPhases = useAppSelector(
    selectNumberOfUnarchivedResearchPhases,
  );

  const entityResearchPoints = useCalculateEntityResearchPoints(
    researchPhase,
    "researchPhase",
    containerType,
  );

  useEffect(() => {
    if (researchPhase && isCurrentView) {
      dispatch(
        setUpdateResearchPhaseDto({
          ...researchPhase,
          tags: researchPhase.tagsIds,
          researchLogs: researchPhase.researchLogsIds,
          researchSessions: researchPhase.researchSessionsIds,
        }),
      );
      dispatch(
        setCreateResearchSessionDto({
          ...defaultCreateResearchSessionDto,
          researchPhaseId: researchPhase?.id,
        }),
      );
      dispatch(
        setCreateResearchLogDto({
          ...defaultCreateResearchLogDto,
          researchPhaseId: researchPhase?.id,
        }),
      );
    }
  }, [researchPhase, isCurrentView]);

  const onEditTagFunctionUsed = (type: "remove" | "add") => {
    dispatch(setCurrentActivityLogSubject("UPDATE"));
    onEditTagFunction(
      type,
      researchPhase.tagsIds,
      selectedTagsIds,
      (editedTags: string[]) =>
        updateResearchPhase({
          dto: {
            ...researchPhase,
            tags: editedTags,
          },
          researchPhaseId: researchPhase.id,
        }),
      dispatch,
    );
  };

  return (
    <EntityContainerInterfaceWrapper
      onPreviousButtonClick={() =>
        dispatch(usedOnDirectionButtonClick({ direction: "left" }))
      }
      onNextButtonClick={() =>
        dispatch(usedOnDirectionButtonClick({ direction: "right" }))
      }
      showWrapperControls={
        numberOfResearchPhases > 1 || containerType === "example"
      }
    >
      <div
        className={`${entityContainerStyles.entityContainer} ${position}`}
        style={{
          backgroundColor:
            researchPhase?.backgroundColorOrImageSrc || mainWhiteColor,
        }}
      >
        <EntityContainerTags
          sourceTagsIds={researchPhase.tagsIds}
          containerType={containerType}
          onAddTagFunction={() => onEditTagFunctionUsed("add")}
          onRemoveTagFunction={() => onEditTagFunctionUsed("remove")}
        />
        <EntityContainerLabel
          entityRanking={usedEntityRanking}
          entityResearchPoints={entityResearchPoints}
          entityTitle={researchPhase.name}
          darkMode={darkMode}
        />
        <EntityContainerOptions
          entityType="researchPhase"
          containerType={containerType}
          onEntityUpdateFunction={() =>
            dispatch(
              setUpsertEntityOverlay({
                entityType: "researchPhase",
                method: "update",
                showOverlay: true,
                entityId: researchPhase.id,
              }),
            )
          }
          onEntityDeleteFunction={() =>
            dispatch(
              setDeleteEntityOverlay({
                entityType: "researchPhase",
                showOverlay: true,
                entityId: researchPhase.id,
              }),
            )
          }
          onEntityResearchFunction={() => {
            dispatch(
              setUpsertEntityOverlay({
                entityType: "researchSession",
                method: "create",
                showOverlay: true,
              }),
            );
          }}
        />
      </div>
    </EntityContainerInterfaceWrapper>
  );
};

export default ResearchPhaseInterface;
