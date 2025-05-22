// Types
import { EntityType } from "@researchmanager/shared/types";
import { EntityViewType } from "@/core/types";
// Redux
import {
  selectCurrentResearchActivityExampleIndex,
  selectCurrentResearchActivityIndex,
  selectResearchActivityExampleIdByIndex,
  selectResearchActivityIdByIndex,
} from "@/redux/slices/research/activity";
import {
  selectResearchPhaseIdByIndex,
  selectResearchPhaseExampleIdByIndex,
  selectCurrentResearchPhaseIndex,
  selectCurrentResearchPhaseExampleIndex,
} from "@/redux/slices/research/phase";
import { useAppSelector } from "../redux";
import {
  selectCurrentTagExampleIndex,
  selectCurrentTagIndex,
  selectTagExampleIdByIndex,
  selectTagIdByIndex,
} from "@/redux/slices/tag";

const currentEntityIndexSelectors = {
  researchActivity: {
    entity: selectCurrentResearchActivityIndex,
    example: selectCurrentResearchActivityExampleIndex,
  },
  researchPhase: {
    entity: selectCurrentResearchPhaseIndex,
    example: selectCurrentResearchPhaseExampleIndex,
  },
  tag: {
    entity: selectCurrentTagIndex,
    example: selectCurrentTagExampleIndex,
  },
};

const currentEntityIdSelectors = {
  researchActivity: {
    entity: selectResearchActivityIdByIndex,
    example: selectResearchActivityExampleIdByIndex,
  },
  researchPhase: {
    entity: selectResearchPhaseIdByIndex,
    example: selectResearchPhaseExampleIdByIndex,
  },
  tag: {
    entity: selectTagIdByIndex,
    example: selectTagExampleIdByIndex,
  },
};

export const useGetCurrentEntityIdAndIndex = (
  entityType: EntityType,
  viewType: EntityViewType,
): { currentEntityIndex: number; currentEntityId: string } => {
  const currentEntityIndexSelector =
    currentEntityIndexSelectors[entityType][viewType];

  if (!currentEntityIndexSelector)
    throw new Error("No currentEntityIndexSelector was found.");

  const currentEntityIdSelector =
    currentEntityIdSelectors[entityType][viewType];

  if (!currentEntityIndexSelector)
    throw new Error("No currentEntityIdSelector was found.");

  const currentEntityIndex = useAppSelector(
    currentEntityIndexSelector,
  ) as number;

  const currentEntityId = useAppSelector((state) =>
    currentEntityIdSelector(state, currentEntityIndex),
  );

  return { currentEntityIndex, currentEntityId };
};
