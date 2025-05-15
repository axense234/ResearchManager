// React
import { FC } from "react";
// SCSS
import statisticStyles from "@/scss/components/page/profile/statistics/Statistic.module.scss";
// Interfaces
import { StatisticProps } from "@/core/interfaces";

const Statistic: FC<StatisticProps> = ({ label, value }) => {
  return (
    <div className={statisticStyles.statisticContainer}>
      <p>{label}</p>
      <p>{value}</p>
    </div>
  );
};

export default Statistic;
