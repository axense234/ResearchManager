// Components
import LanguageSwitcher from "../../general/LanguageSwitcher";
import Logo from "../../general/Logo";
// SCSS
import authPageTemplateTitleStyles from "@/scss/components/shared/template/auth/AuthPageTemplateTitle.module.scss";

const AuthPageTemplateTitle = () => {
  return (
    <div className={authPageTemplateTitleStyles.authPageTitle}>
      <Logo />
      <LanguageSwitcher />
    </div>
  );
};

export default AuthPageTemplateTitle;
