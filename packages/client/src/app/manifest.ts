// Data
import { APP_DEFAULT_TITLE, APP_DESCRIPTION, APP_NAME } from "@/data/general";
// Next
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_DEFAULT_TITLE,
    short_name: APP_NAME,
    description: APP_DESCRIPTION,
    start_url: "/",
    display: "standalone",
  };
}
