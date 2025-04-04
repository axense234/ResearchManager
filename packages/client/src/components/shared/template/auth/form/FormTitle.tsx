// Components
import LanguageSwitcher from "../../../general/language/LanguageSwitcher";
import Logo from "../../../general/Logo";
// SCSS
import formTitleStyles from "@/scss/components/shared/template/auth/form/FormTitle.module.scss";

const FormTitle = () => {
  return (
    <div className={formTitleStyles.formTitleContainer}>
      <LanguageSwitcher position="initial" />
      <div className={formTitleStyles.formTitleLogo}>
        <Logo clickable={false} type="light" width={64} />
        <h6>Research Manager</h6>
      </div>
    </div>
  );
};

export default FormTitle;
