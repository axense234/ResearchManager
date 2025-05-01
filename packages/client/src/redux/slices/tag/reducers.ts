// Types
import {
  AddTagModalType,
  LoadingStateType,
  ObjectKeyValueType,
  TagRedux,
} from "@/core/types";
import { TagsSliceStateType } from "@/core/types/redux/entity/tag/TagsSliceStateType";
import { PayloadAction } from "@reduxjs/toolkit";
import { ActionType } from "@researchmanager/shared/types";
// Adapter
import { tagsAdapter } from "./adapter";

export const tagsSliceReducers = {
  setAddTagModal(
    state: TagsSliceStateType,
    action: PayloadAction<AddTagModalType>,
  ) {
    state.addTagModal = action.payload;
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

  setTags(state: TagsSliceStateType, action: PayloadAction<TagRedux[]>) {
    tagsAdapter.setAll(state, action.payload);
  },
  setSelectedTagId(state: TagsSliceStateType, action: PayloadAction<string>) {
    state.selectedTagId = action.payload;
  },
};
