// Interfaces
import { FC } from "react";
import { AuthPageTemplateProps } from "@/core/interfaces";
// SCSS
import authPageTemplateStyles from "@/scss/components/shared/template/auth/AuthPageTemplate.module.scss";
// Components
import FormContainer from "./form/FormContainer";
import CarouselContainer from "./carousel/CarouselContainer";
import GeneralModal from "../../modal/GeneralModal";

const AuthPageTemplate: FC<AuthPageTemplateProps> = ({ type }) => {
  return (
    <section className={authPageTemplateStyles.authPageContainer}>
      <GeneralModal type="general" />
      <FormContainer type={type} />
      <CarouselContainer />
    </section>
  );
};

export default AuthPageTemplate;
