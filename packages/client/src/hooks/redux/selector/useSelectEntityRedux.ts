// Redux
import { selectResearchActivityById } from "@/redux/slices/research/activity";
import { selectResearchPhaseById } from "@/redux/slices/research/phase";
import { useAppSelector } from "../redux";
// Types
import { EntityType } from "@researchmanager/shared/types";

const selectors = {
  researchActivity: selectResearchActivityById,
  researchPhase: selectResearchPhaseById,
};

export const useSelectEntityRedux = (
  entityType: EntityType,
  entityId: string,
) => {
  const selector = selectors[entityType];
  if (!selector) throw new Error("Undocumented entity type.");

  return useAppSelector((state) => selector(state, entityId));
};
