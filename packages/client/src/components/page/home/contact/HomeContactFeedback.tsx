// Interface
import { FC } from "react";
// Redux
import { useAppSelector, useAppDispatch } from "@/hooks";
import { selectContactUsDto } from "@/redux/slices/general";
import { updateContactUsDto } from "@/redux/slices/general/slice";
// SCSS
import homeContactFeedbackStyles from "@/scss/components/page/home/contact/HomeContactFeedback.module.scss";
// Components
import TextFormControl from "@/components/shared/form/TextFormControl";
import FormSubmitButton from "@/components/shared/template/auth/form/FormSubmitButton";

const HomeContactFeedback: FC = () => {
  const dispatch = useAppDispatch();
  const contactUsDto = useAppSelector(selectContactUsDto);

  return (
    <div className={homeContactFeedbackStyles.homeContactFeedbackContainer}>
      <form className={homeContactFeedbackStyles.homeContactFeedbackForm}>
        <h5>Feedback</h5>
        <div
          className={homeContactFeedbackStyles.homeContactFeedbackFormControls}
        >
          <TextFormControl
            entityProperty={contactUsDto.title}
            labelContent="Title:"
            type="text"
            onEntityPropertyValueChange={(e) =>
              dispatch(
                updateContactUsDto({ key: "title", value: e.target.value }),
              )
            }
            labelColorType="dark"
            placeholderContent="ex: Hello"
            inputColorType="light"
          />
          <TextFormControl
            entityProperty={contactUsDto.message}
            labelContent="Message:"
            type="text"
            onEntityPropertyValueChange={(e) =>
              dispatch(
                updateContactUsDto({ key: "message", value: e.target.value }),
              )
            }
            labelColorType="dark"
            placeholderContent="ex: Nice website."
            inputColorType="light"
          />
          <FormSubmitButton
            content="Submit"
            onHoverContent="Send Feedback"
            onHoverContentDisabled="Something went wrong"
            disabled={false}
            onClickFunction={(e) => {
              e.preventDefault();
              // do something
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default HomeContactFeedback;
