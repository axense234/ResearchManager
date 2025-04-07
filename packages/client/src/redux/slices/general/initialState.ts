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

  // Auth Carousel
  currentAuthCarouselId: 1,
  allowAutoCarousel: true,

  // Modals
  modal: {
    isClosed: true,
    message: "Default message.",
    type: "general",
    isLoading: false,
  },
  errorFields: [],

  // Util
  showEntityContainerWrapper: false,

  // Contact
  contactUsDto: { title: "", message: "" },
};
