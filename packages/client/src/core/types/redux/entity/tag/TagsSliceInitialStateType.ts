// Types
import { CreateTagDto } from "@researchmanager/shared/types";
import { TagRedux } from "./TagRedux";
import { LoadingStateType } from "../../other";

export type TagsSliceInitialStateType = {
  createTagDto: CreateTagDto;

  tagsExamples: TagRedux[];

  loadingCreateTag: LoadingStateType;
  loadingDeleteTag: LoadingStateType;
  loadingUpdateTag: LoadingStateType;
  loadingGetUserTags: LoadingStateType;
  loadingGetUserTag: LoadingStateType;
};
