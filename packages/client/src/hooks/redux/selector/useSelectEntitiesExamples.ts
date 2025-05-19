// Types
import { EntityRedux } from "@/core/types";
import { EntityType } from "@researchmanager/shared/types";
// Redux
import { selectResearchActivitiesExamples } from "@/redux/slices/research/activity";
import { useAppSelector } from "../redux";
import { selectResearchLogsExamples } from "@/redux/slices/research/log";

const selectors = {
  researchActivity: selectResearchActivitiesExamples,
  researchPhase: selectResearchActivitiesExamples,
  researchLog: selectResearchLogsExamples,
};

export const useSelectEntitiesExamples = (
  entityType: EntityType,
): EntityRedux[] => {
  const selector = selectors[entityType];
  if (!selector) throw new Error("Undocumented entity type.");

  return useAppSelector(selector);
};
