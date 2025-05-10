// React
import { FC } from "react";
// SCSS
import entityOverlayFormControlsStyles from "@/scss/components/shared/overlay/entity/operations/fragments/form/controls/EntityOverlayFormControls.module.scss";
// Components
import TextFormControl from "@/components/shared/form/TextFormControl";
// Types
import { CreateTagDto, UpdateTagDto } from "@researchmanager/shared/types";
// Data
import { formErrorInputBorder } from "@/data/general";
// Interfaces
import { EntityOverlayFormControlsProps } from "@/core/interfaces";
// Components
import SelectFormControl from "@/components/shared/form/SelectFormControl";
// Data
import { availableTagFontFamilies } from "@/data/redux";
// Redux
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectErrorFields } from "@/redux/slices/general";

const TagOverlayFormControls: FC<EntityOverlayFormControlsProps> = ({
  dto,
  dtoUpdateFunction,
}) => {
  const dispatch = useAppDispatch();

  const errorFields = useAppSelector(selectErrorFields);

  const tagDto = dto as CreateTagDto | UpdateTagDto;

  return (
    <form className={entityOverlayFormControlsStyles.formControlsContainer}>
      <TextFormControl
        labelContent="Title:"
        type="text"
        entityProperty={tagDto?.title}
        onEntityPropertyValueChange={(e) =>
          dispatch(dtoUpdateFunction({ key: "title", value: e.target.value }))
        }
        placeholderContent="ex: Relaxing"
        inputColorType="dark"
        labelColorType="dark"
        border={errorFields.includes("title") ? formErrorInputBorder : "none"}
      />
      <TextFormControl
        labelContent="Background Color:"
        type="color"
        entityProperty={tagDto?.backgroundColorOrImageSrc}
        onEntityPropertyValueChange={(e) =>
          dispatch(
            dtoUpdateFunction({
              key: "backgroundColorOrImageSrc",
              value: e.target.value,
            }),
          )
        }
        labelColorType="dark"
        inputColorType="dark"
        flexDirection="column"
        inputHeight={64}
      />
      <TextFormControl
        labelContent="Font Size:"
        type="number"
        entityProperty={tagDto?.fontSize}
        onEntityPropertyValueChange={(e) => {
          let value = e.target.valueAsNumber;
          if (e.target.valueAsNumber > 24 || e.target.valueAsNumber < 16) {
            value = 16;
          }
          dispatch(dtoUpdateFunction({ key: "fontSize", value }));
        }}
        placeholderContent="ex: 18"
        labelColorType="dark"
        inputColorType="dark"
        minInputSize={16}
        maxInputSize={24}
      />
      <SelectFormControl
        entityProperty={availableTagFontFamilies.map((fontFamily) => {
          return { value: fontFamily, label: fontFamily };
        })}
        noEntityPropertyMessage="Something is very wrong."
        labelContent="Font Family:"
        onEntityPropertyValueChange={(e) =>
          dispatch(
            dtoUpdateFunction({ key: "fontFamily", value: e.target.value }),
          )
        }
      />
    </form>
  );
};

export default TagOverlayFormControls;
