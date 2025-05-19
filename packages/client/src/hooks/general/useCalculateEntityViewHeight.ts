// Redux
import {
  selectResearchSessionsByResearchActivityId,
  selectResearchSessionsByResearchPhaseId,
} from "@/redux/slices/research/session";
import { useAppSelector } from "../redux";
// Types
import { EntityViewType } from "@/core/types";
import {
  selectResearchLogsByResearchActivityId,
  selectResearchLogsByResearchPhaseId,
} from "@/redux/slices/research/log";

export const useCalculateEntityViewHeight = (
  currentEntityId: string,
  entityType: "researchActivity" | "researchPhase",
  viewType: EntityViewType,
  showSessions: boolean,
  showImages: boolean,
  showGraph: boolean,
  showLogs: boolean,
) => {
  const numberOfResearchActivityResearchSessions = useAppSelector((state) =>
    selectResearchSessionsByResearchActivityId(state, currentEntityId),
  ).length;

  const numberOfResearchPhaseResearchSessions = useAppSelector((state) =>
    selectResearchSessionsByResearchPhaseId(state, currentEntityId),
  ).length;

  const numberOfResearchActivityResearchLogs = useAppSelector((state) =>
    selectResearchLogsByResearchActivityId(state, currentEntityId),
  ).length;
  const numberOfResearchPhaseResearchLogs = useAppSelector((state) =>
    selectResearchLogsByResearchPhaseId(state, currentEntityId),
  ).length;

  const usedNumberOfEntityResearchSessions =
    entityType === "researchActivity"
      ? numberOfResearchActivityResearchSessions
      : numberOfResearchPhaseResearchSessions;

  const usedNumberOfEntityResearchLogs =
    entityType === "researchActivity"
      ? numberOfResearchActivityResearchLogs
      : numberOfResearchPhaseResearchLogs;

  const defaultEntityViewHeight = 27.5;
  const entityViewHeightFromResearchSessions = showSessions
    ? Math.min(usedNumberOfEntityResearchSessions * 8, 25)
    : 0;
  const entityViewHeightFromResearchLogs =
    entityType === "researchPhase"
      ? showLogs
        ? Math.min(usedNumberOfEntityResearchLogs * 5, 35)
        : 15
      : 0;
  const entityViewHeightFromViewType = viewType === "entity" ? 20 : 0;
  const entityViewHeightFromEntityDetails = showImages || showGraph ? 15 : 0;

  const entityViewHeightResult =
    defaultEntityViewHeight +
    entityViewHeightFromResearchSessions +
    entityViewHeightFromResearchLogs +
    entityViewHeightFromViewType +
    entityViewHeightFromEntityDetails;

  const entityViewHeight = `${entityViewHeightResult}rem`;

  return entityViewHeight;
};
