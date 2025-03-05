/*
  Warnings:

  - You are about to drop the column `userIdForArchivePurposes` on the `ResearchActivity` table. All the data in the column will be lost.
  - You are about to drop the column `userIdForArchivePurposes` on the `ResearchLog` table. All the data in the column will be lost.
  - You are about to drop the column `userIdForArchivePurposes` on the `ResearchPhase` table. All the data in the column will be lost.
  - You are about to drop the column `userIdForArchivePurposes` on the `ResearchSession` table. All the data in the column will be lost.
  - You are about to drop the column `userIdForArchivePurposes` on the `Tag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ResearchActivity" DROP CONSTRAINT "ResearchActivity_userIdForArchivePurposes_fkey";

-- DropForeignKey
ALTER TABLE "ResearchLog" DROP CONSTRAINT "ResearchLog_userIdForArchivePurposes_fkey";

-- DropForeignKey
ALTER TABLE "ResearchPhase" DROP CONSTRAINT "ResearchPhase_userIdForArchivePurposes_fkey";

-- DropForeignKey
ALTER TABLE "ResearchSession" DROP CONSTRAINT "ResearchSession_userIdForArchivePurposes_fkey";

-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_userIdForArchivePurposes_fkey";

-- AlterTable
ALTER TABLE "ResearchActivity" DROP COLUMN "userIdForArchivePurposes",
ADD COLUMN     "archived" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ResearchLog" DROP COLUMN "userIdForArchivePurposes",
ADD COLUMN     "archived" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ResearchPhase" DROP COLUMN "userIdForArchivePurposes",
ADD COLUMN     "archived" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ResearchSession" DROP COLUMN "userIdForArchivePurposes",
ADD COLUMN     "archived" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "userIdForArchivePurposes",
ADD COLUMN     "archived" BOOLEAN NOT NULL DEFAULT false;
