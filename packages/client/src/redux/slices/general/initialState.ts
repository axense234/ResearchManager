// Types
import { GeneralSliceInitialStateType } from "@/core/types";
// Data
import {
  signInMockDataRedux,
  signUpMockDataRedux,
  userProfileMockDataRedux,
} from "@/data/redux";

export const generalSliceInitialState: GeneralSliceInitialStateType = {
  // Auth
  userProfile: userProfileMockDataRedux,
  signInUserDto: signInMockDataRedux,
  signUpUserDto: signUpMockDataRedux,
  isUserABot: process.env.NODE_ENV === "production",

  canTryFetchingProfile: false,
  loadingSignInUser: "IDLE",
  loadingSignUpUser: "IDLE",
  loadingGetProfileJWT: "IDLE",
  loadingGetProfileOAuth: "IDLE",
  loadingLogOutUser: "IDLE",

  // Auth Carousel
  currentAuthCarouselId: 1,
  allowAutoCarousel: true,

  // Overlays
  entityOverlay: {
    showOverlay: false,
    entityType: "researchActivity",
    method: "create",
  },

  entityImagesOverlay: {
    showOverlay: false,
    entityType: "researchActivity",
    entityName: "Default Entity Name",
    entityImages: [],
  },

  // Modals
  generalModal: {
    isClosed: true,
    message: "Default message.",
    type: "general",
    isLoading: false,
  },
  errorFields: [],

  // Contact
  contactUsDto: { title: "", message: "" },
};
