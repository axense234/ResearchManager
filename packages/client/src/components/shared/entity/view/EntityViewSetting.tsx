// React
import { FC } from "react";
// Components
import CheckboxFormControl from "../../form/CheckboxFormControl";
// SCSS
import entityViewSettingStyles from "@/scss/components/shared/entity/view/EntityViewSetting.module.scss";
// Interfaces
import { EntityViewSettingProps } from "@/core/interfaces";

const EntityViewSetting: FC<EntityViewSettingProps> = ({
  value,
  onValueChange,
  labelContent,
  id,
}) => {
  return (
    <div className={entityViewSettingStyles.settingContainer}>
      <CheckboxFormControl
        labelContent={labelContent}
        entityProperty={value}
        onEntityPropertyValueChange={onValueChange}
        id={id}
      />
    </div>
  );
};

export default EntityViewSetting;
