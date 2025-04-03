// Types
import {
  ResearchLogPayload,
  ResearchPhasePayload,
  ResearchSessionPayload,
  UserPayload,
} from "@researchmanager/shared/types";
import {
  EntitiesSliceInitialStateType,
  ResearchActivityRedux,
  ResearchLogRedux,
  ResearchPhaseRedux,
  ResearchSessionRedux,
  TagRedux,
} from "@/core/types";
// Adapters
import { researchActivitiesAdapter } from "@/redux/slices/research/activity";
import { researchLogsAdapter } from "@/redux/slices/research/log";
import { researchPhasesAdapter } from "@/redux/slices/research/phase";
import { researchSessionsAdapter } from "@/redux/slices/research/session";
import { tagsAdapter } from "@/redux/slices/tag";
// Helpers
import { transformEntityIntoEntityRedux } from "./transformEntityIntoEntityRedux";

export const setEntitiesStateFromUserPayload = (
  state: EntitiesSliceInitialStateType,
  userPayload: UserPayload,
) => {
  console.log("setEntitiesStateFromUserPayload hit");
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

  if (userTagsRedux) {
    tagsAdapter.setAll(state.tags, userTagsRedux);
  }
  if (userResearchActivitiesRedux) {
    researchActivitiesAdapter.setAll(
      state.researchActivities,
      userResearchActivitiesRedux,
    );
  }
  if (userResearchPhasesRedux) {
    researchPhasesAdapter.setAll(state.researchPhases, userResearchPhasesRedux);
  }
  if (userResearchSessionsRedux) {
    researchSessionsAdapter.setAll(
      state.researchSessions,
      userResearchSessionsRedux,
    );
  }
  if (userResearchLogsRedux) {
    researchLogsAdapter.setAll(state.researchLogs, userResearchLogsRedux);
  }
};
