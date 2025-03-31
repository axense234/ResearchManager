"use client";
// Components
import { OAuthOptionsContent } from "@/data/static";
import OAuthButton from "../../../general/OAuthButton";
// SCSS
import formOAuthButtonsStyles from "@/scss/components/shared/template/auth/form/FormOAuthButtons.module.scss";
// Interfaces
import { FC } from "react";
import { FormOAuthButtonsProps } from "@/core/interfaces";
// Redux
import { useAppDispatch } from "@/hooks";
import { signInUserOAuth } from "@/redux/slices/general/thunks/signInUserOAuth";
// i18n
import { useLocale } from "next-intl";

const FormOAuthButtons: FC<FormOAuthButtonsProps> = ({ type }) => {
  const dispatch = useAppDispatch();
  const locale = useLocale();

  return (
    <div className={formOAuthButtonsStyles.formOAuthButtonsContainer}>
      {OAuthOptionsContent.map((option) => {
        return (
          <OAuthButton
            key={option.optionType}
            {...option}
            pageType={type}
            onButtonClick={() =>
              dispatch(
                signInUserOAuth({
                  provider: option.optionType,
                  locale,
                  pageType: type,
                }),
              )
            }
          />
        );
      })}
    </div>
  );
};

export default FormOAuthButtons;
