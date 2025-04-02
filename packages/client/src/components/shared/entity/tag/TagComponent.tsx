// Interfaces
import { FC } from "react";
import { TagComponentProps } from "@/core/interfaces";
// SCSS
import tagComponentStyles from "@/scss/components/shared/entity/tag/TagComponent.module.scss";

const TagComponent: FC<TagComponentProps> = ({ tag, tagId }) => {
  return <div className={tagComponentStyles.tagComponentContainer}></div>;
};

export default TagComponent;
