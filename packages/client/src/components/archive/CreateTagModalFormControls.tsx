// // React
// import { FC } from "react";
// // SCSS
// import createTagModalFormControlsStyles from "@/scss/components/shared/modal/tag/create/CreateTagModalFormControls.module.scss";
// // Components
// import TextFormControl from "@/components/shared/form/TextFormControl";
// // Components
// import SelectFormControl from "@/components/shared/form/SelectFormControl";
// // Data
// import { availableTagFontFamilies } from "@/data/redux";
// // Redux
// import { useAppDispatch, useAppSelector } from "@/hooks";
// import { selectCreateTagDto, updateCreateTagDto } from "@/redux/slices/tag";

// const CreateTagModalFormControls: FC = () => {
//   const dispatch = useAppDispatch();

//   const createTagDto = useAppSelector(selectCreateTagDto);

//   return (
//     <form className={createTagModalFormControlsStyles.formControlsContainer}>
//       <TextFormControl
//         labelContent="Title:"
//         type="text"
//         entityProperty={createTagDto?.title}
//         onEntityPropertyValueChange={(e) =>
//           dispatch(updateCreateTagDto({ key: "title", value: e.target.value }))
//         }
//         placeholderContent="ex: Relaxing"
//         inputColorType="light"
//         labelColorType="dark"
//       />
//       <TextFormControl
//         labelContent="Background Color:"
//         type="color"
//         entityProperty={createTagDto?.backgroundColorOrImageSrc}
//         onEntityPropertyValueChange={(e) =>
//           dispatch(
//             updateCreateTagDto({
//               key: "backgroundColorOrImageSrc",
//               value: e.target.value,
//             }),
//           )
//         }
//         labelColorType="dark"
//         inputColorType="light"
//         flexDirection="column"
//         inputHeight={64}
//       />
//       <TextFormControl
//         labelContent="Font Size:"
//         type="number"
//         entityProperty={createTagDto?.fontSize}
//         onEntityPropertyValueChange={(e) => {
//           let value = e.target.valueAsNumber;
//           if (e.target.valueAsNumber > 24 || e.target.valueAsNumber < 16) {
//             value = 16;
//           }
//           dispatch(updateCreateTagDto({ key: "fontSize", value }));
//         }}
//         placeholderContent="ex: 18"
//         labelColorType="dark"
//         inputColorType="light"
//         minInputSize={16}
//         maxInputSize={24}
//       />
//       <SelectFormControl
//         entityProperty={availableTagFontFamilies}
//         labelContent="Font Family:"
//         onEntityPropertyValueChange={(e) =>
//           dispatch(
//             updateCreateTagDto({ key: "fontFamily", value: e.target.value }),
//           )
//         }
//       />
//     </form>
//   );
// };

// export default CreateTagModalFormControls;
