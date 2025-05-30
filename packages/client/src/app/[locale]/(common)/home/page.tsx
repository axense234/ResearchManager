"use client";
// React
import { FC } from "react";
// Hooks
import { useAuthorization } from "@/hooks/general/useAuthorization";
// Page Component
import HomePage from "@/components/page/home/HomePage";

const Home: FC = () => {
  useAuthorization();

  return <HomePage />;
};

export default Home;
