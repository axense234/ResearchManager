// Types
import { ActivityLog } from "@prisma/client";

export const activityLogsMockData: ActivityLog[] = [
  {
    id: "46ce12f0-f0e2-44b8-bfa1-d4d88f6e3ed1",
    createdAt: new Date("2025-02-28T09:10:03.484Z"),
    updatedAt: new Date("2025-02-28T09:10:26.325Z"),

    subject: "CREATE",
    message: "Created a Research Activity, cool.",
  },
  {
    id: "67978e77-6bc6-4694-a81a-952309a6a647",
    createdAt: new Date("2025-02-28T09:10:19.130Z"),
    updatedAt: new Date("2025-02-28T09:10:26.325Z"),

    subject: "UPDATE",
    message:
      "Updated a Research Session. Made it's status from PAUSED to RESUMED.",
  },
  {
    id: "ad951bc5-aadf-45cd-a1a0-2b0b9928983f",
    createdAt: new Date("2025-02-28T09:10:23.312Z"),
    updatedAt: new Date("2025-02-28T09:10:26.325Z"),

    subject: "UPDATE",
    message:
      "Updated a Research Session. Made it's status from PAUSED to RESUMED.",
  },
  {
    id: "b20db290-d7c3-43c5-8291-6b200f893150",
    createdAt: new Date("2025-02-28T09:10:26.325Z"),
    updatedAt: new Date("2025-02-28T09:10:26.325Z"),
    subject: "CREATE",
    message: "Created a Research Activity, cool.",
  },
  {
    id: "5d76856f-d985-4a93-8c21-40ddb8148c04",
    createdAt: new Date("2025-02-28T09:10:26.806Z"),
    updatedAt: new Date("2025-02-28T09:10:26.325Z"),

    subject: "CREATE",
    message: "Created a Research Activity, cool.",
  },
];
