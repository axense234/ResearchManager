// Dtos
import { CreateActivityLogDto } from "../../../types";

export const createActivityLogMockData: CreateActivityLogDto[] = [
  {
    subject: "CREATE",
    message: "Created a Research Activity, cool.",
    activityDays: ["activity day id 1", "activity day id 2"],
  },
  {
    subject: "UPDATE",
    message:
      "Updated a Research Session. Made it's status from PAUSED to RESUMED.",
  },
];
