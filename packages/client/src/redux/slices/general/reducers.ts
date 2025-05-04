// Types
import {
  DeleteEntityOverlayType,
  EntityImagesOverlayType,
  GeneralSliceInitialStateType,
  ModalType,
  ObjectKeyValueType,
  OverlayType,
} from "@/core/types";
import { PayloadAction } from "@reduxjs/toolkit";
// Data
import { authCarouselContent } from "@/data/general/components";
// Helpers
import { handleCarouselStepDirection } from "@/helpers";

export const generalSliceReducers = {
  setEntityOverlay(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<OverlayType>,
  ) {
    state.entityOverlay = { ...action.payload };
  },
  setDeleteEntityOverlay(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<DeleteEntityOverlayType>,
  ) {
    state.deleteEntityOverlay = { ...action.payload };
  },
  setEntityImagesOverlay(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<EntityImagesOverlayType>,
  ) {
    state.entityImagesOverlay = { ...action.payload };
  },
  updateContactUsDto(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<ObjectKeyValueType>,
  ) {
    state.contactUsDto = {
      ...state.contactUsDto,
      [action.payload.key]: action.payload.value,
    };
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
  setGeneralModal(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<ModalType>,
  ) {
    state.generalModal = { ...action.payload };
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
