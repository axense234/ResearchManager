// Interfaces
import { FC, useRef } from "react";
import { GeneralModalProps } from "@/core/interfaces";
// SCSS
import generalModalStyles from "@/scss/components/shared/modal/GeneralModal.module.scss";
// Redux
import { useAppDispatch, useAppSelector, useModalTransition } from "@/hooks";
import { selectModal } from "@/redux/slices/general";
// React Icons
import { FaWindowClose } from "react-icons/fa";
import { useCloseModal } from "@/hooks/modal/useCloseModal";
// React Spinners (cool package)
import { BarLoader } from "react-spinners";
// Data
import { mainLightBlueColor } from "@/data/general";
// Helpers
import { setModal, resetErrorFields } from "@/redux/slices/general/slice";

const GeneralModal: FC<GeneralModalProps> = ({ type }) => {
  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLDivElement>(null);
  const modal = useAppSelector(selectModal);
  const showModal = type === modal.type && !modal.isClosed;

  useCloseModal(showModal);
  useModalTransition(showModal, modalRef);

  return (
    <div className={generalModalStyles.generalModalContainer} ref={modalRef}>
      <FaWindowClose
        title="Close Modal"
        aria-label="Close Modal"
        onClick={() => {
          dispatch(setModal({ ...modal, isClosed: true }));
          dispatch(resetErrorFields());
        }}
      />
      <p>{modal.message}</p>
      {modal.isLoading && <BarLoader color={mainLightBlueColor} width={256} />}
    </div>
  );
};

export default GeneralModal;
