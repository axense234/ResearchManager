// Interfaces
import { FC } from "react";
import { FormContentProps } from "@/core/interfaces";
// Components
import FormControls from "./FormControls";
import FormOAuthButtons from "./FormOAuthButtons";

const FormContent: FC<FormContentProps> = ({ type }) => {
  return (
    <div>
      <FormControls type={type} />
      <hr />
      <FormOAuthButtons />
    </div>
  );
};

export default FormContent;
