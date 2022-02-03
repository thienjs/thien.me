-- AlterTable
ALTER TABLE "HighScore" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "reactions" (
    "slug" VARCHAR(128) NOT NULL,
    "like_count" BIGINT NOT NULL,
    "love_count" BIGINT NOT NULL,
    "clap_count" BIGINT NOT NULL,
    "party_count" BIGINT NOT NULL,

    CONSTRAINT "reactions_pkey" PRIMARY KEY ("slug")
);
