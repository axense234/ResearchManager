// Components
import ReCaptchaFormControl from "../../form/ReCaptchaFormControl";
import TextFormControl from "../../form/TextFormControl";
import AuthPageTemplateSubmitButton from "./AuthPageTemplateSubmitButton";

const AuthPageTemplateFormControls = () => {
  return (
    <div>
      <TextFormControl />
      <TextFormControl />
      <TextFormControl />
      <ReCaptchaFormControl />
      <AuthPageTemplateSubmitButton />
    </div>
  );
};

export default AuthPageTemplateFormControls;
