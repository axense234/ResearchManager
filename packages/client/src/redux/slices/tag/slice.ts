// Redux
import { createSlice } from "@reduxjs/toolkit";
// Initial State
import { tagsSliceInitialState } from "./initialState";
// Reducers
import { tagsSliceReducers } from "./reducers";
// Extra Reducers
import { tagsSliceExtraReducers } from "./thunks";

const tagsSlice = createSlice({
  name: "tags",
  initialState: tagsSliceInitialState,
  reducers: tagsSliceReducers,
  extraReducers(builder) {
    tagsSliceExtraReducers(builder);
  },
});

export const { updateCreateTagDto, updateLoadingTagState } = tagsSlice.actions;

export default tagsSlice.reducer;
