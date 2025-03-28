// I18n
import { Link } from "@/i18n/routing";
// Interfaces
import { FC } from "react";
import { FormRedirectProps } from "@/core/interfaces";
// SCSS
import formRedirectStyles from "@/scss/components/shared/template/auth/form/FormRedirect.module.scss";

const FormRedirect: FC<FormRedirectProps> = ({ type }) => {
  const linkDest = type === "signup" ? "/signin" : "/";
  const linkLabel = type === "signup" ? "Sign in" : "Sign up";
  const paragraphLabel =
    type === "signup" ? "Have an account?" : "Don’t have an account?";

  return (
    <div className={formRedirectStyles.formRedirectContainer}>
      <p>{paragraphLabel}</p>
      <Link href={linkDest} title={linkLabel} aria-label={linkLabel}>
        {linkLabel}
      </Link>
    </div>
  );
};

export default FormRedirect;
