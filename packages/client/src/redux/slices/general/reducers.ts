// Types
import { GeneralSliceInitialStateType, ObjectKeyValueType } from "@/core/types";
import { authCarouselContent } from "@/data/static";
import { PayloadAction } from "@reduxjs/toolkit";

export const generalSliceReducers = {
  updateSignInUserDto(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<ObjectKeyValueType>,
  ) {
    state.signInUserDto = {
      ...state.signInUserDto,
      [action.payload.key]: action.payload.value,
    };
    console.log(state.signInUserDto);
  },
  updateSignUpUserDto(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<ObjectKeyValueType>,
  ) {
    state.signUpUserDto = {
      ...state.signUpUserDto,
      [action.payload.key]: action.payload.value,
    };
    console.log(state.signUpUserDto);
  },
  changeIsUserABot(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<boolean>,
  ) {
    state.isUserABot = action.payload;
  },
  setCurrentAuthCarouselId(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<number>,
  ) {
    state.currentAuthCarouselId = action.payload;
  },
  handleAuthCarouselStepDirection(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<{ direction: "left" | "right" }>,
  ) {
    if (action.payload.direction === "left") {
      state.currentAuthCarouselId =
        state.currentAuthCarouselId - 1 < 1
          ? authCarouselContent.length
          : state.currentAuthCarouselId - 1;
    } else if (action.payload.direction === "right") {
      state.currentAuthCarouselId =
        state.currentAuthCarouselId + 1 > 4
          ? 1
          : state.currentAuthCarouselId + 1;
    }
  },
  changeCanTryFetchingProfile(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<boolean>,
  ) {
    state.canTryFetchingProfile = action.payload;
  },
};
