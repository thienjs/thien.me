-- DropEnum
DROP TYPE "continents";

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
