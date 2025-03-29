// Redux and Hooks
import {
  getProfileJWT,
  selectCanTryFetchingProfile,
  selectLoadingGetProfileJWT,
  selectLoadingGetProfileOAuth,
} from "@/redux/slices/general";
import { useAppDispatch, useAppSelector } from "./redux";
// Redux
import { useRedirect } from "./useRedirect";
import { changeCanTryFetchingProfile } from "@/redux/slices/general/slice";
// i18n
import { usePathname, useRouter } from "@/i18n/routing";
// React
import { useEffect } from "react";
import { getProfileOAuth } from "@/redux/slices/general/thunks/getProfileOAuth";

export const useAuthorization = () => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const router = useRouter();

  const loadingGetProfileJWT = useAppSelector(selectLoadingGetProfileJWT);
  const loadingGetProfileOAuth = useAppSelector(selectLoadingGetProfileOAuth);

  const canTryFetchingProfile = useAppSelector(selectCanTryFetchingProfile);

  const canRedirect =
    loadingGetProfileJWT === "SUCCEDED" ||
    loadingGetProfileOAuth === "SUCCEDED";

  useEffect(() => {
    const createResearchManagerAccount = localStorage.getItem(
      "createResearchManagerAccount",
    );
    dispatch(
      changeCanTryFetchingProfile(createResearchManagerAccount !== "create"),
    );
  }, [loadingGetProfileJWT, loadingGetProfileOAuth]);

  useEffect(() => {
    if (loadingGetProfileJWT === "IDLE" && canTryFetchingProfile) {
      dispatch(getProfileJWT());
    }
  }, [loadingGetProfileJWT, canTryFetchingProfile]);

  useEffect(() => {
    if (
      loadingGetProfileJWT === "FAILED" &&
      loadingGetProfileOAuth === "IDLE" &&
      canTryFetchingProfile
    ) {
      dispatch(getProfileOAuth());
    }
  }, [loadingGetProfileJWT, loadingGetProfileOAuth, canTryFetchingProfile]);

  console.log(loadingGetProfileJWT, loadingGetProfileOAuth);

  useRedirect(pathname, router, canRedirect);
};
