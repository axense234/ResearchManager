"use client";
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

const FormControls: FC<FormControlsProps> = ({ type }) => {
  const dispatch = useAppDispatch();

  const signInUserDto = useAppSelector(selectSignInUserDto);
  const signUpUserDto = useAppSelector(selectSignUpUserDto);

  const loadingSignUpUser = useAppSelector(selectLoadingSignUpUser);
  const loadingSignInUser = useAppSelector(selectLoadingSignInUser);

  const isUserABot = useAppSelector(selectIsUserABot);

  const isRequestPending =
    type === "signup"
      ? loadingSignUpUser === "PENDING"
      : loadingSignInUser === "PENDING";

  const submitButtonOnHoverContent =
    type === "signup" ? "Create Account" : "Login Account";

  if (type === "signup") {
    return (
      <div className={formControlsStyles.formControlsContainer}>
        <TextFormControl
          labelContent="Username:"
          type="text"
          entityProperty={signUpUserDto?.username}
          onEntityPropertyValueChange={(e) =>
            dispatch(
              updateSignUpUserDto({ key: "username", value: e.target.value }),
            )
          }
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
        />
        <ReCaptchaFormControl />
        <FormSubmitButton
          content="Submit"
          onHoverContent={submitButtonOnHoverContent}
          disabled={isUserABot || isRequestPending}
          onClickFunction={(e) => {
            e.preventDefault();
            dispatch(signUpUser(signUpUserDto));
          }}
        />
      </div>
    );
  } else if (type === "signin") {
    return (
      <div className={formControlsStyles.formControlsContainer}>
        <TextFormControl
          labelContent="Email:"
          type="email"
          entityProperty={signInUserDto?.email}
          onEntityPropertyValueChange={(e) =>
            dispatch(
              updateSignInUserDto({ key: "email", value: e.target.value }),
            )
          }
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
        />
        <FormSubmitButton
          content="Submit"
          onHoverContent={submitButtonOnHoverContent}
          disabled={isRequestPending}
          onClickFunction={(e) => {
            e.preventDefault();
            dispatch(signInUser(signInUserDto));
          }}
        />
      </div>
    );
  }
};

export default FormControls;
