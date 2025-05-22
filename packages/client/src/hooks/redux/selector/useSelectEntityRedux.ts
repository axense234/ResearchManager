// Redux
import { selectResearchActivityById } from "@/redux/slices/research/activity";
import { selectResearchPhaseById } from "@/redux/slices/research/phase";
import { useAppSelector } from "../redux";
import { selectResearchLogById } from "@/redux/slices/research/log";
// Types
import { EntityType } from "@researchmanager/shared/types";
import { selectTagById } from "@/redux/slices/tag";

const selectors = {
  researchActivity: selectResearchActivityById,
  researchPhase: selectResearchPhaseById,
  researchLog: selectResearchLogById,
  tag: selectTagById,
};

export const useSelectEntityRedux = (
  entityType: EntityType,
  entityId: string,
) => {
  const selector = selectors[entityType];
  if (!selector) throw new Error("Undocumented entity type.");

  return useAppSelector((state) => selector(state, entityId));
};
