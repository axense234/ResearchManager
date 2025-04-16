// Types
import {
  ExtraReducerFuncType,
  TagRedux,
  TagsSliceStateType,
} from "@/core/types";
import { AxiosError } from "axios";
import { Tag } from "@prisma/client";
// Adapter
import { tagsAdapter } from "../../adapter";
// Helpers
import { transformEntityIntoEntityRedux } from "@/helpers";

export const getUserTagsPending: ExtraReducerFuncType<TagsSliceStateType> = (
  state,
  action,
) => {
  state.loadingGetUserTags = "PENDING";
};

export const getUserTagsFulfilled: ExtraReducerFuncType<TagsSliceStateType> = (
  state,
  action,
) => {
  const tags = action.payload as Tag[];
  const axiosError = action.payload as AxiosError;

  if (!axiosError?.isAxiosError) {
    const tagsRedux = tags.map((tag) => {
      return transformEntityIntoEntityRedux(tag, "tag") as TagRedux;
    });

    tagsAdapter.removeAll(state);
    tagsAdapter.addMany(state, tagsRedux);
    state.loadingGetUserTags = "SUCCEEDED";
  } else {
    state.loadingGetUserTags = "REJECTED";
  }
};

export const getUserTagsRejected: ExtraReducerFuncType<TagsSliceStateType> = (
  state,
  action,
) => {
  state.loadingGetUserTags = "REJECTED";
};
