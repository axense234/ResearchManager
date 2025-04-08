// Types
import { ExtraReducerFuncType, TagRedux } from "@/core/types";
import { AxiosError } from "axios";
import { Tag } from "@prisma/client";
// Adapter
import { tagsAdapter } from "../../adapter";
// Helpers
import { transformEntityIntoEntityRedux } from "@/helpers";
import { TagsSliceStateType } from "@/core/types/redux/entity/tag/TagsSliceStateType";

export const createTagPending: ExtraReducerFuncType<TagsSliceStateType> = (
  state,
  action,
) => {
  state.loadingCreateTag = "PENDING";
};

export const createTagFulfilled: ExtraReducerFuncType<TagsSliceStateType> = (
  state,
  action,
) => {
  const tag = action.payload as Tag;
  const axiosError = action.payload as AxiosError;

  if (axiosError !== undefined && !axiosError.response) {
    const tagRedux = transformEntityIntoEntityRedux(tag, "tag") as TagRedux;

    tagsAdapter.addOne(state, tagRedux);
    state.loadingCreateTag = "REJECTED";
  } else {
    state.loadingCreateTag = "FAILED";
  }
};

export const createTagRejected: ExtraReducerFuncType<TagsSliceStateType> = (
  state,
  action,
) => {
  state.loadingCreateTag = "FAILED";
};
