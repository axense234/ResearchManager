"use client";
// React
import { FC } from "react";
// Hooks
import { useAuthorization } from "@/hooks/general/useAuthorization";
// Page Component
import DashboardPage from "@/components/page/dashboard/DashboardPage";

const Dashboard: FC = () => {
  useAuthorization();

  return <DashboardPage />;
};

export default Dashboard;
