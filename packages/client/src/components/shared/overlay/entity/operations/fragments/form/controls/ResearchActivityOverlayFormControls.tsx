// React
import { FC } from "react";
// Interfaces
import { EntityOverlayFormControlsProps } from "@/core/interfaces";
// Types
import {
  CreateResearchActivityDto,
  UpdateResearchActivityDto,
} from "@researchmanager/shared/types";
// Components
import TextFormControl from "@/components/shared/form/TextFormControl";
import CheckboxFormControl from "@/components/shared/form/CheckboxFormControl";
// SCSS
import entityOverlayFormControlsStyles from "@/scss/components/shared/overlay/entity/operations/fragments/form/controls/EntityOverlayFormControls.module.scss";
// Redux and Hoooks
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  selectCreateDefaultResearchPhase,
  setCreateDefaultResearchPhase,
} from "@/redux/slices/research/activity";
import { selectErrorFields } from "@/redux/slices/general";
// Data
import { formErrorInputBorder } from "@/data/general";

const ResearchActivityOverlayFormControls: FC<
  EntityOverlayFormControlsProps
> = ({ dto, method, dtoUpdateFunction }) => {
  const dispatch = useAppDispatch();

  const errorFields = useAppSelector(selectErrorFields);

  const createDefaultResearchPhase = useAppSelector(
    selectCreateDefaultResearchPhase,
  );

  const researchActivityDto = dto as
    | CreateResearchActivityDto
    | UpdateResearchActivityDto;

  return (
    <form className={entityOverlayFormControlsStyles.formControlsContainer}>
      <TextFormControl
        labelContent="Activity Name:"
        type="text"
        entityProperty={researchActivityDto?.name}
        onEntityPropertyValueChange={(e) =>
          dispatch(
            dtoUpdateFunction({
              key: "name",
              value: e.target.value,
            }),
          )
        }
        inputColorType="dark"
        labelColorType="dark"
        placeholderContent="ex: Gardening"
        border={errorFields.includes("name") ? formErrorInputBorder : "none"}
      />
      <TextFormControl
        labelContent="Background Color:"
        type="color"
        entityProperty={researchActivityDto?.backgroundColorOrImageSrc}
        onEntityPropertyValueChange={(e) =>
          dispatch(
            dtoUpdateFunction({
              key: "backgroundColorOrImageSrc",
              value: e.target.value,
            }),
          )
        }
        labelColorType="dark"
        placeholderContent="ex: blue"
        inputHeight={64}
        flexDirection="column"
      />
      {method === "create" && (
        <CheckboxFormControl
          labelContent="Create Default Research Phase:"
          entityProperty={createDefaultResearchPhase}
          onEntityPropertyValueChange={(e) =>
            dispatch(setCreateDefaultResearchPhase(e.target.value !== "true"))
          }
          id="createDefaultResearchPhase"
        />
      )}
    </form>
  );
};

export default ResearchActivityOverlayFormControls;
