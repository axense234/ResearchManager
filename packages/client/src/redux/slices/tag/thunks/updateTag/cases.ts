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

export const updateTagPending: ExtraReducerFuncType<TagsSliceStateType> = (
  state,
  action,
) => {
  state.loadingUpdateTag = "PENDING";
};

export const updateTagFulfilled: ExtraReducerFuncType<TagsSliceStateType> = (
  state,
  action,
) => {
  const tag = action.payload as Tag;
  const axiosError = action.payload as AxiosError;

  if (axiosError !== undefined && !axiosError.response) {
    const tagRedux = transformEntityIntoEntityRedux(tag, "tag") as TagRedux;

    tagsAdapter.updateOne(state, {
      changes: { ...tagRedux },
      id: tagRedux.id,
    });
    state.loadingUpdateTag = "SUCCEDED";
  } else {
    state.loadingUpdateTag = "FAILED";
  }
};

export const updateTagRejected: ExtraReducerFuncType<TagsSliceStateType> = (
  state,
  action,
) => {
  state.loadingUpdateTag = "FAILED";
};
