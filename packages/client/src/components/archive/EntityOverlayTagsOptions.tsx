// // React
// import { FC } from "react";
// // SCSS
// import entityOverlayTagsOptionsStyles from "@/scss/components/shared/overlay/entity/operations/fragments/tags/EntityOverlayTagsOptions.module.scss";
// // Data
// import {
//   createGreenColor,
//   DEFAULT_ENTITY_CONTAINER_TAGS_SHOWN,
//   deleteRedColor,
// } from "@/data/general";
// // Interfaces
// import { EntityOverlayTagsOptionsProps } from "@/core/interfaces";
// // Components
// import AddTagModal from "@/components/shared/modal/tag/add/AddTagModal";
// // Redux
// import { useAppDispatch, useAppSelector } from "@/hooks";
// import {
//   selectAddTagModal,
//   selectSelectedTagId,
//   setAddTagModal,
// } from "@/redux/slices/tag";

// const EntityOverlayTagsOptions: FC<EntityOverlayTagsOptionsProps> = ({
//   dto,
//   dtoUpdateFunction,
//   showAllTags,
//   setShowAllTags,
// }) => {
//   const dispatch = useAppDispatch();

//   const addTagModal = useAppSelector(selectAddTagModal);
//   const selectedTagId = useAppSelector(selectSelectedTagId);

//   return (
//     <div className={entityOverlayTagsOptionsStyles.tagsOptions}>
//       {dto.tags?.length > DEFAULT_ENTITY_CONTAINER_TAGS_SHOWN ? (
//         <button
//           className={entityOverlayTagsOptionsStyles.tagsOptionsShowButton}
//           onClick={() => setShowAllTags(!showAllTags)}
//           title={showAllTags ? "Show Less" : "Show More"}
//           aria-label={showAllTags ? "Show Less" : "Show More"}
//         >
//           {showAllTags ? "Show Less" : "Show More"}
//         </button>
//       ) : null}
//       <AddTagModal />
//       <button
//         className={entityOverlayTagsOptionsStyles.tagsOptionsShowButton}
//         style={{ color: createGreenColor }}
//         onClick={() =>
//           dispatch(setAddTagModal({ ...addTagModal, isClosed: false }))
//         }
//         title="Add Tag"
//         aria-label="Add Tag"
//       >
//         Add Tag
//       </button>
//       {selectedTagId !== undefined && addTagModal.isClosed && (
//         <button
//           className={entityOverlayTagsOptionsStyles.tagsOptionsShowButton}
//           title="Remove Tag"
//           aria-label="Remove Tag"
//           style={{ color: deleteRedColor }}
//           onClick={dtoUpdateFunction}
//         >
//           Remove Tag
//         </button>
//       )}
//     </div>
//   );
// };

// export default EntityOverlayTagsOptions;
