// Types
import { User } from '@prisma/client';

export const usersMockData: User[] = [
  {
    id: 'cc714c2b-eb56-40bc-93c7-3c935c092b5b',
    username: 'John',
    email: 'john123@gmail.com',
    hash: '$argon2id$v=19$m=65536,t=3,p=4$rS+NtKYGgCRaLPbL2J4+AQ$GSCUmey0P9FxKGeg6xtnxQOhQFmgueekwNe+Ahmn0AQ',
    profileImageSrc:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1732365178/Research%20Manager/users/profileImages/abstract-user-flat-4_fimqzi.png',
    backgroundImageSrc:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1732365146/Research%20Manager/users/backgroundImages/signupwallpaper_der2zw.jpg',
    createdAt: new Date('2025-02-11T11:13:39.672Z'),
    updatedAt: new Date('2025-02-11T11:13:39.672Z'),
  },
  {
    id: '210f6986-f5c8-42b2-9eba-6d0399d39372',
    username: 'John',
    email: 'john@gmail.com',
    hash: '$argon2id$v=19$m=65536,t=3,p=4$T3wyPxejcY7DZ874iqnFmQ$gWtf0ZlGM4Dl+iHiTgKGFXAOOQb+538GXtFbcVG51UU',
    profileImageSrc:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1732365178/Research%20Manager/users/profileImages/abstract-user-flat-4_fimqzi.png',
    backgroundImageSrc:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1732365146/Research%20Manager/users/backgroundImages/signupwallpaper_der2zw.jpg',
    createdAt: new Date('2025-02-12T07:22:03.547Z'),
    updatedAt: new Date('2025-02-12T07:22:03.547Z'),
  },
  {
    id: '900725ce-5e2c-4585-a82a-cabb6c682f83',
    username: 'Lucy',
    email: 'lucy123@gmail.com',
    hash: '$argon2id$v=19$m=65536,t=3,p=4$hZOLAvtjOJd0iL903whT+g$uhLd2u90C5lX7tbhnJjYz/0LRpmapckfjlz+JKXO3oE',
    profileImageSrc:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1677753040/Highschool%20Site%20App/t5_bkblwl.jpg',
    backgroundImageSrc:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1688815596/Highschool%20Site%20App/library_cgocde.jpg',
    createdAt: new Date('2025-02-12T07:29:12.341Z'),
    updatedAt: new Date('2025-02-12T07:29:12.341Z'),
  },
  {
    id: '0dc88a99-cba6-47a5-8b51-4180d2c2bd65',
    username: 'Lucy2',
    email: 'lucy2@gmail.com',
    hash: '$argon2id$v=19$m=65536,t=3,p=4$rZ+gpI9XmwTVI+dOp1Ey+A$Yjx+uU/bio+Rwd4ut6o3tVfU3phFM9Rdm0Oa2pPrGnA',
    profileImageSrc:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1677753040/Highschool%20Site%20App/t5_bkblwl.jpg',
    backgroundImageSrc:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1688815596/Highschool%20Site%20App/library_cgocde.jpg',
    createdAt: new Date('2025-02-12T07:30:54.235Z'),
    updatedAt: new Date('2025-02-12T07:30:54.235Z'),
  },
];
