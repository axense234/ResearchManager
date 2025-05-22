// Redux
import { State } from "@/redux/api/store";
import { createSelector } from "@reduxjs/toolkit";
// Adapater
import { tagsAdapter } from "./adapter";
// Types
import { EntityByIdSelectorType, StatisticTagReturnType } from "@/core/types";
// Helpers
import { calculateFrequencyOfGivenTag } from "@/helpers";
import { selectAllResearchActivities } from "../research/activity";
import { selectAllResearchPhases } from "../research/phase";
import { selectAllResearchLogs } from "../research/log";

export const {
  selectAll: selectAllTags,
  selectById: selectTagById,
  selectIds: selectTagsIds,
  selectTotal: selectNumberOfTags,
} = tagsAdapter.getSelectors<State>((state) => state.tags);

export const selectStatisticTag = createSelector(
  [
    selectAllTags,
    (state: State) => state,
    (_: State, type: "most" | "least") => type,
  ],
  (tags, state, type): StatisticTagReturnType | null => {
    if (tags.length === 0) {
      return null;
    }

    let usedTag = tags[0];
    let usedTagFrequency = calculateFrequencyOfGivenTag(state, tags[0]);

    if (tags.length === 1) {
      return {
        tag: usedTag,
        tagFrequency: usedTagFrequency,
      };
    }

    tags.forEach((tag) => {
      const tagFrequency = calculateFrequencyOfGivenTag(state, tag);
      if (type === "most" && tagFrequency > usedTagFrequency) {
        usedTag = tag;
        usedTagFrequency = tagFrequency;
      } else if (type === "least" && tagFrequency < usedTagFrequency) {
        usedTag = tag;
        usedTagFrequency = tagFrequency;
      }
    });

    return {
      tag: usedTag,
      tagFrequency: usedTagFrequency,
    };
  },
);

export const selectTagEntitiesIdsById = createSelector(
  [
    selectAllResearchActivities,
    selectAllResearchPhases,
    selectAllResearchLogs,
    (state, tagId) => tagId,
  ],
  (researchActivities, researchPhases, researchLogs, tagId) => {
    const tagResearchActivitiesIds = researchActivities
      .filter((ra) => ra.tagsIds.includes(tagId))
      .map((ra) => {
        return { entityId: ra.id, entityType: "researchActivity" };
      }) as EntityByIdSelectorType[];

    const tagResearchPhasesIds = researchPhases
      .filter((rp) => rp.tagsIds.includes(tagId))
      .map((rp) => {
        return { entityId: rp.id, entityType: "researchPhase" };
      }) as EntityByIdSelectorType[];

    const tagResearchLogsIds = researchLogs
      .filter((rl) => rl.tagsIds.includes(tagId))
      .map((rl) => {
        return { entityId: rl.id, entityType: "researchLog" };
      }) as EntityByIdSelectorType[];

    return tagResearchActivitiesIds
      .concat(tagResearchPhasesIds)
      .concat(tagResearchLogsIds);
  },
);

export const selectTagsExamples = (state: State) => state.tags.tagsExamples;

export const selectAllTagsIds = createSelector([selectAllTags], (tags) => {
  return tags.map((tag) => tag.id);
});

export const selectTagExampleById = createSelector(
  [selectTagsExamples, (state, tagId) => tagId],
  (tags, tagId) => tags.find((tag) => tag.id === tagId),
);

export const selectTagIdByIndex = createSelector(
  [selectTagsIds, (state, index) => index],
  (tagsIds, index) => {
    return tagsIds[index - 1];
  },
);

export const selectTagExampleIdByIndex = createSelector(
  [selectTagsExamples, (state, index) => index],
  (tags, index) => tags[index - 1].id,
);

export const selectCreateTagDto = (state: State) => state.tags.createTagDto;

export const selectUpdateTagDto = (state: State) => state.tags.updateTagDto;

export const selectLoadingGetUserTags = (state: State) =>
  state.tags.loadingGetUserTags;

export const selectLoadingGetUserTag = (state: State) =>
  state.tags.loadingGetUserTag;

export const selectLoadingCreateTag = (state: State) =>
  state.tags.loadingCreateTag;

export const selectLoadingUpdateTag = (state: State) =>
  state.tags.loadingUpdateTag;

export const selectLoadingDeleteTag = (state: State) =>
  state.tags.loadingDeleteTag;

export const selectCurrentTagExampleIndex = (state: State) =>
  state.tags.currentTagExampleIndex;

export const selectCurrentTagIndex = (state: State) =>
  state.tags.currentTagIndex;

export const selectAddTagModal = (state: State) => state.tags.addTagModal;

export const selectSelectedTagsIds = (state: State) =>
  state.tags.selectedTagsIds;
