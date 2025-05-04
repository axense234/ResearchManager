// React
import { FC } from "react";
// SCSS
import deleteEntityOverlayInfoStyles from "@/scss/components/shared/overlay/entity/operations/delete/DeleteEntityOverlayInfo.module.scss";
// Data
import {
  cancelGrayColor,
  deleteRedColor,
  mockBrownColor,
} from "@/data/general";
// Routing
import { Link } from "@/i18n/routing";

const DeleteEntityOverlayInfo: FC = () => {
  return (
    <div className={deleteEntityOverlayInfoStyles.overlayInfo}>
      <h4>Delete Entity</h4>
      <div className={deleteEntityOverlayInfoStyles.overlayInfoOptions}>
        <div className={deleteEntityOverlayInfoStyles.overlayInfoOption}>
          <h6 style={{ color: cancelGrayColor }}>Cancel</h6>
          <p>Cancel deleting your entity.</p>
        </div>
        <div className={deleteEntityOverlayInfoStyles.overlayInfoOption}>
          <h6 style={{ color: mockBrownColor }}>Archive</h6>
          <p>
            Archive your entity. You can view your archived entities on the{" "}
            <Link href="/dashboard">Dashboard Page</Link>.
          </p>
        </div>
        <div className={deleteEntityOverlayInfoStyles.overlayInfoOption}>
          <h6 style={{ color: deleteRedColor }}>Purge</h6>
          <p>
            Purge your entity. Permanently deletes said entity. Entity cannot be
            restored after this operation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeleteEntityOverlayInfo;
