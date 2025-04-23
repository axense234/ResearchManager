// Interfaces
import { FC } from "react";
import { FormControlsProps } from "@/core/interfaces";
// Components
import ReCaptchaFormControl from "../../../form/ReCaptchaFormControl";
import TextFormControl from "../../../form/TextFormControl";
import FormSubmitButton from "./FormSubmitButton";
// Redux
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  selectErrorFields,
  selectIsUserABot,
  selectLoadingSignInUser,
  selectLoadingSignUpUser,
  selectSignInUserDto,
  selectSignUpUserDto,
} from "@/redux/slices/general";
import {
  updateSignInUserDto,
  updateSignUpUserDto,
} from "@/redux/slices/general/slice";
import { signUpUser } from "@/redux/slices/general/thunks/signUpUser";
import { signInUser } from "@/redux/slices/general/thunks/signInUser";
// SCSS
import formControlsStyles from "@/scss/components/shared/template/auth/form/FormControls.module.scss";
// Data
import { formErrorInputBorder } from "@/data/general";

const FormControls: FC<FormControlsProps> = ({ type }) => {
  const dispatch = useAppDispatch();

  const signInUserDto = useAppSelector(selectSignInUserDto);
  const signUpUserDto = useAppSelector(selectSignUpUserDto);

  const loadingSignUpUser = useAppSelector(selectLoadingSignUpUser);
  const loadingSignInUser = useAppSelector(selectLoadingSignInUser);

  const isUserABot = useAppSelector(selectIsUserABot);

  const errorFields = useAppSelector(selectErrorFields);

  const isRequestPending =
    type === "signup"
      ? loadingSignUpUser === "PENDING"
      : loadingSignInUser === "PENDING";

  const submitButtonOnHoverContent =
    type === "signup" ? "Create Account" : "Login Account";

  const submitButtonOnHoverContentDisabled = isUserABot
    ? "Please verify that you are not a bot!"
    : "Request pending, please wait.";

  if (type === "signup") {
    return (
      <form
        className={formControlsStyles.formControlsContainer}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(signUpUser(signUpUserDto));
        }}
      >
        <TextFormControl
          labelContent="Username:"
          type="text"
          entityProperty={signUpUserDto?.username}
          onEntityPropertyValueChange={(e) =>
            dispatch(
              updateSignUpUserDto({ key: "username", value: e.target.value }),
            )
          }
          placeholderContent="ex: John"
        />
        <TextFormControl
          labelContent="Email:"
          type="email"
          entityProperty={signUpUserDto?.email}
          onEntityPropertyValueChange={(e) =>
            dispatch(
              updateSignUpUserDto({ key: "email", value: e.target.value }),
            )
          }
          border={errorFields.includes("email") ? formErrorInputBorder : "none"}
          placeholderContent="ex: john@gmail.com"
        />
        <TextFormControl
          labelContent="Password:"
          type="password"
          entityProperty={signUpUserDto?.password}
          onEntityPropertyValueChange={(e) =>
            dispatch(
              updateSignUpUserDto({ key: "password", value: e.target.value }),
            )
          }
          border={
            errorFields.includes("password") ? formErrorInputBorder : "none"
          }
          placeholderContent="ex: john123"
        />
        <ReCaptchaFormControl />
        <FormSubmitButton
          content="Submit"
          onHoverContent={submitButtonOnHoverContent}
          onHoverContentDisabled={submitButtonOnHoverContentDisabled}
          disabled={isUserABot || isRequestPending}
          onClickFunction={(e) => {
            e.preventDefault();
            dispatch(signUpUser(signUpUserDto));
          }}
        />
      </form>
    );
  } else if (type === "signin") {
    return (
      <form
        className={formControlsStyles.formControlsContainer}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(signInUser(signInUserDto));
        }}
      >
        <TextFormControl
          labelContent="Email:"
          type="email"
          entityProperty={signInUserDto?.email}
          onEntityPropertyValueChange={(e) =>
            dispatch(
              updateSignInUserDto({ key: "email", value: e.target.value }),
            )
          }
          border={errorFields.includes("email") ? formErrorInputBorder : "none"}
          placeholderContent="ex: john@gmail.com"
        />
        <TextFormControl
          labelContent="Password:"
          type="password"
          entityProperty={signInUserDto?.password}
          onEntityPropertyValueChange={(e) =>
            dispatch(
              updateSignInUserDto({ key: "password", value: e.target.value }),
            )
          }
          border={
            errorFields.includes("password") ? formErrorInputBorder : "none"
          }
          placeholderContent="ex: john123"
        />
        <FormSubmitButton
          content="Submit"
          onHoverContent={submitButtonOnHoverContent}
          onHoverContentDisabled={submitButtonOnHoverContentDisabled}
          disabled={isRequestPending}
          onClickFunction={(e) => {
            e.preventDefault();
            dispatch(signInUser(signInUserDto));
          }}
        />
      </form>
    );
  }
};

export default FormControls;
