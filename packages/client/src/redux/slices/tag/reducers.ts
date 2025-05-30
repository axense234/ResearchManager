// Types
import {
  AddTagModalType,
  LoadingStateType,
  ObjectKeyValueType,
  TagRedux,
} from "@/core/types";
import { TagsSliceStateType } from "@/core/types/redux/entity/tag/TagsSliceStateType";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  ActionType,
  CreateTagDto,
  UpdateTagDto,
} from "@researchmanager/shared/types";
// Adapter
import { tagsAdapter } from "./adapter";
// Helpers
import { handleCarouselStepDirection } from "@/helpers";

export const tagsSliceReducers = {
  handleTagExampleCarouselStepDirection(
    state: TagsSliceStateType,
    action: PayloadAction<{ direction: "left" | "right" }>,
  ) {
    console.log("hit");
    state.currentTagExampleIndex = handleCarouselStepDirection(
      action.payload.direction,
      state.currentTagExampleIndex,
      state.tagsExamples.length,
    );
  },
  handleTagCarouselStepDirection(
    state: TagsSliceStateType,
    action: PayloadAction<{ direction: "left" | "right" }>,
  ) {
    state.currentTagIndex = handleCarouselStepDirection(
      action.payload.direction,
      state.currentTagIndex,
      state.ids.filter((id) => !state.entities[id].archived).length,
    );
  },
  setAddTagModal(
    state: TagsSliceStateType,
    action: PayloadAction<AddTagModalType>,
  ) {
    state.addTagModal = action.payload;
  },

  closeAddTagModal(state: TagsSliceStateType, action: PayloadAction) {
    state.addTagModal = { ...state.addTagModal, isClosed: true };
  },

  updateLoadingTagState(
    state: TagsSliceStateType,
    action: PayloadAction<{ actionType: ActionType; value: LoadingStateType }>,
  ) {
    const actionTypeFromPayload = action.payload.actionType;
    const actionValue = action.payload.value;

    switch (actionTypeFromPayload) {
      case "GET SINGLE":
        state.loadingGetUserTag = actionValue;
        break;
      case "GET MULTIPLE":
        state.loadingGetUserTags = actionValue;
        break;
      case "CREATE":
        state.loadingCreateTag = actionValue;
        break;
      case "UPDATE":
        state.loadingUpdateTag = actionValue;

        break;
      case "DELETE":
        state.loadingDeleteTag = actionValue;
        break;
      default:
        throw new Error(
          "Invalid action type, how the f did you even get this error.",
        );
    }
  },

  updateCreateTagDto(
    state: TagsSliceStateType,
    action: PayloadAction<ObjectKeyValueType>,
  ) {
    state.createTagDto = {
      ...state.createTagDto,
      [action.payload.key]: action.payload.value,
    };
  },

  updateUpdateTagDto(
    state: TagsSliceStateType,
    action: PayloadAction<ObjectKeyValueType>,
  ) {
    state.updateTagDto = {
      ...state.updateTagDto,
      [action.payload.key]: action.payload.value,
    };
  },
  setCreateTagDto(
    state: TagsSliceStateType,
    action: PayloadAction<CreateTagDto>,
  ) {
    state.createTagDto = action.payload;
  },
  setUpdateTagDto(
    state: TagsSliceStateType,
    action: PayloadAction<UpdateTagDto>,
  ) {
    state.updateTagDto = action.payload;
  },
  setTags(state: TagsSliceStateType, action: PayloadAction<TagRedux[]>) {
    tagsAdapter.setAll(state, action.payload);
  },
  setSelectedTagsIds(
    state: TagsSliceStateType,
    action: PayloadAction<string[]>,
  ) {
    state.selectedTagsIds = action.payload;
  },
  setCurrentTagIndex(state: TagsSliceStateType, action: PayloadAction<number>) {
    state.currentTagIndex = action.payload;
  },
};
