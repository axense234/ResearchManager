// React
import { FC, useEffect } from "react";
// Interfaces
import { EntityContainerInterfaceProps } from "@/core/interfaces";
// Types
import { TagRedux } from "@/core/types";
// SCSS
import entityContainerStyles from "@/scss/components/shared/entity/container/EntityContainer.module.scss";
// Components
import EntityContainerOptions from "../fragments/EntityContainerOptions";
import TagComponent from "../../tag/TagComponent";
// Wrapper
import EntityContainerInterfaceWrapper from "../EntityContainerInterfaceWrapper";
// Redux and Hooks
import { useAppDispatch, useAppSelector, useSelectEntity } from "@/hooks";
// Redux
import {
  handleTagCarouselStepDirection,
  handleTagExampleCarouselStepDirection,
  selectNumberOfTags,
  setUpdateTagDto,
} from "@/redux/slices/tag";
import {
  setDeleteEntityOverlay,
  setUpsertTagOverlay,
} from "@/redux/slices/general/slice";

const TagInterface: FC<EntityContainerInterfaceProps> = ({
  containerType,
  entityId,
  isCurrentView,
  position,
}) => {
  const dispatch = useAppDispatch();

  const usedOnDirectionButtonClick =
    containerType === "example"
      ? handleTagExampleCarouselStepDirection
      : handleTagCarouselStepDirection;

  const tag = useSelectEntity(containerType, "tag", entityId) as TagRedux;

  const numberOfTags = useAppSelector(selectNumberOfTags);

  useEffect(() => {
    if (tag && isCurrentView) {
      dispatch(
        setUpdateTagDto({
          ...tag,
          researchActivities: tag.researchActivitiesIds,
          researchSessions: tag.researchSessionsIds,
          researchLogs: tag.researchLogsIds,
        }),
      );
    }
  }, [tag, isCurrentView]);

  return (
    <EntityContainerInterfaceWrapper
      onPreviousButtonClick={() =>
        dispatch(usedOnDirectionButtonClick({ direction: "left" }))
      }
      onNextButtonClick={() =>
        dispatch(usedOnDirectionButtonClick({ direction: "right" }))
      }
      showWrapperControls={numberOfTags > 1 || containerType === "example"}
    >
      <div
        className={`${entityContainerStyles.entityContainer} ${position}`}
        style={{ gap: "3rem", width: "50%", paddingTop: "2rem" }}
      >
        <TagComponent
          containerType={containerType}
          componentSize="big"
          tagId={tag?.id}
        />
        <EntityContainerOptions
          entityType="tag"
          containerType={containerType}
          onEntityUpdateFunction={() =>
            dispatch(
              setUpsertTagOverlay({
                method: "update",
                showOverlay: true,
                entityId: tag.id,
              }),
            )
          }
          onEntityDeleteFunction={() =>
            dispatch(
              setDeleteEntityOverlay({
                entityType: "tag",
                showOverlay: true,
                entityId: tag.id,
              }),
            )
          }
        />
      </div>
    </EntityContainerInterfaceWrapper>
  );
};

export default TagInterface;
