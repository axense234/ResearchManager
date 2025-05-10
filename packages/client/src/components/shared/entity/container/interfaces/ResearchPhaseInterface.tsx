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
  setDeleteEntityOverlay,
  setEntityOverlay,
} from "@/redux/slices/general/slice";
// Data
import { mainWhiteColor } from "@/data/general";

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
      console.log("yeee");
      dispatch(
        setUpdateResearchPhaseDto({
          ...researchPhase,
          tags: researchPhase.tagsIds,
          researchLogs: researchPhase.researchLogsIds,
          researchSessions: researchPhase.researchSessionsIds,
        }),
      );
    }
  }, [researchPhase, isCurrentView]);

  const onEditTagFunctionUsed = (type: "remove" | "add") => {
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
              setEntityOverlay({
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
        />
      </div>
    </EntityContainerInterfaceWrapper>
  );
};

export default ResearchPhaseInterface;
