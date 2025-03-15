// Axios
import axios from "axios";
// Base Server URL
import { baseServerUrl } from "@/config";

export const axiosInstance = axios.create({
  baseURL: baseServerUrl,
  withCredentials: true,
});
