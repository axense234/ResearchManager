// React
import { FC } from "react";
// Interfaces
import { DeleteEntityOverlayInfoProps } from "@/core/interfaces";
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

const DeleteEntityOverlayInfo: FC<DeleteEntityOverlayInfoProps> = ({
  entityType,
}) => {
  let entityLabel = "Research Activity";
  let entityPluralLabel = "Research Activities";

  switch (entityType) {
    case "researchActivity":
      entityLabel = "Research Activity";
      entityPluralLabel = "Research Activities";
      break;
    case "researchPhase":
      entityLabel = "Research Phase";
      entityPluralLabel = "Research Phases";
      break;
    case "researchSession":
      entityLabel = "Research Session";
      entityPluralLabel = "Research Sessions";
      break;
    case "researchLog":
      entityLabel = "Research Log";
      entityPluralLabel = "Research Logs";
      break;
    default:
      throw new Error("Invalid Entity Type.");
  }

  return (
    <div className={deleteEntityOverlayInfoStyles.overlayInfo}>
      <h4>Delete {entityLabel}</h4>
      <div className={deleteEntityOverlayInfoStyles.overlayInfoOptions}>
        <div className={deleteEntityOverlayInfoStyles.overlayInfoOption}>
          <h6 style={{ color: cancelGrayColor }}>Cancel</h6>
          <p>Cancel deleting your {entityLabel}.</p>
        </div>
        <div className={deleteEntityOverlayInfoStyles.overlayInfoOption}>
          <h6 style={{ color: mockBrownColor }}>Archive</h6>
          <p>
            Archive your {entityLabel}. You can view your archived{" "}
            {entityPluralLabel} on the{" "}
            <Link href="/dashboard">Dashboard Page</Link>.
          </p>
        </div>
        <div className={deleteEntityOverlayInfoStyles.overlayInfoOption}>
          <h6 style={{ color: deleteRedColor }}>Purge</h6>
          <p>
            Purge your {entityLabel}. Permanently deletes said {entityLabel}.{" "}
            {entityLabel} cannot be restored after this operation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeleteEntityOverlayInfo;
