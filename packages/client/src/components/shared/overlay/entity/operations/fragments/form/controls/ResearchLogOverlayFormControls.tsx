// React
import { FC } from "react";
// Interfaces
import {
  EntityOverlayFormControlsProps,
  SelectFormControlEntityPropertyType,
} from "@/core/interfaces";
// Types
import {
  CreateResearchLogDto,
  UpdateResearchLogDto,
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
import { selectAllResearchPhases } from "@/redux/slices/research/phase";

const ResearchLogOverlayFormControls: FC<EntityOverlayFormControlsProps> = ({
  dto,
  dtoUpdateFunction,
  method,
}) => {
  const dispatch = useAppDispatch();

  const errorFields = useAppSelector(selectErrorFields);

  const researchPhases = useAppSelector(selectAllResearchPhases);

  const researchPhasesForSelect = researchPhases.map((researchPhase) => {
    return { label: researchPhase.name, value: researchPhase.id };
  }) as SelectFormControlEntityPropertyType[];

  const researchLogDto = dto as CreateResearchLogDto | UpdateResearchLogDto;

  return (
    <form className={entityOverlayFormControlsStyles.formControlsContainer}>
      <SelectFormControl
        currentEntityProperty={researchLogDto?.researchPhaseId}
        entityProperty={researchPhasesForSelect}
        labelContent="Research Phase:"
        noEntityPropertyMessage="No Research Phases."
        onEntityPropertyValueChange={(e) =>
          dispatch(
            dtoUpdateFunction({
              key: "researchPhaseId",
              value: e.target.value,
            }),
          )
        }
      />
      <TextFormControl
        labelContent="Log Name:"
        type="text"
        entityProperty={researchLogDto?.name}
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
        placeholderContent="ex: Log #1"
        border={errorFields.includes("name") ? formErrorInputBorder : "none"}
      />
      <TextFormControl
        labelContent="Research Points:"
        type="number"
        entityProperty={researchLogDto?.researchPoints}
        onEntityPropertyValueChange={(e) =>
          dispatch(
            dtoUpdateFunction({
              key: "researchPoints",
              value: e.target.valueAsNumber ? e.target.valueAsNumber : 0,
            }),
          )
        }
        placeholderContent="ex: 18"
        labelColorType="dark"
        inputColorType="dark"
        minInputSize={0}
        disabled={method === "update"}
      />
      <TextFormControl
        labelContent="Background Color:"
        type="color"
        entityProperty={researchLogDto?.backgroundColorOrImageSrc}
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

export default ResearchLogOverlayFormControls;
