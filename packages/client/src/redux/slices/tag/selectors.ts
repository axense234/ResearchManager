// Redux
import { State } from "@/redux/api/store";
// Adapater
import { tagsAdapter } from "./adapter";

export const {
  selectAll: selectAllTags,
  selectById: selectTagById,
  selectIds: selectTagsIds,
} = tagsAdapter.getSelectors<State>((state) => state.tags);

export const selectTagsExamples = (state: State) => state.tags.tagsExamples;

export const selectCreateTagDto = (state: State) => state.tags.createTagDto;

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
