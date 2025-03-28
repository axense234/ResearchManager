// State
import { State } from "@/redux/api/store";

// Auth
export const selectUserProfile = (state: State) => state.general.userProfile;
export const selectSignInUserDto = (state: State) =>
  state.general.signInUserDto;
export const selectSignUpUserDto = (state: State) =>
  state.general.signUpUserDto;
export const selectIsUserABot = (state: State) => state.general.isUserABot;
export const selectLoadingSignUpUser = (state: State) =>
  state.general.loadingSignUpUser;
export const selectLoadingSignInUser = (state: State) =>
  state.general.loadingSignInUser;
