-- DropForeignKey
ALTER TABLE "ActivityDay" DROP CONSTRAINT "ActivityDay_activityFeedId_fkey";

-- DropForeignKey
ALTER TABLE "ResearchActivity" DROP CONSTRAINT "ResearchActivity_userId_fkey";

-- DropForeignKey
ALTER TABLE "ResearchLog" DROP CONSTRAINT "ResearchLog_researchPhaseId_fkey";

-- DropForeignKey
ALTER TABLE "ResearchPhase" DROP CONSTRAINT "ResearchPhase_researchActivityId_fkey";

-- DropForeignKey
ALTER TABLE "ResearchSession" DROP CONSTRAINT "ResearchSession_researchPhaseId_fkey";

-- DropForeignKey
ALTER TABLE "Settings" DROP CONSTRAINT "Settings_userId_fkey";

-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_userId_fkey";

-- AlterTable
ALTER TABLE "ActivityDay" ALTER COLUMN "activityFeedId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ResearchActivity" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ResearchLog" ALTER COLUMN "researchPhaseId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ResearchPhase" ALTER COLUMN "researchActivityId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ResearchSession" ALTER COLUMN "researchPhaseId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Tag" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Settings" ADD CONSTRAINT "Settings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResearchActivity" ADD CONSTRAINT "ResearchActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResearchPhase" ADD CONSTRAINT "ResearchPhase_researchActivityId_fkey" FOREIGN KEY ("researchActivityId") REFERENCES "ResearchActivity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResearchLog" ADD CONSTRAINT "ResearchLog_researchPhaseId_fkey" FOREIGN KEY ("researchPhaseId") REFERENCES "ResearchPhase"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResearchSession" ADD CONSTRAINT "ResearchSession_researchPhaseId_fkey" FOREIGN KEY ("researchPhaseId") REFERENCES "ResearchPhase"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityDay" ADD CONSTRAINT "ActivityDay_activityFeedId_fkey" FOREIGN KEY ("activityFeedId") REFERENCES "ActivityFeed"("id") ON DELETE SET NULL ON UPDATE CASCADE;
