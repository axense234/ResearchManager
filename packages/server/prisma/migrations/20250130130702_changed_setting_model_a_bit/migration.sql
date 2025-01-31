-- CreateEnum
CREATE TYPE "SettingCategory" AS ENUM ('GENERAL', 'APP', 'NOTIFICATIONS');

-- CreateEnum
CREATE TYPE "SettingFormControlType" AS ENUM ('RADIO', 'NUMBER', 'CHECKBOX', 'TEXT', 'DATE');

-- AlterTable
ALTER TABLE "Setting" ADD COLUMN     "category" "SettingCategory" NOT NULL DEFAULT 'GENERAL',
ADD COLUMN     "formControlType" "SettingFormControlType" NOT NULL DEFAULT 'TEXT';
