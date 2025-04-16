// Types
import {
  ResearchLogPayload,
  ResearchPhasePayload,
  ResearchSessionPayload,
  UserPayload,
} from "@researchmanager/shared/types";
import {
  ResearchActivityRedux,
  ResearchLogRedux,
  ResearchPhaseRedux,
  ResearchSessionRedux,
  TagRedux,
} from "@/core/types";
// Helpers
import { transformEntityIntoEntityRedux } from "./transformEntityIntoEntityRedux";

export const transformEntitiesFromUserPayloadToEntitiesRedux = (
  userPayload: UserPayload,
) => {
  const userTags = userPayload.tags;

  const userResearchActivities = userPayload.researchActivities;

  const userResearchPhases = userPayload.researchActivities
    ?.map((ra) => ra.researchPhases)
    .flat();

  const userResearchLogs = userResearchPhases
    ?.map((rp) => rp?.researchLogs)
    .flat();

  const userResearchSessions = userResearchPhases
    ?.map((rp) => rp?.researchSessions)
    .flat();

  const userTagsRedux = userTags?.map(
    (tag) => transformEntityIntoEntityRedux(tag, "tag") as TagRedux,
  );

  const userResearchActivitiesRedux = userResearchActivities?.map(
    (ra) =>
      transformEntityIntoEntityRedux(
        ra,
        "researchActivity",
      ) as ResearchActivityRedux,
  );

  const userResearchPhasesRedux = userResearchPhases?.map(
    (rp) =>
      transformEntityIntoEntityRedux(
        rp as ResearchPhasePayload,
        "researchPhase",
      ) as ResearchPhaseRedux,
  );

  const userResearchSessionsRedux = userResearchSessions?.map(
    (rs) =>
      transformEntityIntoEntityRedux(
        rs as ResearchSessionPayload,
        "researchSession",
      ) as ResearchSessionRedux,
  );

  const userResearchLogsRedux = userResearchLogs?.map(
    (rl) =>
      transformEntityIntoEntityRedux(
        rl as ResearchLogPayload,
        "researchLog",
      ) as ResearchLogRedux,
  );

  return {
    tags: userTagsRedux,
    researchActivities: userResearchActivitiesRedux,
    researchPhases: userResearchPhasesRedux,
    researchSessions: userResearchSessionsRedux,
    researchLogs: userResearchLogsRedux,
  };
};
