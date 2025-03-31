// Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";
// Initial State
import { generalSliceInitialState } from "./initialState";
// Extra Reducers
import { generalSliceExtraReducers } from "./thunks/extraReducers";
// Reducers
import { generalSliceReducers } from "./reducers";

const generalSlice = createSlice({
  name: "general",
  initialState: generalSliceInitialState,
  reducers: generalSliceReducers,
  extraReducers(builder) {
    generalSliceExtraReducers(builder);
  },
});

export const {
  updateSignInUserDto,
  updateSignUpUserDto,
  changeIsUserABot,
  handleAuthCarouselStepDirection,
  setCurrentAuthCarouselId,
  changeCanTryFetchingProfile,
  changeAllowAutoCarousel,
  setModal,
  addErrorField,
  resetErrorFields,
} = generalSlice.actions;

export default generalSlice.reducer;
