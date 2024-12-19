-- DropForeignKey
ALTER TABLE "ActivityFeed" DROP CONSTRAINT "ActivityFeed_researchActivityId_fkey";

-- AlterTable
ALTER TABLE "ActivityFeed" ALTER COLUMN "researchActivityId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ActivityFeed" ADD CONSTRAINT "ActivityFeed_researchActivityId_fkey" FOREIGN KEY ("researchActivityId") REFERENCES "ResearchActivity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
