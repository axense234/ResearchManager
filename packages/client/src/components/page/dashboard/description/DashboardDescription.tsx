// React
import { FC } from "react";
// SCSS
import dashboardDescriptionStyles from "@/scss/components/page/dashboard/DashboardDescription.module.scss";
// Components
import DashboardDescriptionContent from "./DashboardDescriptionContent";
import FunctionalButton from "@/components/shared/general/FunctionalButton";
// Redux
import { useAppDispatch } from "@/hooks";
import { setUpsertEntityOverlay } from "@/redux/slices/general/slice";

const DashboardDescription: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <section className={dashboardDescriptionStyles.descriptionContainer}>
      <DashboardDescriptionContent />
      <FunctionalButton
        content="Create Research Activity"
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
      />
    </section>
  );
};

export default DashboardDescription;
