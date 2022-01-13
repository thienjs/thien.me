/*
  Warnings:

  - Added the required column `email` to the `guestbook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "guestbook" ADD COLUMN     "email" VARCHAR(256) NOT NULL;
