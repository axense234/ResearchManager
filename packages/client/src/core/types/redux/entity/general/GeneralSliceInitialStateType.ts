// Types
import { User } from "@prisma/client";
import { SignInDto, SignUpDto } from "@researchmanager/shared/types";

export type GeneralSliceInitialStateType = {
  // Auth
  userProfile: User;
  signInUserDto: SignInDto;
  signUpUserDto: SignUpDto;
};
