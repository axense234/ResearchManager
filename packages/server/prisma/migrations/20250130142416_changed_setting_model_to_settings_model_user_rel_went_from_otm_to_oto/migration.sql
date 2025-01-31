/*
  Warnings:

  - You are about to drop the `Setting` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `ActivityFeed` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "SettingsSidebarPosition" AS ENUM ('LEFT', 'RIGHT');

-- DropForeignKey
ALTER TABLE "ActivityFeed" DROP CONSTRAINT "ActivityFeed_userId_fkey";

-- DropForeignKey
ALTER TABLE "Setting" DROP CONSTRAINT "Setting_userId_fkey";

-- AlterTable
ALTER TABLE "ActivityFeed" ALTER COLUMN "userId" DROP NOT NULL;

-- DropTable
DROP TABLE "Setting";

-- DropEnum
DROP TYPE "SettingCategory";

-- DropEnum
DROP TYPE "SettingFormControlType";

-- CreateTable
CREATE TABLE "Settings" (
    "id" TEXT NOT NULL,
    "sidebarPosition" "SettingsSidebarPosition" NOT NULL DEFAULT 'LEFT',
    "warningOverlayTimeInSeconds" INTEGER NOT NULL DEFAULT 10,
    "purgeDirectly" BOOLEAN NOT NULL DEFAULT false,
    "allowNotifications" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Settings_userId_key" ON "Settings"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ActivityFeed_userId_key" ON "ActivityFeed"("userId");

-- AddForeignKey
ALTER TABLE "Settings" ADD CONSTRAINT "Settings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityFeed" ADD CONSTRAINT "ActivityFeed_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
