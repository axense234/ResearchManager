// Interfaces
import { FC } from "react";
import { FormContentProps } from "@/core/interfaces";
// Components
import FormControls from "./FormControls";
import FormOAuthButtons from "./FormOAuthButtons";
// SCSS
import formContentStyles from "@/scss/components/shared/template/auth/form/FormContent.module.scss";

const FormContent: FC<FormContentProps> = ({ type }) => {
  return (
    <div className={formContentStyles.formContentContainer}>
      <FormControls type={type} />
      <hr />
      <FormOAuthButtons />
    </div>
  );
};

export default FormContent;
