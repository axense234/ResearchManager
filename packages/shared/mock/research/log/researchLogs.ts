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
    researchPoints: 123,
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
    researchPoints: 521,
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
  {
    id: "b2f01ebe-e146-4659-bfee-c4dfd47bc05b",
    name: "Built a Compost Bin outside",
    backgroundColorOrImageSrc: "#D8E5E4",
    researchPoints: 231,
    archived: false,
    content:
      "Today i have worked a bit more on my gardening skills by building a Compost Bin, 100% natural.",
    imagesSrc: [
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743575706/Research%20Manager/logs/compost-bin-garden-composting-pile-rotting-kitchen-fruits-vegetable-scraps-59118581_pbtspf.webp",
    ],
    researchPhaseId: "c556c46b-8ad0-47fe-b561-7d27865f8861",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "41583fdd-c2b1-4cd1-96a1-38bc599fc18d",
    name: "Started writing in my Gardening Journal",
    backgroundColorOrImageSrc: "#D8E5E4",
    researchPoints: 122,
    archived: false,
    content:
      "Today i have started writing in my gardening journal about what vegetables i should plant depending on the current season and climate.",
    imagesSrc: [
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743575795/Research%20Manager/logs/photo-1483546363825-7ebf25fb7513_t1isqr.jpg",
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743575815/Research%20Manager/logs/how-do-seasons-affect-the-weather-1595853797_pniysf.jpg",
    ],
    researchPhaseId: "9cc62d8a-2cdd-458a-8d4d-5b8ec457ed5c",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "ae4a9174-392f-4453-a093-e079ee4ca44a",
    name: "Started Pruning",
    backgroundColorOrImageSrc: "#D8E5E4",
    researchPoints: 122,
    archived: false,
    content:
      "Research a bit online about pruning and started doing it in my own garden.",
    imagesSrc: [
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743575907/Research%20Manager/logs/images_rnjp97.jpg",
    ],
    researchPhaseId: "bdb16338-b4f9-45d1-bd05-ce0be67ec396",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "99efafe1-e053-4931-bf44-9daf72fc7b52",
    name: "Fat Loss Diet #3",
    backgroundColorOrImageSrc: "#D8E5E4",
    researchPoints: 21,
    archived: false,
    content:
      "Today is the third day of my fat loss diet, where i ate around 2100 calories.",
    imagesSrc: [
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743576093/Research%20Manager/logs/95-DSC06765_ckypo6.webp",
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743576135/Research%20Manager/logs/french-fries-chip-seasoning-blend-rotated_h7yxyb.webp",
    ],
    researchPhaseId: "fb4817b3-d79e-4b2c-8f0e-8daa15680445",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "f00967f3-a674-492d-bb50-4b16721688ef",
    name: "Deadlifting Form",
    backgroundColorOrImageSrc: "#D8E5E4",
    researchPoints: 81,
    archived: false,
    content:
      "Today i learned how to deadlift by watching a youtube video and practicing on my own.",
    imagesSrc: [
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743576231/Research%20Manager/logs/DEADLIFT_ogcvze.webp",
    ],
    researchPhaseId: "a22ba389-c19a-4e3e-a0c9-b507e4576821",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d3badd98-5c67-4ae5-bd08-24e5efd13d53",
    name: "Upper Lower Plan",
    backgroundColorOrImageSrc: "#D8E5E4",
    researchPoints: 27,
    archived: false,
    content:
      "Today i started a new plan which consists of me going to the gym 5 times a week, 3/5 times doing upper exercises and 2/5 doing lower exercises.",
    imagesSrc: [
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743576338/Research%20Manager/logs/split-workout-handout-min_yx1gvu.jpg",
    ],
    researchPhaseId: "453edd23-5b99-4c1d-9cc6-dbb7dd8249c9",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "ac72dde2-221a-4bc4-b45a-fbffe7156d00",
    name: "Gesture Drawing #1",
    backgroundColorOrImageSrc: "#D8E5E4",
    researchPoints: 321,
    archived: false,
    content:
      "Started doing some gesture drawing exercises today. The plan is to exercise every day.",
    imagesSrc: [
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743576406/Research%20Manager/logs/1_oqvqcu.webp",
    ],
    researchPhaseId: "06431158-1914-49e2-9f7d-39f6e4c37662",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d69958b4-3a5d-4a05-bf9f-df4b8b8f45f4",
    name: "Imagination Drawing #1",
    backgroundColorOrImageSrc: "#D8E5E4",
    researchPoints: 92,
    archived: false,
    content:
      "Started drawing from my imagination to improve creativity. First day.",
    imagesSrc: [
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743576533/Research%20Manager/logs/9627117-SQJBPEGB-7_vpddy0.jpg",
    ],
    researchPhaseId: "9ba700af-5533-4a4a-8690-a0ba1ed05676",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "eedcfec1-2ea5-4ba6-a95f-14f174d894b0",
    name: "Negative Space Drawing #4",
    backgroundColorOrImageSrc: "#D8E5E4",
    researchPoints: 54,
    archived: false,
    content: "Continued drawing by focusing on creating negative space. Day 4.",
    imagesSrc: [
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743576603/Research%20Manager/logs/neg_mugchair_awedlz.jpg",
    ],
    researchPhaseId: "3ffb620a-3d5c-4aa0-b845-c828511beb99",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "43031a19-1acf-421a-bc9d-855e043b72ea",
    name: "Singing Down in the Valley",
    backgroundColorOrImageSrc: "#D8E5E4",
    researchPoints: 213,
    archived: false,
    content:
      "Started singing Down in the Valley today to improve my solo singing.",
    imagesSrc: [
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743576991/Research%20Manager/logs/Down-in-the-Valley-1_zykiqo.webp",
    ],
    researchPhaseId: "5aba8fa5-a2a7-4481-a092-05bb3cd0ebbc",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "07ffaeaa-70a5-47ad-abf2-b48943ddc9a2",
    name: "Banana Socks & Rocket Clocks",
    backgroundColorOrImageSrc: "#D8E5E4",
    researchPoints: 421,
    archived: false,
    content:
      "Wrote a random song down, here are some lyrics; I woke up with a pickle in my shoe, Dancing with a kangaroo! My fridge is singing opera tunes, While I eat spaghetti with a balloon!",
    imagesSrc: [
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743577259/Research%20Manager/logs/BAN01-6550BananaSocks1_xt7ain.webp",
    ],
    researchPhaseId: "88188b99-d55e-4b3f-8bf6-c70eb5a8e648",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "f29e3fda-d3ee-4b69-bd47-27b2abd2455d",
    name: "Beatboxing Tutorial",
    backgroundColorOrImageSrc: "#D8E5E4",
    researchPoints: 211,
    archived: false,
    content:
      "Wanted to start beatboxing so i searched up a video on youtube about it.",
    imagesSrc: [
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1743577352/Research%20Manager/logs/zf5vxwzgw4bqobpeloy9_yvdqlu.jpg",
    ],
    researchPhaseId: "88188b99-d55e-4b3f-8bf6-c70eb5a8e648",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
