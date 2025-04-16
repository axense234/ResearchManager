// Redux
import { selectAllResearchActivities } from "@/redux/slices/research/activity";
import { selectAllResearchLogs } from "@/redux/slices/research/log";
import { selectAllResearchPhases } from "@/redux/slices/research/phase";
import { useAppSelector } from "../redux";
// Types
import { EntityType } from "@researchmanager/shared/types";
import { EntityRedux } from "@/core/types";

const selectors = {
  researchActivity: selectAllResearchActivities,
  researchPhase: selectAllResearchPhases,
  researchLog: selectAllResearchLogs,
};

export const useSelectEntitiesReduxByIds = (
  entityType: EntityType,
  entityIds: string[],
): EntityRedux[] => {
  const selector = selectors[entityType];
  if (!selector) throw new Error("Undocumented entity type.");

  const allEntities = useAppSelector((state) =>
    selector(state),
  ) as EntityRedux[];

  const entitiesByIds = allEntities.filter((entity) =>
    entityIds.includes(entity.id),
  );
  return entitiesByIds;
};
