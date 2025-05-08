// // React
// import { FC, useRef } from "react";
// // Interfaces
// import { CreateTagModalProps } from "@/core/interfaces";
// // SCSS
// import createTagModalStyles from "@/scss/components/shared/modal/tag/create/CreateTagModal.module.scss";
// // Components
// import CreateTagModalContent from "./CreateTagModalContent";
// import FunctionalButton from "@/components/shared/general/FunctionalButton";
// import CloseInterfaceButton from "@/components/shared/general/CloseInterfaceButton";
// // Redux
// import { useAppDispatch, useAppSelector, useModalTransition } from "@/hooks";
// import {
//   closeCreateTagModal,
//   selectCreateTagDto,
//   selectCreateTagModal,
//   setCreateTagDto,
// } from "@/redux/slices/tag";
// import { createTag } from "@/redux/slices/tag/thunks";
// import { selectUserProfile } from "@/redux/slices/general";
// // Data
// import { defaultCreateTagDto } from "@/data/redux";

// const CreateTagModal: FC = () => {
//   const dispatch = useAppDispatch();
//   const modalRef = useRef<HTMLDivElement>(null);

//   const createTagModal = useAppSelector(selectCreateTagModal);
//   const createTagDto = useAppSelector(selectCreateTagDto);
//   const profile = useAppSelector(selectUserProfile);

//   const onCreateTagFunction = () => {
//     dispatch(createTag({ ...createTagDto, userId: profile.id }));
//     dispatch(closeCreateTagModal());
//     dispatch(setCreateTagDto({ ...defaultCreateTagDto }));
//   };

//   useModalTransition(!createTagModal.isClosed, modalRef);

//   return (
//     <div
//       className={createTagModalStyles.modalContainer}
//       ref={modalRef}
//       style={{
//         left: `${createTagModal.position.x}px`,
//         bottom: `${createTagModal.position.y + 32}px`,
//       }}
//     >
//       <CloseInterfaceButton
//         closeInterfaceFunction={() => dispatch(closeCreateTagModal())}
//         color="mainBlack"
//         title="Close Modal"
//         size="medium"
//       />
//       <CreateTagModalContent />
//       <FunctionalButton
//         content="Create Tag"
//         disabled={false}
//         onHoverContent="Create Tag"
//         onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
//         onClickFunction={onCreateTagFunction}
//         size="small"
//         colorScheme="green"
//       />
//     </div>
//   );
// };

// export default CreateTagModal;
