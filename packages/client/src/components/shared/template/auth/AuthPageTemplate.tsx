// Interfaces
import { FC } from "react";
import { AuthPageTemplateProps } from "@/core/interfaces";
// SCSS
import authPageTemplateStyles from "@/scss/components/shared/template/auth/AuthPageTemplate.module.scss";
// Components
import FormContainer from "./form/FormContainer";
import Carousel from "./carousel/Carousel";

const AuthPageTemplate: FC<AuthPageTemplateProps> = ({ type }) => {
  return (
    <section className={authPageTemplateStyles.authPageContainer}>
      <FormContainer type={type} />
      <Carousel />
    </section>
  );
};

export default AuthPageTemplate;
