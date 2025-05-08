// // React
// import { FC } from "react";
// // SCSS
// import createTagModalContentStyles from "@/scss/components/shared/modal/tag/create/CreateTagModalContent.module.scss";
// // Components
// import CreateTagModalFormControls from "./CreateTagModalFormControls";
// import TagComponent from "@/components/shared/entity/tag/TagComponent";
// // Redux
// import { useAppSelector } from "@/hooks";
// import { selectCreateTagDto } from "@/redux/slices/tag";

// const CreateTagModalContent: FC = () => {
//   const createTagDto = useAppSelector(selectCreateTagDto);

//   return (
//     <div className={createTagModalContentStyles.modalContent}>
//       <CreateTagModalFormControls />
//       <TagComponent containerType="showcase" tagShowcase={createTagDto} />
//     </div>
//   );
// };

// export default CreateTagModalContent;
