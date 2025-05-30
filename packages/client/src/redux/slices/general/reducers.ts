// Types
import {
  CreateEntityModalType,
  DeleteEntityOverlayType,
  EntityImagesOverlayType,
  GeneralSliceInitialStateType,
  ModalType,
  ObjectKeyValueType,
  UpsertEntityOverlayType,
  UpsertTagOverlayType,
  ViewEntityOverlayType,
} from "@/core/types";
import { PayloadAction, PayloadActionCreator } from "@reduxjs/toolkit";
// Data
import { authCarouselContent } from "@/data/general/components";
// Helpers
import { handleCarouselStepDirection } from "@/helpers";
import { ActivitySubject } from "@prisma/client";

export const generalSliceReducers = {
  setUpsertEntityOverlay(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<UpsertEntityOverlayType>,
  ) {
    state.upsertEntityOverlay = { ...action.payload };
  },
  setUpsertTagOverlay(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<UpsertTagOverlayType>,
  ) {
    state.upsertTagOverlay = { ...action.payload };
  },
  setViewEntityOverlay(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<ViewEntityOverlayType>,
  ) {
    state.viewEntityOverlay = { ...action.payload };
  },
  setDeleteEntityOverlay(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<DeleteEntityOverlayType>,
  ) {
    state.deleteEntityOverlay = { ...action.payload };
  },
  setResearchActivityImagesOverlay(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<EntityImagesOverlayType>,
  ) {
    state.researchActivityImagesOverlay = { ...action.payload };
  },
  setResearchPhaseImagesOverlay(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<EntityImagesOverlayType>,
  ) {
    state.researchPhaseImagesOverlay = { ...action.payload };
  },
  closeUpsertEntityOverlay(
    state: GeneralSliceInitialStateType,
    action: PayloadAction,
  ) {
    state.upsertEntityOverlay = {
      ...state.upsertEntityOverlay,
      showOverlay: false,
    };
  },
  closeUpsertTagOverlay(
    state: GeneralSliceInitialStateType,
    action: PayloadAction,
  ) {
    state.upsertTagOverlay = { ...state.upsertTagOverlay, showOverlay: false };
  },
  closeViewEntityOverlay(
    state: GeneralSliceInitialStateType,
    action: PayloadAction,
  ) {
    state.viewEntityOverlay = {
      ...state.viewEntityOverlay,
      showOverlay: false,
    };
  },
  closeDeleteEntityOverlay(
    state: GeneralSliceInitialStateType,
    action: PayloadAction,
  ) {
    state.deleteEntityOverlay = {
      ...state.deleteEntityOverlay,
      showOverlay: false,
    };
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
  setCurrentEntityImageOverlayCarouselId(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<number>,
  ) {
    state.currentEntityImageOverlayCarouselId = action.payload;
  },
  setCurrentEntityImageCarouselId(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<number>,
  ) {
    state.currentEntityImageCarouselId = action.payload;
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
  handleEntityImageCarouselStepDirection(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<{
      direction: "left" | "right";
      numberOfImages: number;
    }>,
  ) {
    state.currentEntityImageCarouselId = handleCarouselStepDirection(
      action.payload.direction,
      state.currentEntityImageCarouselId,
      action.payload.numberOfImages,
    );
  },
  handleEntityImageOverlayCarouselStepDirection(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<{
      direction: "left" | "right";
      numberOfImages: number;
    }>,
  ) {
    state.currentEntityImageOverlayCarouselId = handleCarouselStepDirection(
      action.payload.direction,
      state.currentEntityImageOverlayCarouselId,
      action.payload.numberOfImages,
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
  setCurrentActivityLogSubject(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<ActivitySubject>,
  ) {
    state.currentActivityLogSubject = action.payload;
  },
  setSelectedImagesSrc(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<string[]>,
  ) {
    state.selectedImagesSrc = action.payload;
  },
  setChosenImageResearchLogId(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<string>,
  ) {
    state.chosenImageResearchLogId = action.payload;
  },
  setCurrentEntityOverlayPriority(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<"view" | "upsert" | "delete">,
  ) {
    state.currentEntityOverlayPriority = action.payload;
  },
  setCreateEntityModal(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<CreateEntityModalType>,
  ) {
    state.createEntityModal = action.payload;
  },
  closeCreateEntityModal(
    state: GeneralSliceInitialStateType,
    action: PayloadAction,
  ) {
    state.createEntityModal = { ...state.createEntityModal, isClosed: true };
  },
  setNumberOfCurrentTagUsedOnEntities(
    state: GeneralSliceInitialStateType,
    action: PayloadAction<number>,
  ) {
    state.numberOfCurrentTagUsedOnEntities = action.payload;
  },
};
