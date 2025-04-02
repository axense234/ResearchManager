// Types
import { TagsSliceStateType } from "@/core/types";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
// Extra Reducers
import {
  createTag,
  createTagFulfilled,
  createTagPending,
  createTagRejected,
} from "./createTag";
import {
  deleteTag,
  deleteTagFulfilled,
  deleteTagPending,
  deleteTagRejected,
} from "./deleteTag";
import {
  getUserTags,
  getUserTagsFulfilled,
  getUserTagsPending,
  getUserTagsRejected,
} from "./getUserTags";
import {
  getUserTag,
  getUserTagFulfilled,
  getUserTagPending,
  getUserTagRejected,
} from "./getUserTag";
import {
  updateTag,
  updateTagFulfilled,
  updateTagPending,
  updateTagRejected,
} from "./updateTag";

export const tagsSliceExtraReducers: (
  builder: ActionReducerMapBuilder<TagsSliceStateType>,
) => void = (builder) => {
  builder
    .addCase(createTag.pending, createTagPending)
    .addCase(createTag.fulfilled, createTagFulfilled)
    .addCase(createTag.rejected, createTagRejected)
    .addCase(deleteTag.pending, deleteTagPending)
    .addCase(deleteTag.fulfilled, deleteTagFulfilled)
    .addCase(deleteTag.rejected, deleteTagRejected)
    .addCase(getUserTags.pending, getUserTagsPending)
    .addCase(getUserTags.fulfilled, getUserTagsFulfilled)
    .addCase(getUserTags.rejected, getUserTagsRejected)
    .addCase(getUserTag.pending, getUserTagPending)
    .addCase(getUserTag.fulfilled, getUserTagFulfilled)
    .addCase(getUserTag.rejected, getUserTagRejected)
    .addCase(updateTag.pending, updateTagPending)
    .addCase(updateTag.fulfilled, updateTagFulfilled)
    .addCase(updateTag.rejected, updateTagRejected);
};
