// React
import { FC } from "react";
// SCSS
import entityOverlayLogContentStyles from "@/scss/components/shared/overlay/entity/operations/fragments/log/EntityOverlayLogContent.module.scss";
// Components
import EntityOverlayLogContentOptions from "./EntityOverlayLogContentOptions";
import TextAreaFormControl from "@/components/shared/form/TextAreaFormControl";
// Interfaces
import { EntityOverlayLogContentProps } from "@/core/interfaces";

const EntityOverlayLogContent: FC<EntityOverlayLogContentProps> = ({
  dto,
  onContentChange,
  sectionTitle,
  type,
}) => {
  return (
    <div className={entityOverlayLogContentStyles.logContentContainer}>
      <h5>{sectionTitle}</h5>
      <div className={entityOverlayLogContentStyles.logContent}>
        <EntityOverlayLogContentOptions />
        <TextAreaFormControl
          hideLabel
          maxInputLength={1000}
          entityProperty={dto?.content}
          onEntityPropertyValueChange={onContentChange}
          readOnly={type === "view"}
        />
      </div>
    </div>
  );
};

export default EntityOverlayLogContent;
