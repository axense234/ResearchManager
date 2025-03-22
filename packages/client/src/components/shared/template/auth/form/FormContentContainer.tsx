// Interfaces
import { FC } from "react";
import { FormContentContainerProps } from "@/core/interfaces";
// Components
import FormContent from "./FormContent";
// SCSS
import formContentContainerStyles from "@/scss/components/shared/template/auth/form/FormContentContainer.module.scss";

const FormContentContainer: FC<FormContentContainerProps> = ({ type }) => {
  return (
    <div className={formContentContainerStyles.formContentContainer}>
      <h4>Sign Up</h4>
      <FormContent type={type} />
    </div>
  );
};

export default FormContentContainer;
