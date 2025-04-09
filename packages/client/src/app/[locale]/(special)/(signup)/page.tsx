"use client";
// Components
import AuthPageTemplate from "@/components/shared/template/auth/AuthPageTemplate";
// Hooks
import { useAuthorization } from "@/hooks/general/useAuthorization";

const Signup = () => {
  useAuthorization();
  return <AuthPageTemplate type="signup" />;
};

export default Signup;
