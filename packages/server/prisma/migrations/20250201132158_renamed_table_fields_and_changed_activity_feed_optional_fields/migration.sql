/*
  Warnings:

  - Made the column `userId` on table `ActivityFeed` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ActivityFeed" DROP CONSTRAINT "ActivityFeed_userId_fkey";

-- AlterTable
ALTER TABLE "ActivityFeed" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "ActivityFeed" ADD CONSTRAINT "ActivityFeed_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
