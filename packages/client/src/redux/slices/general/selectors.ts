// State
import { State } from "@/redux/api/store";

// Auth
export const selectUserProfile = (state: State) => state.general.userProfile;
export const selectSignInUserDto = (state: State) =>
  state.general.signInUserDto;
export const selectSignUpUserDto = (state: State) =>
  state.general.signUpUserDto;
