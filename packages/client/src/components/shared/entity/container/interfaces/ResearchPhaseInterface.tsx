// Types and Interfaces
import { FC } from "react";
import { EntityContainerInterfaceProps } from "@/core/interfaces";
import { ResearchPhaseRedux } from "@/core/types";
// SCSS
import entityContainerStyles from "@/scss/components/shared/entity/container/EntityContainer.module.scss";
// Fragments
import EntityContainerTags from "../fragments/EntityContainerTags";
import EntityContainerLabel from "../fragments/EntityContainerLabel";
import EntityContainerOptions from "../fragments/EntityContainerOptions";
// Redux
import { useAppDispatch, useAppSelector, useSelectEntity } from "@/hooks";
import {
  handleResearchActivityCarouselStepDirection,
  handleResearchActivityExampleCarouselStepDirection,
} from "@/redux/slices/research/activity";
// Wrapper
import EntityContainerInterfaceWrapper from "../EntityContainerInterfaceWrapper";
// Helper
import { useCalculateEntityResearchPoints } from "@/helpers";
import {
  selectCurrentResearchPhaseExampleIndex,
  selectCurrentResearchPhaseIndex,
} from "@/redux/slices/research/phase";

const ResearchPhaseInterface: FC<EntityContainerInterfaceProps> = ({
  containerType,
  entityId,
}) => {
  const dispatch = useAppDispatch();

  const currentResearchPhaseExampleIndex = useAppSelector(
    selectCurrentResearchPhaseExampleIndex,
  );
  const currentResearchPhaseIndex = useAppSelector(
    selectCurrentResearchPhaseIndex,
  );

  const entity = useSelectEntity(
    containerType,
    "researchPhase",
    entityId,
  ) as ResearchPhaseRedux;

  const entityResearchPoints = useCalculateEntityResearchPoints(
    entity,
    "researchPhase",
    containerType,
  );

  const usedOnDirectionButtonClick =
    containerType === "example"
      ? handleResearchActivityExampleCarouselStepDirection
      : handleResearchActivityCarouselStepDirection;

  const usedEntityRanking =
    containerType === "example"
      ? currentResearchPhaseExampleIndex
      : currentResearchPhaseIndex;

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
          tagsIds={entity.tagsIds || []}
          containerType={containerType}
        />
        <EntityContainerLabel
          entityRanking={usedEntityRanking}
          entityResearchPoints={entityResearchPoints}
          entityTitle={entity.name}
        />
        <EntityContainerOptions
          entityId={entityId}
          entityType="researchPhase"
          containerType={containerType}
        />
      </div>
    </EntityContainerInterfaceWrapper>
  );
};

export default ResearchPhaseInterface;
