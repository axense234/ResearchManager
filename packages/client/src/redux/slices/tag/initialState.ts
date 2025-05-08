// Types
import { TagsSliceInitialStateType } from "@/core/types/redux/entity/tag/TagsSliceInitialStateType";
import { TagsSliceStateType } from "@/core/types/redux/entity/tag/TagsSliceStateType";
import { TagRedux } from "@/core/types";
// Adapter
import { tagsAdapter } from "./adapter";
// Mock Data & Data
import { tagsMockData, updateTagMockData } from "@researchmanager/shared/mock";
import { defaultCreateTagDto } from "@/data/redux";
// Helpers
import { transformEntityIntoEntityRedux } from "@/helpers";

export const tagsSliceInitialState = {
  createTagDto: defaultCreateTagDto,
  updateTagDto: updateTagMockData[0],
  tagsExamples: tagsMockData.map((tag) => {
    return transformEntityIntoEntityRedux(tag, "tag") as TagRedux;
  }),
  loadingCreateTag: "IDLE",
  loadingDeleteTag: "IDLE",
  loadingUpdateTag: "IDLE",
  loadingGetUserTags: "IDLE",
  loadingGetUserTag: "IDLE",
  addTagModal: {
    isClosed: true,
    entityType: "researchActivity",
    method: "create",
    location: "overlay",
  },
  selectedTagsIds: [],
} as TagsSliceInitialStateType;

export const tagsSliceState = tagsAdapter.getInitialState(
  tagsSliceInitialState,
) as TagsSliceStateType;
