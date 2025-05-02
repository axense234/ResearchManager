// // React
// import { FC } from "react";
// // Interfaces
// import { EntityOverlayTagsListProps } from "@/core/interfaces";
// // SCSS
// import entityOverlayTagsListStyles from "@/scss/components/shared/overlay/entity/operations/fragments/tags/EntityOverlayTagsList.module.scss";
// // Components
// import TagComponent from "@/components/shared/entity/tag/TagComponent";
// // Helper :)
// import { onTagComponentClick } from "@/helpers";
// // Redux
// import { useAppDispatch, useAppSelector } from "@/hooks";
// import { selectSelectedTagsIds, setSelectedTagsIds } from "@/redux/slices/tag";

// const EntityOverlayTagsList: FC<EntityOverlayTagsListProps> = ({
//   shownTags,
//   shownTagsCount,
// }) => {
//   const dispatch = useAppDispatch();
//   const selectedTagsIds = useAppSelector(selectSelectedTagsIds);

//   return (
//     <ul className={entityOverlayTagsListStyles.tagsList}>
//       {shownTags?.length > 0 ? (
//         shownTags.slice(0, shownTagsCount).map((tagId) => {
//           return (
//             <li key={tagId}>
//               <TagComponent
//                 tagId={tagId}
//                 key={tagId}
//                 containerType="entity"
//                 onClickFunction={() =>
//                   onTagComponentClick(
//                     tagId,
//                     selectedTagsIds,
//                     (tagsIds: string[]) =>
//                       dispatch(setSelectedTagsIds([...tagsIds, tagId])),
//                   )
//                 }
//                 isTagSelected={selectedTagsIds.includes(tagId)}
//               />
//             </li>
//           );
//         })
//       ) : (
//         <p>No Tags selected. You should add some.</p>
//       )}
//     </ul>
//   );
// };

// export default EntityOverlayTagsList;
