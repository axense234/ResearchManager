// Components
import AuthPageTemplateContent from "./AuthPageTemplateContent";
import AuthPageTemplateRedirect from "./AuthPageTemplateRedirect";
import AuthPageTemplateTitle from "./AuthPageTemplateTitle";
// Interfaces
import { FC } from "react";
import { AuthPageTemplateProps } from "@/core/interfaces";
// SCSS
import authPageTemplateStyles from "@/scss/components/shared/template/auth/AuthPageTemplate.module.scss";

const AuthPageTemplate: FC<AuthPageTemplateProps> = () => {
  return (
    <section className={authPageTemplateStyles.authPageContainer}>
      <div className={authPageTemplateStyles.authPageForm}>
        <AuthPageTemplateTitle />
        <AuthPageTemplateContent />
        <AuthPageTemplateRedirect />
      </div>
    </section>
  );
};

export default AuthPageTemplate;
