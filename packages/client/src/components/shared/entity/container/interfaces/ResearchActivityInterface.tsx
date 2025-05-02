// Types and Interfaces
import { FC } from "react";
import { EntityContainerInterfaceProps } from "@/core/interfaces";
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
  selectNumberOfResearchActivities,
} from "@/redux/slices/research/activity";
import { updateResearchActivity } from "@/redux/slices/research/activity/thunks";
import {
  selectAddTagModal,
  selectSelectedTagsIds,
  setAddTagModal,
  setSelectedTagsIds,
} from "@/redux/slices/tag";
import { setEntityOverlay } from "@/redux/slices/general/slice";
import { onEditTagFunction } from "@/helpers";

const ResearchActivityInterface: FC<EntityContainerInterfaceProps> = ({
  containerType,
  entityId,
  darkMode,
}) => {
  const dispatch = useAppDispatch();

  const selectedTagsIds = useAppSelector(selectSelectedTagsIds);

  const addTagModal = useAppSelector(selectAddTagModal);

  const currentResearchActivityExampleIndex = useAppSelector(
    selectCurrentResearchActivityExampleIndex,
  );
  const currentResearchActivityIndex = useAppSelector(
    selectCurrentResearchActivityIndex,
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

  const numberOfResearchActivities = useAppSelector(
    selectNumberOfResearchActivities,
  );

  const entityResearchPoints = useCalculateEntityResearchPoints(
    researchActivity,
    "researchActivity",
    containerType,
  );

  const onEditTagFunctionUsed = (type: "remove" | "add") => {
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
        className={entityContainerStyles.entityContainer}
        style={{
          backgroundColor:
            researchActivity.backgroundColorOrImageSrc || mainWhiteColor,
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
          entityResearchPoints={entityResearchPoints}
          entityTitle={researchActivity.name}
          darkMode={darkMode}
        />
        <EntityContainerOptions
          entityType="researchActivity"
          containerType={containerType}
          onEntityUpdateFunction={() =>
            dispatch(
              setEntityOverlay({
                entityType: "researchActivity",
                showOverlay: true,
              }),
            )
          }
          onEntityDeleteFunction={() => {}}
        />
      </div>
    </EntityContainerInterfaceWrapper>
  );
};

export default ResearchActivityInterface;
