// Types
import { EntityRedux } from "@/core/types";
import { EntityType } from "@researchmanager/shared/types";
// Redux
import { useAppSelector } from "../redux";
// Very Special Selectors
import { selectResearchActivitiesExamplesByIds } from "@/redux/slices/research/activity";
import { selectResearchPhasesExamplesByIds } from "@/redux/slices/research/phase";
import { selectResearchLogsExamplesByIds } from "@/redux/slices/research/log";

const selectors = {
  researchActivity: selectResearchActivitiesExamplesByIds,
  researchPhase: selectResearchPhasesExamplesByIds,
  researchLog: selectResearchLogsExamplesByIds,
};

export const useSelectEntitiesExamplesByIds = (
  entityType: EntityType,
  entityIds: string[],
): EntityRedux[] => {
  const selector = selectors[entityType];
  if (!selector) throw new Error("Undocumented entity type.");

  return useAppSelector((state) => selector(state, entityIds));
};
