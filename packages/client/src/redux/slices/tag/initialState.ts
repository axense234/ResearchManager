// Types
import { TagsSliceInitialStateType } from "@/core/types/redux/entity/tag/TagsSliceInitialStateType";
import { TagsSliceStateType } from "@/core/types/redux/entity/tag/TagsSliceStateType";
import { TagRedux } from "@/core/types";
// Adapter
import { tagsAdapter } from "./adapter";
// Mock Data
import { createTagMockData, tagsMockData } from "@researchmanager/shared/mock";
// Helpers
import { transformEntityIntoEntityRedux } from "@/helpers";

export const tagsSliceInitialState = tagsAdapter.getInitialState({
  createTagDto: createTagMockData[0],
  tagsExamples: tagsMockData.map((tag) => {
    return transformEntityIntoEntityRedux(tag) as TagRedux;
  }),
  loadingCreateTag: "IDLE",
  loadingDeleteTag: "IDLE",
  loadingUpdateTag: "IDLE",
  loadingGetUserTags: "IDLE",
  loadingGetUserTag: "IDLE",
} as TagsSliceInitialStateType) as TagsSliceStateType;
