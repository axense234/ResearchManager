// Types
import { User } from "@prisma/client";
import { SignInDto, SignUpDto } from "@researchmanager/shared/types";
import { LoadingStateType } from "../../other";

export type GeneralSliceInitialStateType = {
  // Auth
  userProfile: User;
  signInUserDto: SignInDto;
  signUpUserDto: SignUpDto;
  isUserABot: boolean;

  loadingSignUpUser: LoadingStateType;
  loadingSignInUser: LoadingStateType;

  loadingGetProfileJWT: LoadingStateType;
  loadingGetProfileOAuth: LoadingStateType;

  canTryFetchingProfile: boolean;

  // Auth Carousel
  currentAuthCarouselId: number;
};
