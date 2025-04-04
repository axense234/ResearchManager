// Types
import {
  GeneralSliceInitialStateType,
  ModalType,
  ObjectKeyValueType,
} from "@/core/types";
import { authCarouselContent } from "@/data/static";
import { PayloadAction } from "@reduxjs/toolkit";
// Helpers
import { handleCarouselStepDirection } from "@/helpers";

export const generalSliceReducers = {
  updateContactUsDto(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<ObjectKeyValueType>,
  ) {
    state.contactUsDto = {
      ...state.contactUsDto,
      [action.payload.key]: action.payload.value,
    };
  },
  changeShowEntityContainerWrapper(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<boolean>,
  ) {
    state.showEntityContainerWrapper = action.payload;
  },
  updateSignInUserDto(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<ObjectKeyValueType>,
  ) {
    state.signInUserDto = {
      ...state.signInUserDto,
      [action.payload.key]: action.payload.value,
    };
  },
  updateSignUpUserDto(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<ObjectKeyValueType>,
  ) {
    state.signUpUserDto = {
      ...state.signUpUserDto,
      [action.payload.key]: action.payload.value,
    };
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
    state.currentAuthCarouselId = handleCarouselStepDirection(
      action.payload.direction,
      state.currentAuthCarouselId,
      authCarouselContent.length,
    );
  },
  changeCanTryFetchingProfile(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<boolean>,
  ) {
    state.canTryFetchingProfile = action.payload;
  },
  changeAllowAutoCarousel(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<boolean>,
  ) {
    state.allowAutoCarousel = action.payload;
  },
  setModal(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<ModalType>,
  ) {
    state.modal = { ...action.payload };
  },
  addErrorField(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<string>,
  ) {
    state.errorFields.push(action.payload);
  },
  resetErrorFields(state: GeneralSliceInitialStateType) {
    state.errorFields = [];
  },
};
