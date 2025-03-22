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
  selectSignInUserDto,
  selectSignUpUserDto,
} from "@/redux/slices/general";
import {
  updateSignInUserDto,
  updateSignUpUserDto,
} from "@/redux/slices/general/slice";

const FormControls: FC<FormControlsProps> = ({ type }) => {
  const dispatch = useAppDispatch();

  const signInUserDto = useAppSelector(selectSignInUserDto);
  const signUpUserDto = useAppSelector(selectSignUpUserDto);

  if (type === "signup") {
    return (
      <div>
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
        <FormSubmitButton />
      </div>
    );
  } else if (type === "signin") {
    <div>
      <TextFormControl
        labelContent="Email:"
        type="email"
        entityProperty={signInUserDto?.email}
        onEntityPropertyValueChange={(e) =>
          dispatch(updateSignInUserDto({ key: "email", value: e.target.value }))
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
      <FormSubmitButton />
    </div>;
  }

  return null;
};

export default FormControls;
