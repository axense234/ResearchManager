// Types
import { User } from "@prisma/client";
import { ReduxEntityWrapper } from "../../wrapper";

export type UserRedux = ReduxEntityWrapper<
  User & {
    settingsId: string;
    activityFeedId: string;
    tagsIds: string[];
    researchActivitiesIds: string[];
  }
>;
