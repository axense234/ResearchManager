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

export const getUserTagPending: ExtraReducerFuncType<TagsSliceStateType> = (
  state,
  action,
) => {
  state.loadingGetUserTag = "PENDING";
};

export const getUserTagFulfilled: ExtraReducerFuncType<TagsSliceStateType> = (
  state,
  action,
) => {
  const tag = action.payload as Tag;
  const axiosError = action.payload as AxiosError;

  if (axiosError !== undefined && !axiosError.response) {
    const tagRedux = transformEntityIntoEntityRedux(tag, "tag") as TagRedux;

    tagsAdapter.upsertOne(state, tagRedux);
    state.loadingGetUserTag = "SUCCEDED";
  } else {
    state.loadingGetUserTag = "FAILED";
  }
};

export const getUserTagRejected: ExtraReducerFuncType<TagsSliceStateType> = (
  state,
  action,
) => {
  state.loadingGetUserTag = "FAILED";
};
