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
// Helpers
import { calculateSpecialEntityRP, onEditTagFunction } from "@/helpers";
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
  updateResearchPhase,
} from "@/redux/slices/research/phase";
import { useSelectEntitiesByIds } from "@/hooks/redux/selector";
import { selectSelectedTagsIds } from "@/redux/slices/tag";
import { setEntityOverlay } from "@/redux/slices/general/slice";
// Data
import { mainWhiteColor } from "@/data/general";

const ResearchPhaseInterface: FC<EntityContainerInterfaceProps> = ({
  containerType,
  entityId,
  darkMode,
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

  const researchPhaseLogs = useSelectEntitiesByIds(
    containerType,
    "researchLog",
    researchPhase?.researchLogsIds || [],
  ) as ResearchLogRedux[];

  const numberOfResearchPhases = useAppSelector(selectNumberOfResearchPhases);

  const entityResearchPoints = calculateSpecialEntityRP(researchPhaseLogs);

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
        className={entityContainerStyles.entityContainer}
        style={{
          backgroundColor:
            researchPhase.backgroundColorOrImageSrc || mainWhiteColor,
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

export default ResearchPhaseInterface;
