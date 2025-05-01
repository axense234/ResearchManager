// React
import { FC, useRef } from "react";
// Interfaces
import { GeneralModalProps } from "@/core/interfaces";
// Components
import CloseInterfaceButton from "../general/CloseInterfaceButton";
// SCSS
import generalModalStyles from "@/scss/components/shared/modal/GeneralModal.module.scss";
// Redux and Hooks
import { useAppDispatch, useAppSelector, useModalTransition } from "@/hooks";
import { selectGeneralModal } from "@/redux/slices/general";
import { useCloseModal } from "@/hooks/modal/useCloseModal";
// React Spinners (cool package)
import { BarLoader } from "react-spinners";
// Data
import { mainLightBlueColor } from "@/data/general";
// Helpers
import {
  setGeneralModal,
  resetErrorFields,
} from "@/redux/slices/general/slice";

const GeneralModal: FC<GeneralModalProps> = ({ type }) => {
  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLDivElement>(null);
  const generalModal = useAppSelector(selectGeneralModal);
  const showModal = type === generalModal.type && !generalModal.isClosed;

  useCloseModal(showModal, () => {
    dispatch(setGeneralModal({ ...generalModal, isClosed: true }));
    dispatch(resetErrorFields());
  });
  useModalTransition(showModal, modalRef);

  return (
    <div className={generalModalStyles.generalModalContainer} ref={modalRef}>
      <CloseInterfaceButton
        closeInterfaceFunction={() => {
          dispatch(setGeneralModal({ ...generalModal, isClosed: true }));
          dispatch(resetErrorFields());
        }}
        title="Close Modal"
        color="mainBlack"
        size="medium"
      />
      <p>{generalModal.message}</p>
      {generalModal.isLoading && (
        <BarLoader color={mainLightBlueColor} width={256} />
      )}
    </div>
  );
};

export default GeneralModal;
