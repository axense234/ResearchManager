// React
import { FC } from "react";
// Components
import FunctionalButton from "@/components/shared/general/FunctionalButton";
// SCSS
import deleteEntityOverlayOptionsStyles from "@/scss/components/shared/overlay/entity/operations/delete/DeleteEntityOverlayOptions.module.scss";
// Interfaces
import { DeleteEntityOverlayOptionsProps } from "@/core/interfaces";
// Hooks
import useCountdown from "@/hooks/general/useCountdown";

const DeleteEntityOverlayOptions: FC<DeleteEntityOverlayOptionsProps> = ({
  showOverlay,
  onCancelFunction,
  onArchiveFunction,
  onPurgeFunction,
}) => {
  const archiveCountdown = useCountdown(5, showOverlay);
  const purgeCountdown = useCountdown(10, showOverlay);

  return (
    <div className={deleteEntityOverlayOptionsStyles.overlayOptions}>
      <FunctionalButton
        content="Cancel"
        disabled={false}
        onHoverContent="Cancel Deleting"
        onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
        onClickFunction={onCancelFunction}
        colorScheme="gray"
      />
      <FunctionalButton
        content={archiveCountdown > 0 ? `${archiveCountdown}` : "Archive"}
        disabled={archiveCountdown > 0}
        onHoverContent="Archive your Entity"
        onHoverContentDisabled="Please wait to Archive your entity!"
        onClickFunction={onArchiveFunction}
        colorScheme="brown"
      />
      <FunctionalButton
        content={purgeCountdown > 0 ? `${purgeCountdown}` : "Purge"}
        disabled={purgeCountdown > 0}
        onHoverContent="Permanently delete your Entity"
        onHoverContentDisabled="Please wait to Permanently Delete your entity!"
        onClickFunction={onPurgeFunction}
        colorScheme="red"
      />
    </div>
  );
};

export default DeleteEntityOverlayOptions;
