// Redux
import {
  selectResearchSessionsByResearchActivityId,
  selectResearchSessionsByResearchPhaseId,
} from "@/redux/slices/research/session";
import { useAppSelector } from "../redux";
// Types
import { EntityViewType } from "@/core/types";

export const useCalculateEntityViewHeight = (
  currentEntityId: string,
  entityType: "researchActivity" | "researchPhase",
  viewType: EntityViewType,
  showSessions: boolean,
  showImages: boolean,
  showGraph: boolean,
) => {
  const numberOfResearchActivityResearchSessions = useAppSelector((state) =>
    selectResearchSessionsByResearchActivityId(state, currentEntityId),
  ).length;

  const numberOfResearchPhaseResearchSessions = useAppSelector((state) =>
    selectResearchSessionsByResearchPhaseId(state, currentEntityId),
  ).length;

  const usedNumberOfEntityResearchSessions =
    entityType === "researchActivity"
      ? numberOfResearchActivityResearchSessions
      : numberOfResearchPhaseResearchSessions;

  const entityViewHeight = `${27.5 + (showSessions ? Math.min(usedNumberOfEntityResearchSessions * 8, 25) : 0) + (viewType === "entity" ? 20 : 0) + (showImages || showGraph ? 15 : 0)}rem`;

  return entityViewHeight;
};
