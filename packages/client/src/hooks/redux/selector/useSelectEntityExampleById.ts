// Types
import { EntityType } from "@researchmanager/shared/types";
import { EntityRedux } from "@/core/types";
// Redux
import { useAppSelector } from "../redux";
// Hooks
import { selectResearchActivityExampleById } from "@/redux/slices/research/activity";

const selectors = {
  researchActivity: selectResearchActivityExampleById,
  researchPhase: selectResearchActivityExampleById,
};

export const useSelectEntityExampleById = (
  entityType: EntityType,
  entityId: string,
): EntityRedux => {
  const selector = selectors[entityType];
  if (!selector) throw new Error("Undocumented entity type.");

  return useAppSelector((state) => selector(state, entityId));
};
