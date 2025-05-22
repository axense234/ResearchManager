// Types
import { CreateTagDto, UpdateTagDto } from "@researchmanager/shared/types";
import { TagRedux } from "./TagRedux";
import { LoadingStateType } from "../../other";
import { AddTagModalType } from "../general";

export type TagsSliceInitialStateType = {
  createTagDto: CreateTagDto;
  updateTagDto: UpdateTagDto;

  tagsExamples: TagRedux[];

  addTagModal: AddTagModalType;
  selectedTagsIds: string[];

  currentTagExampleIndex: number;
  currentTagIndex: number;

  loadingCreateTag: LoadingStateType;
  loadingDeleteTag: LoadingStateType;
  loadingUpdateTag: LoadingStateType;
  loadingGetUserTags: LoadingStateType;
  loadingGetUserTag: LoadingStateType;
};
