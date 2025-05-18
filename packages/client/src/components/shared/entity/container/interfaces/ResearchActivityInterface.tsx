// React
import { FC, useEffect } from "react";
// Interfaces
import { EntityContainerInterfaceProps } from "@/core/interfaces";
// Types
import { ResearchActivityRedux } from "@/core/types";
// SCSS
import entityContainerStyles from "@/scss/components/shared/entity/container/EntityContainer.module.scss";
// Fragments
import EntityContainerTags from "../fragments/EntityContainerTags";
import EntityContainerLabel from "../fragments/EntityContainerLabel";
import EntityContainerOptions from "../fragments/EntityContainerOptions";
// Wrapper
import EntityContainerInterfaceWrapper from "../EntityContainerInterfaceWrapper";
// Data
import { mainWhiteColor } from "@/data/general";
// Redux
import {
  useAppDispatch,
  useAppSelector,
  useCalculateEntityResearchPoints,
  useSelectEntity,
} from "@/hooks";
import {
  handleResearchActivityCarouselStepDirection,
  handleResearchActivityExampleCarouselStepDirection,
  selectCurrentResearchActivityExampleIndex,
  selectCurrentResearchActivityIndex,
  selectNumberOfResearchActivitiesCustom,
  setUpdateResearchActivityDto,
} from "@/redux/slices/research/activity";
import { updateResearchActivity } from "@/redux/slices/research/activity/thunks";
import { selectSelectedTagsIds } from "@/redux/slices/tag";
import {
  setCurrentActivityLogSubject,
  setDeleteEntityOverlay,
  setUpsertEntityOverlay,
} from "@/redux/slices/general/slice";
// Helpers
import { onEditTagFunction } from "@/helpers";
import { defaultCreateResearchSessionDto } from "@/data/redux";
import { setCreateResearchSessionDto } from "@/redux/slices/research/session";
import { selectResearchPhasesByResearchActivityId } from "@/redux/slices/research/phase";

const ResearchActivityInterface: FC<EntityContainerInterfaceProps> = ({
  containerType,
  entityId,
  darkMode,
  position,
  isCurrentView,
}) => {
  const dispatch = useAppDispatch();

  const selectedTagsIds = useAppSelector(selectSelectedTagsIds);

  const currentResearchActivityExampleIndex = useAppSelector(
    selectCurrentResearchActivityExampleIndex,
  );
  const currentResearchActivityIndex = useAppSelector(
    selectCurrentResearchActivityIndex,
  );

  const researchPhasesById = useAppSelector((state) =>
    selectResearchPhasesByResearchActivityId(state, entityId),
  );

  const usedOnDirectionButtonClick =
    containerType === "example"
      ? handleResearchActivityExampleCarouselStepDirection
      : handleResearchActivityCarouselStepDirection;

  const usedEntityRanking =
    containerType === "example"
      ? currentResearchActivityExampleIndex
      : currentResearchActivityIndex;

  const researchActivity = useSelectEntity(
    containerType,
    "researchActivity",
    entityId,
  ) as ResearchActivityRedux;

  researchActivity.researchPhasesIds[0];

  const numberOfResearchActivities = useAppSelector((state) =>
    selectNumberOfResearchActivitiesCustom(state, {
      sorted: false,
      unarchived: true,
    }),
  );

  const researchActivityRP = useCalculateEntityResearchPoints(
    researchActivity,
    "researchActivity",
    containerType,
  );

  useEffect(() => {
    if (researchActivity && isCurrentView) {
      dispatch(
        setUpdateResearchActivityDto({
          ...researchActivity,
          tags: researchActivity.tagsIds,
          researchPhases: researchActivity.researchPhasesIds,
        }),
      );
      dispatch(
        setCreateResearchSessionDto({
          ...defaultCreateResearchSessionDto,
          researchPhaseId: researchPhasesById[0]?.id,
        }),
      );
    }
  }, [researchActivity, researchPhasesById, isCurrentView]);

  const onEditTagFunctionUsed = (type: "remove" | "add") => {
    dispatch(setCurrentActivityLogSubject("UPDATE"));
    onEditTagFunction(
      type,
      researchActivity.tagsIds,
      selectedTagsIds,
      (editedTags: string[]) =>
        updateResearchActivity({
          dto: {
            ...researchActivity,
            tags: editedTags,
          },
          researchActivityId: researchActivity.id,
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
        numberOfResearchActivities > 1 || containerType === "example"
      }
    >
      <div
        className={`${entityContainerStyles.entityContainer} ${position}`}
        style={{
          backgroundColor:
            researchActivity?.backgroundColorOrImageSrc || mainWhiteColor,
        }}
      >
        <EntityContainerTags
          sourceTagsIds={researchActivity.tagsIds}
          containerType={containerType}
          onRemoveTagFunction={() => onEditTagFunctionUsed("remove")}
          onAddTagFunction={() => onEditTagFunctionUsed("add")}
        />
        <EntityContainerLabel
          entityRanking={usedEntityRanking}
          entityResearchPoints={researchActivityRP}
          entityTitle={researchActivity.name}
          darkMode={darkMode}
        />
        <EntityContainerOptions
          entityType="researchActivity"
          containerType={containerType}
          onEntityUpdateFunction={() =>
            dispatch(
              setUpsertEntityOverlay({
                entityType: "researchActivity",
                method: "update",
                showOverlay: true,
                entityId: researchActivity.id,
              }),
            )
          }
          onEntityDeleteFunction={() =>
            dispatch(
              setDeleteEntityOverlay({
                entityType: "researchActivity",
                showOverlay: true,
                entityId: researchActivity.id,
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

export default ResearchActivityInterface;
