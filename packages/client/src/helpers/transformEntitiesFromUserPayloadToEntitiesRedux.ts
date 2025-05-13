// Types
import {
  ActivityDayPayload,
  ActivityLogPayload,
  ResearchLogPayload,
  ResearchPhasePayload,
  ResearchSessionPayload,
  UserPayload,
} from "@researchmanager/shared/types";
import {
  ActivityDayRedux,
  ActivityFeedRedux,
  ActivityLogRedux,
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

  const userResearchPhases = userResearchActivities
    ?.map((ra) => ra.researchPhases)
    .flat();

  const userResearchLogs = userResearchPhases
    ?.map((rp) => rp?.researchLogs)
    .flat();

  const userResearchSessions = userResearchPhases
    ?.map((rp) => rp?.researchSessions)
    .flat();

  const userActivityFeed = userPayload.activityFeed;

  const userActivityDays = userActivityFeed.activityDays;

  const userActivityLogs = userActivityDays.map((ad) => ad.activityLogs).flat();

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

  const userActivityFeedRedux = transformEntityIntoEntityRedux(
    userActivityFeed,
    "activityFeed",
  ) as ActivityFeedRedux;

  const userActivityDaysRedux = userActivityDays?.map(
    (ad) =>
      transformEntityIntoEntityRedux(
        ad as ActivityDayPayload,
        "activityDay",
      ) as ActivityDayRedux,
  );

  const userActivityLogsRedux = userActivityLogs?.map(
    (al) =>
      transformEntityIntoEntityRedux(
        al as ActivityLogPayload,
        "activityLog",
      ) as ActivityLogRedux,
  );

  return {
    tags: userTagsRedux,
    researchActivities: userResearchActivitiesRedux,
    researchPhases: userResearchPhasesRedux,
    researchSessions: userResearchSessionsRedux,
    researchLogs: userResearchLogsRedux,
    activityFeed: userActivityFeedRedux,
    activityDays: userActivityDaysRedux,
    activityLogs: userActivityLogsRedux,
  };
};
