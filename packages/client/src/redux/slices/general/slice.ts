// Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";
// Initial State
import { generalSliceInitialState } from "./initialState";
// Reducers
import { generalSliceReducers } from "./reducers";
// Extra Reducers
import { generalSliceExtraReducers } from "./thunks";

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
  setGeneralModal,
  addErrorField,
  resetErrorFields,
  updateContactUsDto,
  setEntityOverlay,
  setEntityImagesOverlay,
  setDeleteEntityOverlay,
} = generalSlice.actions;

export default generalSlice.reducer;
