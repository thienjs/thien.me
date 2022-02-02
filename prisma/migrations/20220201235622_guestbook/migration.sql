-- CreateTable
CREATE TABLE "Guestbook" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(256) NOT NULL,
    "body" TEXT NOT NULL,
    "createdBy" VARCHAR(256) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guestbook_pkey" PRIMARY KEY ("id")
);
