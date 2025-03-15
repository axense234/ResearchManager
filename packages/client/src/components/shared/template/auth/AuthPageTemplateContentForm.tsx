// Components
import AuthPageTemplateFormControls from "./AuthPageTemplateFormControls";
import AuthPageTemplateOAuthButtons from "./AuthPageTemplateOAuthButtons";

const AuthPageTemplateContentForm = () => {
  return (
    <div>
      <AuthPageTemplateFormControls />
      <hr />
      <AuthPageTemplateOAuthButtons />
    </div>
  );
};

export default AuthPageTemplateContentForm;
