// Redux
import { signUpUserOAuth } from "@/redux/slices/general/thunks/signUpUserOAuth";
import { useAppDispatch } from "./redux";
// React
import { useEffect, useRef } from "react";

export const useCreateUserOAuthTrigger = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const createResearchManagerAccount = localStorage.getItem(
      "createResearchManagerAccount",
    );
    if (createResearchManagerAccount === "create") {
      dispatch(signUpUserOAuth());
    }
  }, [dispatch]);
};
