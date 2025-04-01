"use client";
// Interfaces
import { FC } from "react";
// Hooks
import { useAuthorization } from "@/hooks/useAuthorization";
// Page Component
import HomePage from "@/components/page/home/HomePage";

const Home: FC = () => {
  useAuthorization();

  return <HomePage />;
};

export default Home;
