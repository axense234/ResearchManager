"use client";
// Interfaces
import { FC } from "react";
import { EntityContainerInterfaceProps } from "@/core/interfaces";
// SCSS
import entityContainerStyles from "@/scss/components/shared/entity/container/EntityContainer.module.scss";
// Fragments
import EntityContainerTags from "../fragments/EntityContainerTags";
import EntityContainerLabel from "../fragments/EntityContainerLabel";
import EntityContainerOptions from "../fragments/EntityContainerOptions";
// Redux
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  handleResearchActivityCarouselStepDirection,
  handleResearchActivityExampleCarouselStepDirection,
  selectCurrentResearchActivityExampleIndex,
  selectCurrentResearchActivityIndex,
  selectResearchActivitiesExamples,
  selectResearchActivityById,
} from "@/redux/slices/research/activity";
import { selectResearchLogsExamples } from "@/redux/slices/research/log";
import { selectTagsExamples } from "@/redux/slices/tag";
import { selectResearchPhasesExamples } from "@/redux/slices/research/phase";
// Wrapper
import EntityContainerInterfaceWrapper from "../EntityContainerInterfaceWrapper";
// Helper
import { calculateResearchActivityExampleResearchPoints } from "@/helpers";

const ResearchActivityInterface: FC<EntityContainerInterfaceProps> = ({
  containerType,
  entityId,
}) => {
  const dispatch = useAppDispatch();

  // Example
  const currentResearchActivityExampleIndex = useAppSelector(
    selectCurrentResearchActivityExampleIndex,
  );

  const tagsExamples = useAppSelector(selectTagsExamples);
  const researchLogsExamples = useAppSelector(selectResearchLogsExamples);
  const researchPhasesExamples = useAppSelector(selectResearchPhasesExamples);
  const researchActivitiesExamples = useAppSelector(
    selectResearchActivitiesExamples,
  );

  const researchActivityExample =
    researchActivitiesExamples.find((activity) => activity.id === entityId) ||
    researchActivitiesExamples[0];

  const researchActivityResearchPoints =
    calculateResearchActivityExampleResearchPoints(
      researchActivityExample,
      researchPhasesExamples,
      researchLogsExamples,
    );

  // State
  const currentResearchActivityIndex = useAppSelector(
    selectCurrentResearchActivityIndex,
  );
  const researchActivity = useAppSelector((state) =>
    selectResearchActivityById(state, entityId),
  );

  // Used
  const usedResearchActivity =
    containerType === "example" ? researchActivityExample : researchActivity;

  const usedResearchActivityResearchPoints =
    containerType === "example" ? researchActivityResearchPoints : 0;

  const usedResearchActivityTagsIds =
    containerType === "example"
      ? tagsExamples.map((tag) => tag.id)
      : researchActivity.tagsIds;

  const usedOnDirectionButtonClick =
    containerType === "example"
      ? handleResearchActivityExampleCarouselStepDirection
      : handleResearchActivityCarouselStepDirection;

  return (
    <EntityContainerInterfaceWrapper
      onPreviousButtonClick={() =>
        dispatch(usedOnDirectionButtonClick({ direction: "left" }))
      }
      onNextButtonClick={() =>
        dispatch(usedOnDirectionButtonClick({ direction: "right" }))
      }
    >
      <div className={entityContainerStyles.entityContainer}>
        <EntityContainerTags
          tagsIds={usedResearchActivityTagsIds}
          containerType={containerType}
        />
        <EntityContainerLabel
          entityRanking={currentResearchActivityExampleIndex}
          entityResearchPoints={usedResearchActivityResearchPoints}
          entityTitle={usedResearchActivity.name}
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
