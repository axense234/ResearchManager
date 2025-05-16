// Types
import { TagRedux } from "@/core/types";
import { State } from "@/redux/api/store";
// Selectors
import { selectAllResearchActivities } from "@/redux/slices/research/activity";
import { selectAllResearchLogs } from "@/redux/slices/research/log";
import { selectAllResearchPhases } from "@/redux/slices/research/phase";

export const calculateFrequencyOfGivenTag = (state: State, tag: TagRedux) => {
  const researchActivities = selectAllResearchActivities(state);
  const researchPhases = selectAllResearchPhases(state);
  const researchLogs = selectAllResearchLogs(state);

  const tagFrequency =
    researchActivities.filter((ra) => ra.tagsIds.includes(tag.id)).length +
    researchPhases.filter((rp) => rp.tagsIds.includes(tag.id)).length +
    researchLogs.filter((rl) => rl.tagsIds.includes(tag.id)).length;

  return tagFrequency;
};
