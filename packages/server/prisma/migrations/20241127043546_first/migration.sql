-- CreateEnum
CREATE TYPE "ResearchSessionStatusType" AS ENUM ('STARTED', 'PAUSED', 'RESUMED', 'FINISHED');

-- CreateEnum
CREATE TYPE "ActivityFeedType" AS ENUM ('USER', 'RESEARCH_ACTIVITY');

-- CreateEnum
CREATE TYPE "ActivitySubject" AS ENUM ('CREATE', 'UPDATE', 'DELETE', 'RESTORE', 'PURGE', 'RESEARCH_START', 'RESEARCH_PAUSE', 'RESEARCH_RESUME', 'RESEARCH_END', 'SETTINGS', 'OTHER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL DEFAULT 'Username',
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "profileImageSrc" TEXT NOT NULL DEFAULT 'https://res.cloudinary.com/birthdayreminder/image/upload/v1732365178/Research%20Manager/users/profileImages/abstract-user-flat-4_fimqzi.png',
    "backgroundImageSrc" TEXT NOT NULL DEFAULT 'https://res.cloudinary.com/birthdayreminder/image/upload/v1732365146/Research%20Manager/users/backgroundImages/signupwallpaper_der2zw.jpg',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Setting" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'Usual',
    "backgroundColorOrImageSrc" TEXT NOT NULL DEFAULT '#D54E5D',
    "fontSize" INTEGER NOT NULL DEFAULT 16,
    "fontFamily" TEXT NOT NULL DEFAULT 'Irish Grover',
    "userId" TEXT NOT NULL,
    "userIdForArchivePurposes" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResearchActivity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Research Activity',
    "backgroundColorOrImageSrc" TEXT NOT NULL DEFAULT '#D8E5E4',
    "userId" TEXT NOT NULL,
    "userIdForArchivePurposes" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResearchActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResearchPhase" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Research Phase',
    "backgroundColorOrImageSrc" TEXT NOT NULL DEFAULT '#D8E5E4',
    "researchActivityId" TEXT NOT NULL,
    "userIdForArchivePurposes" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResearchPhase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResearchLog" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Research Log',
    "backgroundColorOrImageSrc" TEXT NOT NULL DEFAULT '#D8E5E4',
    "researchPoints" INTEGER NOT NULL DEFAULT 0,
    "content" TEXT NOT NULL DEFAULT 'No content written.',
    "imagesSrc" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "userIdForArchivePurposes" TEXT NOT NULL,
    "researchPhaseId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResearchLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResearchSession" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Research Session',
    "backgroundColorOrImageSrc" TEXT NOT NULL DEFAULT '#D8E5E4',
    "researchPoints" INTEGER NOT NULL DEFAULT 0,
    "content" TEXT NOT NULL DEFAULT 'No content written.',
    "imagesSrc" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "currentStatusType" "ResearchSessionStatusType" NOT NULL DEFAULT 'STARTED',
    "currentStatusDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userIdForArchivePurposes" TEXT NOT NULL,
    "researchPhaseId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResearchSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityFeed" (
    "id" TEXT NOT NULL,
    "type" "ActivityFeedType" NOT NULL DEFAULT 'USER',
    "userId" TEXT NOT NULL,
    "researchActivityId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ActivityFeed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DayActivity" (
    "id" TEXT NOT NULL,
    "activityFeedId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DayActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subject" "ActivitySubject" NOT NULL DEFAULT 'OTHER',
    "message" TEXT NOT NULL DEFAULT 'Other activity noticed, something is wrong.',
    "messageValues" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ResearchActivityToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ResearchPhaseToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ResearchLogToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ResearchSessionToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ActivityToDayActivity" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ActivityFeed_userId_key" ON "ActivityFeed"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ActivityFeed_researchActivityId_key" ON "ActivityFeed"("researchActivityId");

-- CreateIndex
CREATE UNIQUE INDEX "_ResearchActivityToTag_AB_unique" ON "_ResearchActivityToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ResearchActivityToTag_B_index" ON "_ResearchActivityToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ResearchPhaseToTag_AB_unique" ON "_ResearchPhaseToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ResearchPhaseToTag_B_index" ON "_ResearchPhaseToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ResearchLogToTag_AB_unique" ON "_ResearchLogToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ResearchLogToTag_B_index" ON "_ResearchLogToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ResearchSessionToTag_AB_unique" ON "_ResearchSessionToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ResearchSessionToTag_B_index" ON "_ResearchSessionToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ActivityToDayActivity_AB_unique" ON "_ActivityToDayActivity"("A", "B");

-- CreateIndex
CREATE INDEX "_ActivityToDayActivity_B_index" ON "_ActivityToDayActivity"("B");

-- AddForeignKey
ALTER TABLE "Setting" ADD CONSTRAINT "Setting_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_userIdForArchivePurposes_fkey" FOREIGN KEY ("userIdForArchivePurposes") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResearchActivity" ADD CONSTRAINT "ResearchActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResearchActivity" ADD CONSTRAINT "ResearchActivity_userIdForArchivePurposes_fkey" FOREIGN KEY ("userIdForArchivePurposes") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResearchPhase" ADD CONSTRAINT "ResearchPhase_researchActivityId_fkey" FOREIGN KEY ("researchActivityId") REFERENCES "ResearchActivity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResearchPhase" ADD CONSTRAINT "ResearchPhase_userIdForArchivePurposes_fkey" FOREIGN KEY ("userIdForArchivePurposes") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResearchLog" ADD CONSTRAINT "ResearchLog_userIdForArchivePurposes_fkey" FOREIGN KEY ("userIdForArchivePurposes") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResearchLog" ADD CONSTRAINT "ResearchLog_researchPhaseId_fkey" FOREIGN KEY ("researchPhaseId") REFERENCES "ResearchPhase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResearchSession" ADD CONSTRAINT "ResearchSession_userIdForArchivePurposes_fkey" FOREIGN KEY ("userIdForArchivePurposes") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResearchSession" ADD CONSTRAINT "ResearchSession_researchPhaseId_fkey" FOREIGN KEY ("researchPhaseId") REFERENCES "ResearchPhase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityFeed" ADD CONSTRAINT "ActivityFeed_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityFeed" ADD CONSTRAINT "ActivityFeed_researchActivityId_fkey" FOREIGN KEY ("researchActivityId") REFERENCES "ResearchActivity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DayActivity" ADD CONSTRAINT "DayActivity_activityFeedId_fkey" FOREIGN KEY ("activityFeedId") REFERENCES "ActivityFeed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResearchActivityToTag" ADD CONSTRAINT "_ResearchActivityToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "ResearchActivity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResearchActivityToTag" ADD CONSTRAINT "_ResearchActivityToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResearchPhaseToTag" ADD CONSTRAINT "_ResearchPhaseToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "ResearchPhase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResearchPhaseToTag" ADD CONSTRAINT "_ResearchPhaseToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResearchLogToTag" ADD CONSTRAINT "_ResearchLogToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "ResearchLog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResearchLogToTag" ADD CONSTRAINT "_ResearchLogToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResearchSessionToTag" ADD CONSTRAINT "_ResearchSessionToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "ResearchSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResearchSessionToTag" ADD CONSTRAINT "_ResearchSessionToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActivityToDayActivity" ADD CONSTRAINT "_ActivityToDayActivity_A_fkey" FOREIGN KEY ("A") REFERENCES "Activity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActivityToDayActivity" ADD CONSTRAINT "_ActivityToDayActivity_B_fkey" FOREIGN KEY ("B") REFERENCES "DayActivity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
