// Redux
import { State } from "@/redux/api/store";
// Adapater
import { tagsAdapter } from "./adapter";
import { createSelector } from "@reduxjs/toolkit";
import { StatisticTagReturnType } from "@/core/types";

export const {
  selectAll: selectAllTags,
  selectById: selectTagById,
  selectIds: selectTagsIds,
  selectTotal: selectNumberOfTags,
} = tagsAdapter.getSelectors<State>((state) => state.tags);

export const selectStatisticTag = createSelector(
  [selectAllTags, (state, type: "most" | "least") => type],
  (tags, type): StatisticTagReturnType | null => {
    if (tags.length === 0) {
      return null;
    }

    let usedTag = tags[0];
    let usedTagNumberOfEntitiesAttached =
      tags[0].researchActivitiesIds.length +
      tags[0].researchPhasesIds.length +
      tags[0].researchLogsIds.length;

    if (tags.length === 1) {
      return {
        tag: usedTag,
        numberOfEntitiesAttached: usedTagNumberOfEntitiesAttached,
      };
    }

    if (tags.length > 1) {
      tags.forEach((tag) => {
        const numberOfEntitiesAttached =
          tag.researchActivitiesIds.length +
          tag.researchPhasesIds.length +
          tag.researchLogsIds.length;

        if (
          type === "most" &&
          numberOfEntitiesAttached > usedTagNumberOfEntitiesAttached
        ) {
          usedTag = tag;
          usedTagNumberOfEntitiesAttached = numberOfEntitiesAttached;
        } else if (
          type === "least" &&
          numberOfEntitiesAttached < usedTagNumberOfEntitiesAttached
        ) {
          usedTag = tag;
          usedTagNumberOfEntitiesAttached = numberOfEntitiesAttached;
        }
      });
    }

    return {
      tag: usedTag,
      numberOfEntitiesAttached: usedTagNumberOfEntitiesAttached,
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
