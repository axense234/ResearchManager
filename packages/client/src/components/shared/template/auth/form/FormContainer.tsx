// Interfaces
import { FC } from "react";
import { FormContainerProps } from "@/core/interfaces";
// SCSS
import formContainerStyles from "@/scss/components/shared/template/auth/form/FormContainer.module.scss";
// Components
import FormContentContainer from "./FormContentContainer";
import FormRedirect from "./FormRedirect";
import FormTitle from "./FormTitle";

const FormContainer: FC<FormContainerProps> = ({ type }) => {
  return (
    <div className={formContainerStyles.formContainer}>
      <FormTitle />
      <FormContentContainer type={type} />
      <FormRedirect type={type} />
    </div>
  );
};

export default FormContainer;
