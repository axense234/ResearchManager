// Types
import { EntityRedux } from "@/core/types";
import { EntityType } from "@researchmanager/shared/types";
// Redux
import { selectResearchActivitiesExamples } from "@/redux/slices/research/activity";
import { useAppSelector } from "../redux";

const selectors = {
  researchActivity: selectResearchActivitiesExamples,
  researchPhase: selectResearchActivitiesExamples,
};

export const useSelectEntitiesExamples = (
  entityType: EntityType,
): EntityRedux[] => {
  const selector = selectors[entityType];
  if (!selector) throw new Error("Undocumented entity type.");

  return useAppSelector(selector);
};
