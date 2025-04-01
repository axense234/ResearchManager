// Types
import { ResearchLog } from "@prisma/client";

export const researchLogsMockData: ResearchLog[] = [
  {
    id: "3537fc73-cabb-4da7-ae9a-6fbae63208b7",
    name: "Designed the Website for Mobile Devices",
    backgroundColorOrImageSrc: "#D8E5E4",
    researchPoints: 183,
    archived: false,
    content:
      "Designed the VitalPrep website for Mobile Devices, specifically for phone ranges: 600-300px and 300-200px.",
    imagesSrc: [
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743534712/Research%20Manager/logs/Screenshot_113_f9cfxh.png",
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743534712/Research%20Manager/logs/Screenshot_112_y8rssi.png",
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743534712/Research%20Manager/logs/Screenshot_111_cs9f20.png",
    ],
    researchPhaseId: "20113511-8522-4be2-aebb-261bf1c1191f",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "917e4497-bca6-4adf-a9e7-6d035005dc91",
    name: "Coded notifications with OneSignal",
    backgroundColorOrImageSrc: "#D8E5E4",
    researchPoints: 421,
    archived: false,
    content:
      "Coded notifications for Meal Prepping times using the OneSignal service. I also used some cron jobs to do this. Took me like 3 days to figure things out.",
    imagesSrc: [
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743534937/Research%20Manager/logs/Screenshot_114_p25dvn.png",
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743534937/Research%20Manager/logs/Screenshot_115_iwwqwn.png",
    ],
    researchPhaseId: "20113511-8522-4be2-aebb-261bf1c1191f",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8cad126a-ea81-45e3-a766-99af86ecc7c0",
    name: "Projected some things",
    backgroundColorOrImageSrc: "#D8E5E4",
    researchPoints: 201,
    archived: false,
    content:
      "Today i projected some ideas about the Highschool Site App project, like account types, student grades/absences, role based authorization, that kind of stuff.",
    imagesSrc: [],
    researchPhaseId: "f4fc9f0b-2a88-4636-987a-59bd2c168f1e",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "b48cc94f-15bc-438b-b2ec-526bc15441f7",
    name: "Took some photos for the project",
    backgroundColorOrImageSrc: "#D8E5E4",
    researchPoints: 34,
    archived: false,
    content:
      "Today i went outside and took some photos of my highschool so we can put them on the Highschool Site App project.",
    imagesSrc: [
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1686502836/Highschool%20Site%20App/IMG-20230608-WA0017_cisini.jpg",
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1686502835/Highschool%20Site%20App/IMG-20230608-WA0009_jihe2r.jpg",
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1678691260/Highschool%20Site%20App/IMG-20230313-WA0004_e5vfrt.jpg",
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1686504536/Highschool%20Site%20App/nightschool2_zoolin.jpg",
    ],
    researchPhaseId: "f4fc9f0b-2a88-4636-987a-59bd2c168f1e",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "a3066e21-995c-420f-8783-1c9d9f6b68c7",
    name: "Created some rich mock data for frontend purposes",
    backgroundColorOrImageSrc: "#D8E5E4",
    researchPoints: 403,
    archived: false,
    content:
      "Today i created some rich mock data, mainly for the frontend for the Research Manager Project. Added some pictures too.",
    imagesSrc: [
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743535438/Research%20Manager/logs/Screenshot_116_fxsv5i.png",
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743535483/Research%20Manager/logs/Screenshot_117_n4iik7.png",
    ],
    researchPhaseId: "93c4e466-dccc-40dc-a0cb-18451aeae64f",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5141e1a2-a05c-42e1-a59d-0ee9c6d1e2cc",
    name: "Improved the caching system?",
    backgroundColorOrImageSrc: "#D8E5E4",
    researchPoints: 403,
    archived: false,
    content:
      "I think ive improved the caching system on the server. I have created code i cannot logically understand. The code was purely out of trail and error. Lost some sanity in the process.",
    imagesSrc: [
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743535671/Research%20Manager/logs/Screenshot_120_rxeiwr.png",
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743535670/Research%20Manager/logs/Screenshot_119_vt04qq.png",
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743535670/Research%20Manager/logs/Screenshot_118_xmr00l.png",
    ],
    researchPhaseId: "93c4e466-dccc-40dc-a0cb-18451aeae64f",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
