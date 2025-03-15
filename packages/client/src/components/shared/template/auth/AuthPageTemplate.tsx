// Components
import AuthPageTemplateContent from "./AuthPageTemplateContent";
import AuthPageTemplateRedirect from "./AuthPageTemplateRedirect";
import AuthPageTemplateTitle from "./AuthPageTemplateTitle";

const AuthPageTemplate = () => {
  return (
    <section>
      <AuthPageTemplateTitle />
      <AuthPageTemplateContent />
      <AuthPageTemplateRedirect />
    </section>
  );
};

export default AuthPageTemplate;
