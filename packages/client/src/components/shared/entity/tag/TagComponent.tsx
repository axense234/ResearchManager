// React
import { FC } from "react";
// Interfaces
import { TagComponentProps } from "@/core/interfaces";
// SCSS
import tagComponentStyles from "@/scss/components/shared/entity/tag/TagComponent.module.scss";
// Redux
import { useAppSelector } from "@/hooks";
import { selectTagById, selectTagsExamples } from "@/redux/slices/tag";
// Data
import { selectedTagOutline } from "@/data/general";
// Types
import { TagRedux } from "@/core/types";
import { CreateTagDto, UpdateTagDto } from "@researchmanager/shared/types";

const TagComponent: FC<TagComponentProps> = ({
  tagId,
  containerType,
  onClickFunction,
  isTagSelected = false,
  tagShowcase,
  componentSize = "normal",
}) => {
  const tag = useAppSelector((state) => selectTagById(state, tagId));
  const tagExample = useAppSelector(selectTagsExamples).find(
    (tag) => tag.id === tagId,
  );

  let usedTag: TagRedux | CreateTagDto | UpdateTagDto = tag;
  switch (containerType) {
    case "entity":
      usedTag = tag;
      break;
    case "view":
      usedTag = tag;
      break;
    case "example":
      usedTag = tagExample;
      break;
    case "preview":
      if (tagShowcase.title.length < 1) {
        usedTag = { ...tagShowcase, title: "Example" };
      } else {
        usedTag = tagShowcase;
      }
      break;
    default:
      throw new Error("Invalid container type.");
  }

  let usedTagFontSize = usedTag?.fontSize;
  let usedTagPadding = "0.5rem 1rem";
  switch (componentSize) {
    case "small":
      usedTagFontSize = usedTag?.fontSize / 2 + 2;
      usedTagPadding = "0.35rem 0.75rem";
      break;
    case "normal":
      usedTagFontSize = usedTag?.fontSize;
      usedTagPadding = "0.5rem 1rem";

      break;
    case "big":
      usedTagFontSize = usedTag?.fontSize * 2;
      usedTagPadding = "1rem 2rem";
      break;
    default:
      throw new Error("Invalid component size.");
  }

  return (
    <div
      className={tagComponentStyles.tagComponentContainer}
      style={{
        backgroundColor: usedTag?.backgroundColorOrImageSrc,
        fontSize: usedTagFontSize,
        fontFamily: usedTag?.fontFamily,
        padding: usedTagPadding,
        outline: isTagSelected ? selectedTagOutline : "initial",
      }}
      onClick={onClickFunction}
      title={usedTag?.title}
      aria-label={usedTag?.title}
    >
      {usedTag?.title}
    </div>
  );
};

export default TagComponent;
