// React
import { FC } from "react";
// SCSS
import dashboardDescriptionContentStyles from "@/scss/components/page/dashboard/DashboardDescriptionContent.module.scss";
// Components
import Logo from "@/components/shared/general/Logo";
// Data
import { dashboardIntroContent } from "@/data/general/dashboard";

const DashboardDescriptionContent: FC = () => {
  const { description, title, welcome } = dashboardIntroContent;

  return (
    <div className={dashboardDescriptionContentStyles.contentContainer}>
      <Logo clickable={false} type="light" width={256} />
      <h3>{title}</h3>
      <div
        className={
          dashboardDescriptionContentStyles.contentDescriptionContainer
        }
      >
        <h6>{welcome}</h6>
        <hr />
        <ul
          className={dashboardDescriptionContentStyles.contentDescriptionList}
        >
          {description.map((description, index) => {
            return (
              <li key={index}>
                <p>{description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DashboardDescriptionContent;
