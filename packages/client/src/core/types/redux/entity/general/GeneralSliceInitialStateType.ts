// Types
import { SignInDto, SignUpDto } from "@researchmanager/shared/types";
import { LoadingStateType } from "../../other";
import { ModalType } from "./ModalType";
import { UserRedux } from "./UserRedux";

export type GeneralSliceInitialStateType = {
  // Auth
  userProfile: UserRedux;
  signInUserDto: SignInDto;
  signUpUserDto: SignUpDto;
  isUserABot: boolean;

  loadingSignUpUser: LoadingStateType;
  loadingSignInUser: LoadingStateType;

  loadingGetProfileJWT: LoadingStateType;
  loadingGetProfileOAuth: LoadingStateType;

  loadingLogOutUser: LoadingStateType;

  canTryFetchingProfile: boolean;

  // Auth Carousel
  currentAuthCarouselId: number;
  allowAutoCarousel: boolean;

  // Modals
  modal: ModalType;
  errorFields: string[];

  // Util
  showEntityContainerWrapper: boolean;

  // Contact
  contactUsDto: {
    title: string;
    message: string;
  };
};
