// Types
import { GeneralSliceInitialStateType } from "@/core/types";
// Mock Data
import {
  signInMockData,
  signUpMockData,
  usersMockData,
} from "@researchmanager/shared/mock";

export const generalSliceInitialState: GeneralSliceInitialStateType = {
  // Auth
  userProfile: usersMockData[0],
  signInUserDto: signInMockData[0],
  signUpUserDto: signUpMockData[0],
  isUserABot: true,

  canTryFetchingProfile: false,
  loadingSignInUser: "IDLE",
  loadingSignUpUser: "IDLE",
  loadingGetProfileJWT: "IDLE",
  loadingGetProfileOAuth: "IDLE",

  // Auth Carousel
  currentAuthCarouselId: 1,
};
