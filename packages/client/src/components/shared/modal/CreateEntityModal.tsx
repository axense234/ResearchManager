// React
import { FC, useRef } from "react";
// Interfaces
import { CreateEntityModalProps } from "@/core/interfaces";
// Components
import CloseInterfaceButton from "../general/CloseInterfaceButton";
import FunctionalButton from "../general/FunctionalButton";
// SCSS
import createEntityModalStyles from "@/scss/components/shared/modal/CreateEntityModal.module.scss";
// Redux and Hooks
import { useAppDispatch, useAppSelector, useModalTransition } from "@/hooks";
import {
  closeCreateEntityModal,
  setUpsertEntityOverlay,
} from "@/redux/slices/general/slice";
import { selectCreateEntityModal } from "@/redux/slices/general";
// Data
import {
  mainBlackColor,
  mainDarkBlueColor,
  mainPastelRedColor,
  mainWhiteColor,
  secondaryWhiteColor,
} from "@/data/general";

const CreateEntityModal: FC<CreateEntityModalProps> = ({ location }) => {
  const dispatch = useAppDispatch();

  const modalRef = useRef<HTMLDivElement>(null);

  const createEntityModal = useAppSelector(selectCreateEntityModal);

  useModalTransition(
    !createEntityModal.isClosed &&
      createEntityModal?.currentLocation === location,
    modalRef,
  );

  return (
    <div
      className={createEntityModalStyles.createEntityModalContainer}
      style={{
        backgroundColor:
          createEntityModal?.currentLocation === "footer"
            ? secondaryWhiteColor
            : mainDarkBlueColor,
      }}
      ref={modalRef}
    >
      <CloseInterfaceButton
        closeInterfaceFunction={() => {
          dispatch(closeCreateEntityModal());
        }}
        title="Close Modal"
        color={
          createEntityModal?.currentLocation === "footer"
            ? "mainBlack"
            : "pastelRed"
        }
        size="medium"
      />
      <div className={createEntityModalStyles.createEntityModalContainerTitle}>
        <h6
          style={{
            color:
              createEntityModal?.currentLocation === "footer"
                ? mainBlackColor
                : mainWhiteColor,
          }}
        >
          Create
        </h6>
        <hr
          style={{
            backgroundColor:
              createEntityModal?.currentLocation === "footer"
                ? mainBlackColor
                : mainWhiteColor,
          }}
        />
      </div>
      <div
        className={createEntityModalStyles.createEntityModalContainerOptions}
      >
        <FunctionalButton
          content="Research Activity"
          disabled={false}
          onHoverContent="Create Research Activity"
          onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
          onClickFunction={() =>
            dispatch(
              setUpsertEntityOverlay({
                entityType: "researchActivity",
                method: "create",
                showOverlay: true,
              }),
            )
          }
          size="small"
        />
        <FunctionalButton
          content="Research Phase"
          disabled={false}
          onHoverContent="Create Research Phase"
          onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
          onClickFunction={() =>
            dispatch(
              setUpsertEntityOverlay({
                entityType: "researchPhase",
                method: "create",
                showOverlay: true,
              }),
            )
          }
          size="small"
        />
        <FunctionalButton
          content="Research Session"
          disabled={false}
          onHoverContent="Start a Research Phase"
          onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
          onClickFunction={() =>
            dispatch(
              setUpsertEntityOverlay({
                entityType: "researchSession",
                method: "create",
                showOverlay: true,
              }),
            )
          }
          size="small"
        />
        <FunctionalButton
          content="Research Log"
          disabled={false}
          onHoverContent="Create Research Log"
          onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
          onClickFunction={() =>
            dispatch(
              setUpsertEntityOverlay({
                entityType: "researchLog",
                method: "create",
                showOverlay: true,
              }),
            )
          }
          size="small"
        />
      </div>
    </div>
  );
};

export default CreateEntityModal;
