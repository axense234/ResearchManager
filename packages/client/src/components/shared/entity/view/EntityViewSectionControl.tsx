// React
import { FC } from "react";
// Interfaces
import { EntityViewSectionControlProps } from "@/core/interfaces";
// SCSS
import entityViewSectionControlStyles from "@/scss/components/shared/entity/view/EntityViewSectionControl.module.scss";
// React Icons
import { CiMinimize1, CiMaximize1 } from "react-icons/ci";

const EntityViewSectionControl: FC<EntityViewSectionControlProps> = ({
  showSectionContent,
  setShowSectionContent,
}) => {
  return (
    <div className={entityViewSectionControlStyles.sectionControlContainer}>
      {showSectionContent ? (
        <CiMinimize1
          onClick={() => setShowSectionContent(false)}
          title="Show Less"
          aria-label="Show Less"
        />
      ) : (
        <CiMaximize1
          onClick={() => setShowSectionContent(true)}
          title="Show More"
          aria-label="Show More"
        />
      )}
    </div>
  );
};

export default EntityViewSectionControl;
