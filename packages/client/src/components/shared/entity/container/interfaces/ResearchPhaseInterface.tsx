// Types and Interfaces
import { FC } from "react";
import { EntityContainerInterfaceProps } from "@/core/interfaces";
import { ResearchLogRedux, ResearchPhaseRedux } from "@/core/types";
// SCSS
import entityContainerStyles from "@/scss/components/shared/entity/container/EntityContainer.module.scss";
// Fragments
import EntityContainerTags from "../fragments/EntityContainerTags";
import EntityContainerLabel from "../fragments/EntityContainerLabel";
import EntityContainerOptions from "../fragments/EntityContainerOptions";
// Wrapper
import EntityContainerInterfaceWrapper from "../EntityContainerInterfaceWrapper";
// Redux and Hooks
import { useAppDispatch, useAppSelector, useSelectEntity } from "@/hooks";
// Redux
import {
  handleResearchPhaseCarouselStepDirection,
  handleResearchPhaseExampleCarouselStepDirection,
  selectCurrentResearchPhaseExampleIndex,
  selectCurrentResearchPhaseIndex,
  selectNumberOfResearchPhases,
} from "@/redux/slices/research/phase";
import { useSelectEntitiesByIds } from "@/hooks/redux/selector";
// Helpers
import { calculateSpecialEntityRP } from "@/helpers";

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

  const researchPhase = useSelectEntity(
    containerType,
    "researchPhase",
    entityId,
  ) as ResearchPhaseRedux;

  const researchPhaseLogs = useSelectEntitiesByIds(
    containerType,
    "researchLog",
    researchPhase?.researchLogsIds || [],
  ) as ResearchLogRedux[];

  const numberOfResearchPhases = useAppSelector(selectNumberOfResearchPhases);

  const entityResearchPoints = calculateSpecialEntityRP(researchPhaseLogs);

  const usedOnDirectionButtonClick =
    containerType === "example"
      ? handleResearchPhaseExampleCarouselStepDirection
      : handleResearchPhaseCarouselStepDirection;

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
      showWrapperControls={
        numberOfResearchPhases > 1 || containerType === "example"
      }
    >
      <div className={entityContainerStyles.entityContainer}>
        <EntityContainerTags
          tagsIds={researchPhase.tagsIds || []}
          containerType={containerType}
        />
        <EntityContainerLabel
          entityRanking={usedEntityRanking}
          entityResearchPoints={entityResearchPoints}
          entityTitle={researchPhase.name}
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
