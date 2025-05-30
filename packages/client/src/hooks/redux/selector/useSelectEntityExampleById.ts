// Types
import { EntityType } from "@researchmanager/shared/types";
import { EntityRedux } from "@/core/types";
// Redux
import { useAppSelector } from "../redux";
// Hooks
import { selectResearchActivityExampleById } from "@/redux/slices/research/activity";
import { selectResearchPhaseExampleById } from "@/redux/slices/research/phase";
import { selectTagExampleById } from "@/redux/slices/tag";

const selectors = {
  researchActivity: selectResearchActivityExampleById,
  researchPhase: selectResearchPhaseExampleById,
  tag: selectTagExampleById,
};

export const useSelectEntityExampleById = (
  entityType: EntityType,
  entityId: string,
): EntityRedux => {
  const selector = selectors[entityType];
  if (!selector) throw new Error("Undocumented entity type.");

  return useAppSelector((state) => selector(state, entityId));
};
