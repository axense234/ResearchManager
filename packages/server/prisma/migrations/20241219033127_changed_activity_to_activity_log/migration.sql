/*
  Warnings:

  - You are about to drop the `Activity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ActivityToDayActivity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ActivityToDayActivity" DROP CONSTRAINT "_ActivityToDayActivity_A_fkey";

-- DropForeignKey
ALTER TABLE "_ActivityToDayActivity" DROP CONSTRAINT "_ActivityToDayActivity_B_fkey";

-- DropTable
DROP TABLE "Activity";

-- DropTable
DROP TABLE "_ActivityToDayActivity";

-- CreateTable
CREATE TABLE "ActivityLog" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subject" "ActivitySubject" NOT NULL DEFAULT 'OTHER',
    "message" TEXT NOT NULL DEFAULT 'Other activity noticed, something is very wrong. The apocalypse is coming. Run.',
    "messageValues" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "ActivityLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ActivityLogToDayActivity" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ActivityLogToDayActivity_AB_unique" ON "_ActivityLogToDayActivity"("A", "B");

-- CreateIndex
CREATE INDEX "_ActivityLogToDayActivity_B_index" ON "_ActivityLogToDayActivity"("B");

-- AddForeignKey
ALTER TABLE "_ActivityLogToDayActivity" ADD CONSTRAINT "_ActivityLogToDayActivity_A_fkey" FOREIGN KEY ("A") REFERENCES "ActivityLog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActivityLogToDayActivity" ADD CONSTRAINT "_ActivityLogToDayActivity_B_fkey" FOREIGN KEY ("B") REFERENCES "DayActivity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
