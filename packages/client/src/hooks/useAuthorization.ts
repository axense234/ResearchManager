// Redux and Hooks
import {
  getProfileJWT,
  selectCanTryFetchingProfile,
  selectLoadingGetProfileJWT,
  selectLoadingGetProfileOAuth,
  selectLoadingSignInUser,
  selectUserProfile,
} from "@/redux/slices/general";
import { useAppDispatch, useAppSelector } from "./redux";
import { useRedirect } from "./useRedirect";
import { changeCanTryFetchingProfile } from "@/redux/slices/general/slice";
import { getProfileOAuth } from "@/redux/slices/general/thunks/getProfileOAuth";
// i18n
import { usePathname, useRouter } from "@/i18n/routing";
// React
import { useEffect } from "react";

export const useAuthorization = () => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const router = useRouter();

  const loadingGetProfileJWT = useAppSelector(selectLoadingGetProfileJWT);
  const loadingGetProfileOAuth = useAppSelector(selectLoadingGetProfileOAuth);

  const loadingSignInUser = useAppSelector(selectLoadingSignInUser);

  const canTryFetchingProfile = useAppSelector(selectCanTryFetchingProfile);

  const profile = useAppSelector(selectUserProfile);

  const canRedirect =
    loadingGetProfileJWT === "SUCCEDED" ||
    loadingGetProfileOAuth === "FAILED" ||
    loadingGetProfileOAuth === "SUCCEDED";

  useEffect(() => {
    const createResearchManagerAccount = localStorage.getItem(
      "createResearchManagerAccount",
    );
    dispatch(
      changeCanTryFetchingProfile(createResearchManagerAccount !== "create"),
    );
  }, [loadingSignInUser]);

  useEffect(() => {
    if (loadingGetProfileJWT === "IDLE" && canTryFetchingProfile) {
      dispatch(getProfileJWT());
    }
  }, [loadingGetProfileJWT, canTryFetchingProfile, dispatch]);

  useEffect(() => {
    if (
      loadingGetProfileJWT === "FAILED" &&
      loadingGetProfileOAuth === "IDLE" &&
      canTryFetchingProfile
    ) {
      dispatch(getProfileOAuth());
    }
  }, [
    loadingGetProfileJWT,
    loadingGetProfileOAuth,
    canTryFetchingProfile,
    dispatch,
  ]);

  console.log(loadingGetProfileJWT, loadingGetProfileOAuth, canRedirect);

  useRedirect(pathname, router, canRedirect, profile.email.length > 0);
};
