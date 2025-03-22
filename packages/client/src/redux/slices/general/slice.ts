// Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";
// Initial State
import { generalSliceInitialState } from "./initialState";
// Reducers
import { generalSliceReducers } from "./reducers";
// Extra Reducers
import { generalSliceExtraReducers } from "./thunks/extraReducers";

const generalSlice = createSlice({
  name: "general",
  initialState: generalSliceInitialState,
  reducers: generalSliceReducers,
  extraReducers: generalSliceExtraReducers,
});

export const { updateSignInUserDto, updateSignUpUserDto } =
  generalSlice.actions;

export default generalSlice.reducer;
