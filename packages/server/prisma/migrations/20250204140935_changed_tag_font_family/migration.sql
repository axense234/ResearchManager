/*
  Warnings:

  - The `fontFamily` column on the `Tag` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "TagFontFamily" AS ENUM ('ARIAL', 'HELVETICA', 'TIMES_NEW_ROMAN', 'VERDANA', 'GEORGIA', 'COURIER_NEW', 'TAHOMA', 'TREBUCHET_MS', 'IMPACT', 'COMIC_SANS_MS', 'LUCIDA', 'MONACO', 'BRADLEY_HAND', 'LUMINARY');

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "fontFamily",
ADD COLUMN     "fontFamily" "TagFontFamily" NOT NULL DEFAULT 'ARIAL';
