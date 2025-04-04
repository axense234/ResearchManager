// Interfaces
import { FC } from "react";
import { TagComponentProps } from "@/core/interfaces";
// SCSS
import tagComponentStyles from "@/scss/components/shared/entity/tag/TagComponent.module.scss";
// Redux
import { useAppSelector } from "@/hooks";
import { selectTagById, selectTagsExamples } from "@/redux/slices/tag";

const TagComponent: FC<TagComponentProps> = ({ tagId, containerType }) => {
  const tag = useAppSelector((state) => selectTagById(state, tagId));
  const tagExample = useAppSelector(selectTagsExamples).find(
    (tag) => tag.id === tagId,
  );

  const usedTag = containerType === "example" ? tagExample : tag;

  return (
    <div
      className={tagComponentStyles.tagComponentContainer}
      style={{
        backgroundColor: usedTag?.backgroundColorOrImageSrc,
        fontSize: usedTag?.fontSize,
        fontFamily: usedTag?.fontFamily,
      }}
      title={usedTag?.title}
      aria-label={usedTag?.title}
    >
      {usedTag?.title}
    </div>
  );
};

export default TagComponent;
