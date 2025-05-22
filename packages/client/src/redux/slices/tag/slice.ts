// Redux
import { createSlice } from "@reduxjs/toolkit";
// Initial State
import { tagsSliceState } from "./initialState";
// Reducers
import { tagsSliceReducers } from "./reducers";
// Extra Reducers
import { tagsSliceExtraReducers } from "./thunks";

const tagsSlice = createSlice({
  name: "tags",
  initialState: tagsSliceState,
  reducers: tagsSliceReducers,
  extraReducers(builder) {
    tagsSliceExtraReducers(builder);
  },
});

export const {
  updateCreateTagDto,
  updateLoadingTagState,
  setTags,
  setAddTagModal,
  setSelectedTagsIds,
  closeAddTagModal,
  setCreateTagDto,
  updateUpdateTagDto,
  handleTagCarouselStepDirection,
  handleTagExampleCarouselStepDirection,
  setUpdateTagDto,
  setCurrentTagIndex,
} = tagsSlice.actions;

export default tagsSlice.reducer;
