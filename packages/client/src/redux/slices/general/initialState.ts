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

  // Carousel
  currentAuthCarouselId: 1,
  allowAutoCarousel: true,

  currentEntityImageCarouselId: 1,
  currentEntityImageOverlayCarouselId: 1,

  // Overlays
  entityOverlay: {
    showOverlay: false,
    entityType: "researchActivity",
    method: "create",
  },

  deleteEntityOverlay: {
    showOverlay: false,
    entityType: "researchActivity",
    entityId: "",
  },

  researchActivityImagesOverlay: {
    showOverlay: false,
    entityName: "Default RA Name",
    entityImages: [],
  },

  researchPhaseImagesOverlay: {
    showOverlay: false,
    entityName: "Default RP Name",
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
