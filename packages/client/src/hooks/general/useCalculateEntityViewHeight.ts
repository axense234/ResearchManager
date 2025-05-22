// Redux
import {
  selectResearchSessionsByResearchActivityId,
  selectResearchSessionsByResearchPhaseId,
} from "@/redux/slices/research/session";
import { useAppSelector } from "../redux";
// Types
import { EntityViewEntityType, EntityViewType } from "@/core/types";
import {
  selectResearchLogsByResearchActivityId,
  selectResearchLogsByResearchPhaseId,
} from "@/redux/slices/research/log";
import { selectNumberOfCurrentTagUsedOnEntities } from "@/redux/slices/general";

export const useCalculateEntityViewHeight = (
  currentEntityId: string,
  entityType: EntityViewEntityType,
  viewType: EntityViewType,
  showSessions: boolean,
  showImages: boolean,
  showGraph: boolean,
  showLogs: boolean,
  showEntities: boolean,
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

  const numberOfCurrentTagUsedOnEntities = useAppSelector(
    selectNumberOfCurrentTagUsedOnEntities,
  );

  const usedNumberOfEntityResearchSessions =
    entityType === "researchActivity"
      ? numberOfResearchActivityResearchSessions
      : numberOfResearchPhaseResearchSessions;

  const usedNumberOfEntityResearchLogs =
    entityType === "researchActivity"
      ? numberOfResearchActivityResearchLogs
      : numberOfResearchPhaseResearchLogs;

  const defaultEntityViewHeight = viewType === "entity" ? 30 : 20;
  const defaultTagViewHeight = 20;

  const entityViewHeightFromEntityDetails =
    showImages || showGraph ? 25.625 : 8.15;

  const entityViewHeightFromEntitySessions = showSessions
    ? Math.min(25, usedNumberOfEntityResearchSessions * 7) + 15
    : 15;

  const entityViewHeightFromEntityLogs = showLogs
    ? Math.min(25, Math.ceil(usedNumberOfEntityResearchLogs / 3) * 3.2) + 15
    : 15;

  const usedEntityViewHeightFromEntityLogs =
    viewType === "entity"
      ? entityType == "researchPhase"
        ? entityViewHeightFromEntityLogs
        : 0
      : 0;

  const usedEntityViewHeightFromEntitySessions =
    viewType === "example" ? 0 : entityViewHeightFromEntitySessions;

  const entityViewHeightFromEntityUsedOnTags = showEntities
    ? Math.min(25, numberOfCurrentTagUsedOnEntities * 7) + 15
    : 15;

  const tagViewHeightResult =
    defaultTagViewHeight + entityViewHeightFromEntityUsedOnTags;

  const entityViewHeightResult =
    defaultEntityViewHeight +
    entityViewHeightFromEntityDetails +
    usedEntityViewHeightFromEntitySessions +
    usedEntityViewHeightFromEntityLogs;

  if (entityType === "tag") {
    return `${tagViewHeightResult}rem`;
  } else {
    return `${entityViewHeightResult}rem`;
  }
};
