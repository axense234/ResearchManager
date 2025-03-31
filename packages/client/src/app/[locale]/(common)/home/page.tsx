"use client";
// Interfaces
import { FC } from "react";
// Hooks
import { useAuthorization } from "@/hooks/useAuthorization";

const Home: FC = () => {
  useAuthorization();

  return (
    <div>
      <h1>Hello Home Page 2</h1>
    </div>
  );
};

export default Home;
