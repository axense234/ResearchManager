// React
import { FC } from "react";
// SCSS
import entityOverlayTagPreviewStyles from "@/scss/components/shared/overlay/entity/operations/fragments/tags/EntityOverlayTagPreview.module.scss";
// Components
import TagComponent from "@/components/shared/entity/tag/TagComponent";
// Interfaces
import { EntityOverlayTagPreviewProps } from "@/core/interfaces";

const EntityOverlayTagPreview: FC<EntityOverlayTagPreviewProps> = ({ dto }) => {
  return (
    <div className={entityOverlayTagPreviewStyles.tagPreviewContainer}>
      <h5>Preview</h5>
      <TagComponent containerType="preview" tagShowcase={dto} />
    </div>
  );
};

export default EntityOverlayTagPreview;
