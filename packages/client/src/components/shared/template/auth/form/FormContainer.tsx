// React
import { FC } from "react";
// Interfaces
import { FormContainerProps } from "@/core/interfaces";
// SCSS
import formContainerStyles from "@/scss/components/shared/template/auth/form/FormContainer.module.scss";
// Components
import FormContentContainer from "./FormContentContainer";
import FormRedirect from "./FormRedirect";
import FormTitle from "./FormTitle";
import GeneralModal from "@/components/shared/modal/GeneralModal";

const FormContainer: FC<FormContainerProps> = ({ type }) => {
  return (
    <div className={formContainerStyles.formContainer}>
      <GeneralModal type="form" />
      <FormTitle />
      <FormContentContainer type={type} />
      <FormRedirect type={type} />
    </div>
  );
};

export default FormContainer;
