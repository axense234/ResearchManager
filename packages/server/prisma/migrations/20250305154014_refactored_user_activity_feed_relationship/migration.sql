/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `ActivityFeed` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ActivityFeed_userId_key" ON "ActivityFeed"("userId");
