// Axios
import axios from "axios";
// Base Server URL
import { baseServerUrl } from "@/config";

export const axiosInstance = axios.create({
  baseURL: baseServerUrl,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage?.getItem(
      process.env.NEXT_PUBLIC_JWT_KEY_LABEL as string,
    );
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(token);
  }

  console.log("intercepted");

  return config;
});
