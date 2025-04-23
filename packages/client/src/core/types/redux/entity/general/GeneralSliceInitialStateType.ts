// Types
import { SignInDto, SignUpDto } from "@researchmanager/shared/types";
import { LoadingStateType } from "../../other";
import { ModalType } from "./ModalType";
import { UserRedux } from "./UserRedux";
import { OverlayType } from "./OverlayType";

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

  // Overlays
  entityOverlay: OverlayType;

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
