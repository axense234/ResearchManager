// Types
import { User } from "@prisma/client";
import { SignInDto, SignUpDto } from "@researchmanager/shared/types";
import { LoadingStateType } from "../../other";
import { ReduxEntityWrapper } from "../../wrapper";
import { ModalType } from "./ModalType";

export type GeneralSliceInitialStateType = {
  // Auth
  userProfile: ReduxEntityWrapper<User>;
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
  allowAutoCarousel: boolean;

  // Modals
  modal: ModalType;
  errorFields: string[];
};
