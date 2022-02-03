/*
  Warnings:

  - Added the required column `eq` to the `reactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reactions" ADD COLUMN     "eq" TEXT NOT NULL;
