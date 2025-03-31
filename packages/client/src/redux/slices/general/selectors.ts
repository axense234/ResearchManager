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

// Auth Carousel
export const selectCurrentAuthCarouselId = (state: State) =>
  state.general.currentAuthCarouselId;
export const selectAllowAutoCarousel = (state: State) =>
  state.general.allowAutoCarousel;

// Modals
export const selectModal = (state: State) => state.general.modal;
export const selectErrorFields = (state: State) => state.general.errorFields;
