// Redux
import { State } from "@/redux/api/store";
import { createSelector } from "@reduxjs/toolkit";
// Adapater
import { tagsAdapter } from "./adapter";
// Types
import { StatisticTagReturnType } from "@/core/types";
// Helpers
import { calculateFrequencyOfGivenTag } from "@/helpers";

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

export const selectTagsExamples = (state: State) => state.tags.tagsExamples;

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

export const selectAddTagModal = (state: State) => state.tags.addTagModal;

export const selectSelectedTagsIds = (state: State) =>
  state.tags.selectedTagsIds;
