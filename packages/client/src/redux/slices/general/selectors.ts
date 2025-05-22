// State
import { State } from "@/redux/api/store";

// Auth
export const selectUserProfile = (state: State) => state.general.userProfile;
export const selectSignInUserDto = (state: State) =>
  state.general.signInUserDto;
export const selectSignUpUserDto = (state: State) =>
  state.general.signUpUserDto;
export const selectIsUserABot = (state: State) => state.general.isUserABot;
export const selectLoadingSignUpUser = (state: State) =>
  state.general.loadingSignUpUser;
export const selectLoadingSignInUser = (state: State) =>
  state.general.loadingSignInUser;
export const selectLoadingGetProfileJWT = (state: State) =>
  state.general.loadingGetProfileJWT;
export const selectLoadingGetProfileOAuth = (state: State) =>
  state.general.loadingGetProfileOAuth;
export const selectCanTryFetchingProfile = (state: State) =>
  state.general.canTryFetchingProfile;

export const selectLoadingLogOutUser = (state: State) =>
  state.general.loadingLogOutUser;

// Carousel
export const selectCurrentAuthCarouselId = (state: State) =>
  state.general.currentAuthCarouselId;
export const selectAllowAutoCarousel = (state: State) =>
  state.general.allowAutoCarousel;
export const selectCurrentEntityImageCarouselId = (state: State) =>
  state.general.currentEntityImageCarouselId;
export const selectCurrentEntityOverlayImageCarouselId = (state: State) =>
  state.general.currentEntityImageOverlayCarouselId;

// Modals
export const selectGeneralModal = (state: State) => state.general.generalModal;
export const selectCreateEntityModal = (state: State) =>
  state.general.createEntityModal;
export const selectErrorFields = (state: State) => state.general.errorFields;

// Overlays
export const selectUpsertEntityOverlay = (state: State) =>
  state.general.upsertEntityOverlay;

export const selectUpsertTagOverlay = (state: State) =>
  state.general.upsertTagOverlay;

export const selectViewEntityOverlay = (state: State) =>
  state.general.viewEntityOverlay;

export const selectDeleteEntityOverlay = (state: State) =>
  state.general.deleteEntityOverlay;

export const selectResearchActivityImagesOverlay = (state: State) =>
  state.general.researchActivityImagesOverlay;

export const selectResearchPhaseImagesOverlay = (state: State) =>
  state.general.researchPhaseImagesOverlay;

// Contact
export const selectContactUsDto = (state: State) => state.general.contactUsDto;

// Util
export const selectCurrentActivityLogSubject = (state: State) =>
  state.general.currentActivityLogSubject;

export const selectChosenImageResearchLogId = (state: State) =>
  state.general.chosenImageResearchLogId;

export const selectCurrentEntityOverlayPriority = (state: State) =>
  state.general.currentEntityOverlayPriority;

export const selectNumberOfCurrentTagUsedOnEntities = (state: State) =>
  state.general.numberOfCurrentTagUsedOnEntities;

// Images
export const selectLoadingUploadImageToCloudinary = (state: State) =>
  state.general.loadingUploadImageToCloudinary;

export const selectSelectedImagesSrc = (state: State) =>
  state.general.selectedImagesSrc;
