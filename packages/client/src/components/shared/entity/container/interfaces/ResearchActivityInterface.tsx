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
// Wrapper
import EntityContainerInterfaceWrapper from "../EntityContainerInterfaceWrapper";
// Data
import { mainWhiteColor } from "@/data/general";

const ResearchActivityInterface: FC<EntityContainerInterfaceProps> = ({
  containerType,
  entityId,
}) => {
  const dispatch = useAppDispatch();

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
          tagsIds={researchActivity.tagsIds || []}
          containerType={containerType}
          dtoUpdateFunction={() => {}}
        />
        <EntityContainerLabel
          entityRanking={usedEntityRanking}
          entityResearchPoints={entityResearchPoints}
          entityTitle={researchActivity.name}
        />
        <EntityContainerOptions
          entityId={entityId}
          entityType="researchActivity"
          containerType={containerType}
        />
      </div>
    </EntityContainerInterfaceWrapper>
  );
};

export default ResearchActivityInterface;
