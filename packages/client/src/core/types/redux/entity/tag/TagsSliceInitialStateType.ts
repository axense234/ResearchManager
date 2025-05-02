// Types
import { CreateTagDto } from "@researchmanager/shared/types";
import { TagRedux } from "./TagRedux";
import { LoadingStateType } from "../../other";
import { AddTagModalType } from "../general";

export type TagsSliceInitialStateType = {
  createTagDto: CreateTagDto;

  tagsExamples: TagRedux[];

  addTagModal: AddTagModalType;
  selectedTagsIds: string[];

  loadingCreateTag: LoadingStateType;
  loadingDeleteTag: LoadingStateType;
  loadingUpdateTag: LoadingStateType;
  loadingGetUserTags: LoadingStateType;
  loadingGetUserTag: LoadingStateType;
};
