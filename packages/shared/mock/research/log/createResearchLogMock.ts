// Dtos
import { CreateResearchLogDto } from "../../../types";

export const createResearchLogMockData: CreateResearchLogDto[] = [
  {
    name: "Log #1",
    backgroundColorOrImageSrc: "#d8e5e4",
    researchPoints: 0,
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    researchPhaseId: "put your research phase id here",
  },
  {
    name: "Polynomial Equations 1",
    backgroundColorOrImageSrc: "#FFFFFF",
    researchPoints: 63,
    content: "Did some polynomial equations today, idk...",
    imagesSrc: ["image 1 src"],
    researchPhaseId: "put your research phase id here",
  },
  {
    name: "First Part",
    backgroundColorOrImageSrc: "#FFFFFF",
    researchPoints: 63,
    content: "This book is pretty good, too bad im not going to read it.",
    imagesSrc: ["image 1 src", "image 2 src", "image 3 src"],
    researchPhaseId: "put your research phase id here",
  },
];
