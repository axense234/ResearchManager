// Types
import { SignInDto, SignUpDto } from "@researchmanager/shared/types";
import { LoadingStateType } from "../../other";
import { ModalType } from "./ModalType";
import { UserRedux } from "./UserRedux";
import { OverlayType } from "./OverlayType";
import { EntityImagesOverlayType } from "./EntityImagesOverlayType";
import { DeleteEntityOverlayType } from "./DeleteEntityOverlayType";

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
  deleteEntityOverlay: DeleteEntityOverlayType;
  entityImagesOverlay: EntityImagesOverlayType;

  // Modals
  generalModal: ModalType;
  errorFields: string[];

  // Contact
  contactUsDto: {
    title: string;
    message: string;
  };
};
