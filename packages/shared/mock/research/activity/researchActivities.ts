// Types
import { ResearchActivityPayload } from "../../../types";
// Mock Data
import { tagsMockData } from "../../tag";
import { researchPhasesMockData } from "../phase";

export const researchActivitiesMockData: ResearchActivityPayload[] = [
  {
    id: "1e9f0cd9-ec92-43a7-84ba-3e52ab9a974d",
    name: "Web Development",
    archived: false,
    backgroundColorOrImageSrc: "#D8E5E4",
    userId: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: tagsMockData.slice(0, 7),
    researchPhases: researchPhasesMockData.filter(
      (phase) =>
        phase.researchActivityId === "1e9f0cd9-ec92-43a7-84ba-3e52ab9a974d"
    ),
  },
  {
    id: "5aba8fa5-a2a7-4481-a092-05bb3cd0ebbc",
    name: "Singing",
    archived: false,
    backgroundColorOrImageSrc: "#D8E5E4",
    userId: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: tagsMockData.slice(4, 8),
    researchPhases: researchPhasesMockData.filter(
      (phase) =>
        phase.researchActivityId === "5aba8fa5-a2a7-4481-a092-05bb3cd0ebbc"
    ),
  },
  {
    id: "1d3378cd-7253-4f2c-9519-ebe80b743fea",
    name: "Gardening",
    archived: false,
    backgroundColorOrImageSrc: "#D8E5E4",
    userId: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: tagsMockData.slice(3, 5),
    researchPhases: researchPhasesMockData.filter(
      (phase) =>
        phase.researchActivityId === "1d3378cd-7253-4f2c-9519-ebe80b743fea"
    ),
  },
  {
    id: "5ec0fb06-4070-4759-bc32-c6b44607f5d1",
    name: "Drawing",
    archived: false,
    backgroundColorOrImageSrc: "#D8E5E4",
    userId: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: tagsMockData.slice(0, 3),
    researchPhases: researchPhasesMockData.filter(
      (phase) =>
        phase.researchActivityId === "5ec0fb06-4070-4759-bc32-c6b44607f5d1"
    ),
  },
  {
    id: "8c535916-a373-4c03-b72e-1cac95ea3649",
    name: "Weightlifting",
    archived: false,
    backgroundColorOrImageSrc: "#D8E5E4",
    userId: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: [],
    researchPhases: researchPhasesMockData.filter(
      (phase) =>
        phase.researchActivityId === "8c535916-a373-4c03-b72e-1cac95ea3649"
    ),
  },
  {
    id: "bd38ab7f-dc7c-4827-b737-a0ffea53a92c",
    name: "Reading",
    archived: false,
    backgroundColorOrImageSrc: "#D8E5E4",
    userId: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: tagsMockData.slice(0, 5),
    researchPhases: researchPhasesMockData.filter(
      (phase) =>
        phase.researchActivityId === "bd38ab7f-dc7c-4827-b737-a0ffea53a92c"
    ),
  },
];
