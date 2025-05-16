// React
import { FC } from "react";
// Interfaces
import {
  EntityOverlayFormControlsProps,
  SelectFormControlEntityPropertyType,
} from "@/core/interfaces";
// Types
import {
  CreateResearchPhaseDto,
  UpdateResearchPhaseDto,
} from "@researchmanager/shared/types";
// Components
import TextFormControl from "@/components/shared/form/TextFormControl";
import SelectFormControl from "@/components/shared/form/SelectFormControl";
// SCSS
import entityOverlayFormControlsStyles from "@/scss/components/shared/overlay/entity/operations/fragments/form/controls/EntityOverlayFormControls.module.scss";
// Data
import { formErrorInputBorder } from "@/data/general";
// Redux and Hoooks
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectErrorFields } from "@/redux/slices/general";
import { selectResearchActivitiesCustom } from "@/redux/slices/research/activity";

const ResearchPhaseOverlayFormControls: FC<EntityOverlayFormControlsProps> = ({
  dto,
  dtoUpdateFunction,
}) => {
  const dispatch = useAppDispatch();

  const errorFields = useAppSelector(selectErrorFields);

  const researchActivities = useAppSelector((state) =>
    selectResearchActivitiesCustom(state, { sorted: true, unarchived: true }),
  );

  const researchActivitiesForSelect = researchActivities.map(
    (researchActivity) => {
      return { label: researchActivity.name, value: researchActivity.id };
    },
  ) as SelectFormControlEntityPropertyType[];

  const researchPhaseDto = dto as
    | CreateResearchPhaseDto
    | UpdateResearchPhaseDto;

  console.log(researchPhaseDto);

  return (
    <form className={entityOverlayFormControlsStyles.formControlsContainer}>
      <SelectFormControl
        currentEntityProperty={researchPhaseDto?.researchActivityId}
        entityProperty={researchActivitiesForSelect}
        labelContent="Research Activity:"
        noEntityPropertyMessage="No Research Activities."
        onEntityPropertyValueChange={(e) =>
          dispatch(
            dtoUpdateFunction({
              key: "researchActivityId",
              value: e.target.value,
            }),
          )
        }
      />
      <TextFormControl
        labelContent="Phase Name:"
        type="text"
        entityProperty={researchPhaseDto?.name}
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
        placeholderContent="ex: Planting Vegetables"
        border={errorFields.includes("name") ? formErrorInputBorder : "none"}
      />
      <TextFormControl
        labelContent="Background Color:"
        type="color"
        entityProperty={researchPhaseDto?.backgroundColorOrImageSrc}
        onEntityPropertyValueChange={(e) =>
          dispatch(
            dtoUpdateFunction({
              key: "backgroundColorOrImageSrc",
              value: e.target.value,
            }),
          )
        }
        labelColorType="dark"
        inputHeight={64}
        flexDirection="column"
      />
    </form>
  );
};

export default ResearchPhaseOverlayFormControls;
