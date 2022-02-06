-- CreateTable
CREATE TABLE "likes" (
    "slug" VARCHAR(128) NOT NULL,
    "count" BIGINT NOT NULL DEFAULT 1,

    CONSTRAINT "likes_pkey" PRIMARY KEY ("slug")
);
