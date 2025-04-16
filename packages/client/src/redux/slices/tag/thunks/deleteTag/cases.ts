// Types
import { ExtraReducerFuncType } from "@/core/types";
import { TagsSliceStateType } from "@/core/types/redux/entity/tag/TagsSliceStateType";
import { Tag } from "@prisma/client";
import { AxiosError } from "axios";
// Adapter
import { tagsAdapter } from "../../adapter";

export const deleteTagPending: ExtraReducerFuncType<TagsSliceStateType> = (
  state,
  action,
) => {
  state.loadingDeleteTag = "PENDING";
};

export const deleteTagFulfilled: ExtraReducerFuncType<TagsSliceStateType> = (
  state,
  action,
) => {
  const tag = action.payload as Tag;
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.isAxiosError) {
    tagsAdapter.removeOne(state, tag.id);
    state.loadingDeleteTag = "SUCCEEDED";
  } else {
    state.loadingDeleteTag = "REJECTED";
  }
};

export const deleteTagRejected: ExtraReducerFuncType<TagsSliceStateType> = (
  state,
  action,
) => {
  state.loadingDeleteTag = "REJECTED";
};
