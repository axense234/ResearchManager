// SCSS
import reCaptchaFormControlStyles from "@/scss/components/shared/form/ReCaptchaFormControl.module.scss";
// Redux
import { useAppDispatch } from "@/hooks";
import { changeIsUserABot } from "@/redux/slices/general/slice";
// ReCaptcha
import ReCAPTCHA from "react-google-recaptcha";
// Interfaces
import { FC } from "react";

const ReCaptchaFormControl: FC = () => {
  const dispatch = useAppDispatch();

  const onSuccess = (token: string | null) => {
    if (token === null) {
      dispatch(changeIsUserABot(true));
    } else {
      dispatch(changeIsUserABot(false));
    }
  };

  return (
    <div className={reCaptchaFormControlStyles.reCaptchaFormControlContainer}>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
        onChange={(token) => onSuccess(token)}
        size="normal"
      />
    </div>
  );
};

export default ReCaptchaFormControl;
