// Types
import { SignInDto, SignUpDto } from "@researchmanager/shared/types";
import { LoadingStateType } from "../../other";
import { ModalType } from "./ModalType";
import { UserRedux } from "./UserRedux";
import { EntityImagesOverlayType } from "./EntityImagesOverlayType";
import { DeleteEntityOverlayType } from "./DeleteEntityOverlayType";
import { UpsertTagOverlayType } from "./UpsertTagOverlayType";
import { ActivitySubject } from "@prisma/client";
import { UpsertEntityOverlayType } from "./UpsertEntityOverlayType";
import { ViewEntityOverlayType } from "./ViewEntityOverlayType";
import { CreateEntityModalType } from "./CreateEntityModalType";

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

  // Carousels
  currentAuthCarouselId: number;
  allowAutoCarousel: boolean;

  currentEntityImageCarouselId: number;
  currentEntityImageOverlayCarouselId: number;

  // Overlays
  upsertEntityOverlay: UpsertEntityOverlayType;
  upsertTagOverlay: UpsertTagOverlayType;
  viewEntityOverlay: ViewEntityOverlayType;
  deleteEntityOverlay: DeleteEntityOverlayType;
  researchActivityImagesOverlay: EntityImagesOverlayType;
  researchPhaseImagesOverlay: EntityImagesOverlayType;

  // Modals
  generalModal: ModalType;
  createEntityModal: CreateEntityModalType;
  errorFields: string[];

  // Contact
  contactUsDto: {
    title: string;
    message: string;
  };

  // Util
  currentActivityLogSubject: ActivitySubject;
  chosenImageResearchLogId: string;
  currentEntityOverlayPriority: "view" | "upsert" | "delete";
  numberOfCurrentTagUsedOnEntities: number;

  // Images
  loadingUploadImageToCloudinary: LoadingStateType;
  selectedImagesSrc: string[];
};
