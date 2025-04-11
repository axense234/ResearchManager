// // Interfaces
// import { FC } from "react";
// import { EntityImagesOverlayListProps } from "@/core/interfaces";
// // SCSS
// import entityImagesOverlayListStyles from "@/scss/components/shared/overlay/entity/images/EntityImagesOverlayList.module.scss";
// // Next
// import Image from "next/image";

// const EntityImagesOverlayList: FC<EntityImagesOverlayListProps> = ({
//   imagesSrc,
// }) => {
//   return (
//     <div
//       className={entityImagesOverlayListStyles.entityImagesOverlayListContainer}
//     >
//       <ul
//         className={entityImagesOverlayListStyles.entityImagesOverlayListImages}
//       >
//         {imagesSrc.map((image, index) => {
//           return (
//             <li key={index}>
//               <Image width={50} height={50} alt="image" src={image} />
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default EntityImagesOverlayList;
