/*
  Warnings:

  - You are about to drop the `DayActivity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ActivityLogToDayActivity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DayActivity" DROP CONSTRAINT "DayActivity_activityFeedId_fkey";

-- DropForeignKey
ALTER TABLE "_ActivityLogToDayActivity" DROP CONSTRAINT "_ActivityLogToDayActivity_A_fkey";

-- DropForeignKey
ALTER TABLE "_ActivityLogToDayActivity" DROP CONSTRAINT "_ActivityLogToDayActivity_B_fkey";

-- DropTable
DROP TABLE "DayActivity";

-- DropTable
DROP TABLE "_ActivityLogToDayActivity";

-- CreateTable
CREATE TABLE "ActivityDay" (
    "id" TEXT NOT NULL,
    "activityFeedId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ActivityDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ActivityDayToActivityLog" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ActivityDayToActivityLog_AB_unique" ON "_ActivityDayToActivityLog"("A", "B");

-- CreateIndex
CREATE INDEX "_ActivityDayToActivityLog_B_index" ON "_ActivityDayToActivityLog"("B");

-- AddForeignKey
ALTER TABLE "ActivityDay" ADD CONSTRAINT "ActivityDay_activityFeedId_fkey" FOREIGN KEY ("activityFeedId") REFERENCES "ActivityFeed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActivityDayToActivityLog" ADD CONSTRAINT "_ActivityDayToActivityLog_A_fkey" FOREIGN KEY ("A") REFERENCES "ActivityDay"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActivityDayToActivityLog" ADD CONSTRAINT "_ActivityDayToActivityLog_B_fkey" FOREIGN KEY ("B") REFERENCES "ActivityLog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
