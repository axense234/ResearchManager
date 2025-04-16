// Types
import {
  EntityPayload,
  EntityType,
  ResearchActivityPayload,
  ResearchLogPayload,
  ResearchPhasePayload,
  ResearchSessionPayload,
  TagPayload,
  UserPayload,
} from "@researchmanager/shared/types";
import {
  ResearchActivityRedux,
  ResearchLogRedux,
  ResearchPhaseRedux,
  ResearchSessionRedux,
  TagRedux,
  UserRedux,
} from "@/core/types";
import { EntityRedux } from "@/core/types/redux/other/EntityRedux";

export const transformEntityIntoEntityRedux = (
  entity: EntityPayload,
  entityType: EntityType,
): EntityRedux => {
  // Turning relationship entities into ids
  // Also turning entity date fields into string fields
  switch (entityType) {
    case "user":
      const entityAsUser = { ...entity } as UserPayload;
      const entityAsUserWithoutRelationships = { ...entity } as UserPayload;

      // Cleanup
      delete entityAsUserWithoutRelationships?.settings;
      delete entityAsUserWithoutRelationships?.activityFeed;
      delete entityAsUserWithoutRelationships?.researchActivities;
      delete entityAsUserWithoutRelationships?.tags;

      console.log(entityAsUser);

      return {
        ...entityAsUserWithoutRelationships,
        settingsId: entityAsUser.settings?.id,
        activityFeedId: entityAsUser.activityFeed?.id,
        researchActivitiesIds: entityAsUser.researchActivities?.map(
          (activity) => activity.id,
        ),
        tagsIds: entityAsUser.tags?.map((tag) => tag.id),
        createdAt: new Date(entityAsUser.createdAt).toISOString(),
        updatedAt: new Date(entityAsUser.updatedAt).toISOString(),
      } as UserRedux;
    case "researchActivity":
      const entityAsResearchActivity = { ...entity } as ResearchActivityPayload;
      const entityAsResearchActivityWithoutRelationships = {
        ...entity,
      } as ResearchActivityPayload;

      delete entityAsResearchActivityWithoutRelationships.user;
      delete entityAsResearchActivityWithoutRelationships.activityFeed;
      delete entityAsResearchActivityWithoutRelationships.researchPhases;
      delete entityAsResearchActivityWithoutRelationships.tags;

      return {
        ...entityAsResearchActivityWithoutRelationships,
        activityFeedId: entityAsResearchActivity.activityFeed?.id,
        researchPhasesIds: entityAsResearchActivity.researchPhases?.map(
          (phase) => phase.id,
        ),
        tagsIds: entityAsResearchActivity.tags?.map((tag) => tag.id),
        createdAt: new Date(entityAsResearchActivity.createdAt).toISOString(),
        updatedAt: new Date(entityAsResearchActivity.updatedAt).toISOString(),
      } as ResearchActivityRedux;
    case "researchPhase":
      const entityAsResearchPhase = { ...entity } as ResearchPhasePayload;
      const entityAsResearchPhaseWithoutRelationships = {
        ...entity,
      } as ResearchPhasePayload;

      delete entityAsResearchPhaseWithoutRelationships.researchActivity;
      delete entityAsResearchPhaseWithoutRelationships.researchLogs;
      delete entityAsResearchPhaseWithoutRelationships.researchSessions;
      delete entityAsResearchPhaseWithoutRelationships.tags;

      return {
        ...entityAsResearchPhaseWithoutRelationships,
        researchLogsIds: entityAsResearchPhase.researchLogs?.map(
          (log) => log.id,
        ),
        researchSessionsIds: entityAsResearchPhase.researchSessions?.map(
          (session) => session.id,
        ),
        tagsIds: entityAsResearchPhase.tags?.map((tag) => tag.id),
        createdAt: new Date(entityAsResearchPhase.createdAt).toISOString(),
        updatedAt: new Date(entityAsResearchPhase.updatedAt).toISOString(),
      } as ResearchPhaseRedux;
    case "researchSession":
      const entityAsResearchSession = { ...entity } as ResearchSessionPayload;
      const entityAsResearchSessionWithoutRelationships = {
        ...entity,
      } as ResearchSessionPayload;

      delete entityAsResearchSessionWithoutRelationships.researchPhase;
      delete entityAsResearchSessionWithoutRelationships.tags;

      return {
        ...entityAsResearchSessionWithoutRelationships,
        tagsIds: entityAsResearchSession.tags?.map((tag) => tag.id),
        createdAt: new Date(entityAsResearchSession.createdAt).toISOString(),
        updatedAt: new Date(entityAsResearchSession.updatedAt).toISOString(),
        currentStatusDate: new Date(
          entityAsResearchSession.currentStatusDate,
        ).toISOString(),
      } as ResearchSessionRedux;
    case "researchLog":
      const entityAsResearchLog = { ...entity } as ResearchLogPayload;
      const entityAsResearchLogWithoutRelationships = {
        ...entity,
      } as ResearchLogPayload;

      delete entityAsResearchLogWithoutRelationships.researchPhase;
      delete entityAsResearchLogWithoutRelationships.tags;

      return {
        ...entityAsResearchLogWithoutRelationships,
        tagsIds: entityAsResearchLog.tags?.map((tag) => tag.id),
        createdAt: new Date(entityAsResearchLog.createdAt).toISOString(),
        updatedAt: new Date(entityAsResearchLog.updatedAt).toISOString(),
      } as ResearchLogRedux;
    case "tag":
      const entityAsTag = { ...entity } as TagPayload;
      const entityAsTagWithoutRelationships = { ...entity } as TagPayload;

      delete entityAsTagWithoutRelationships.user;
      delete entityAsTagWithoutRelationships.researchActivities;
      delete entityAsTagWithoutRelationships.researchPhases;
      delete entityAsTagWithoutRelationships.researchSessions;
      delete entityAsTagWithoutRelationships.researchLogs;

      return {
        ...entityAsTagWithoutRelationships,
        researchActivitiesIds: entityAsTag.researchActivities?.map(
          (activity) => activity.id,
        ),
        researchPhasesIds: entityAsTag.researchPhases?.map((phase) => phase.id),
        researchLogsIds: entityAsTag.researchLogs?.map((log) => log.id),
        researchSessionsIds: entityAsTag.researchSessions?.map(
          (session) => session.id,
        ),
        createdAt: new Date(entityAsTag.createdAt).toISOString(),
        updatedAt: new Date(entityAsTag.updatedAt).toISOString(),
      } as TagRedux;
    default:
      throw new Error("Invalid entity type.");
  }
};
