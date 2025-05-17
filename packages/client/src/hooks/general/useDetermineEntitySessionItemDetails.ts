// Types
import { ResearchSessionRedux } from "@/core/types";
// Data
import {
  createGreenColor,
  pauseGreenColor,
  resumeYellowColor,
  deleteRedColor,
  cancelGrayColor,
} from "@/data/general";

export const useDetermineEntitySessionItemDetails = (
  researchSession: ResearchSessionRedux,
) => {
  const researchSessionDate = new Date(
    researchSession?.createdAt,
  ).toLocaleString(undefined, {
    month: "long",
    day: "numeric",
  });

  const researchSessionTime = new Date(
    researchSession?.currentStatusDate,
  ).toLocaleTimeString(undefined, { hour: "numeric", minute: "numeric" });

  let sessionBackgroundColor = createGreenColor;

  let sessionTimeDetailsAction = "started";
  let sessionTimeDetailsActionType = "started";
  let sessionTimeDetailsDate = researchSessionDate;

  switch (researchSession.currentStatusType) {
    case "STARTED":
      sessionBackgroundColor = createGreenColor;
      sessionTimeDetailsActionType = "started";
      break;
    case "PAUSED":
      sessionBackgroundColor = cancelGrayColor;
      sessionTimeDetailsActionType = "paused";
      break;
    case "RESUMED":
      sessionBackgroundColor = pauseGreenColor;
      sessionTimeDetailsActionType = "resumed";
      break;
    case "FINISHED":
      sessionBackgroundColor = deleteRedColor;
      sessionTimeDetailsActionType = "finished";
      break;
    default:
      break;
  }

  if (
    new Date(researchSession.currentStatusDate).getDate() ===
    new Date().getDate()
  ) {
    sessionTimeDetailsAction = sessionTimeDetailsActionType;
    sessionTimeDetailsDate = "today";
  } else {
    sessionTimeDetailsAction = `${sessionTimeDetailsActionType} on`;
    sessionTimeDetailsDate = researchSessionDate;
  }

  const sessionTimeDetails = `${sessionTimeDetailsAction} ${sessionTimeDetailsDate} at ${researchSessionTime}`;

  return { sessionTimeDetails, sessionBackgroundColor };
};
