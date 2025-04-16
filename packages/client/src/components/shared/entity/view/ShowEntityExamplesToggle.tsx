// Interfaces
import { FC } from "react";
import { ShowEntityExamplesToggleProps } from "@/core/interfaces";
// Components
import CheckboxFormControl from "../../form/CheckboxFormControl";
// SCSS
import showEntityExamplesToggleStyles from "@/scss/components/shared/entity/view/ShowEntityExamplesToggle.module.scss";

const ShowEntityExamplesToggle: FC<ShowEntityExamplesToggleProps> = ({
  showExamples,
  onShowExamplesChange,
}) => {
  return (
    <div className={showEntityExamplesToggleStyles.toggleContaienr}>
      <CheckboxFormControl
        labelContent="Examples:"
        entityProperty={showExamples}
        onEntityPropertyValueChange={onShowExamplesChange}
      />
    </div>
  );
};

export default ShowEntityExamplesToggle;
