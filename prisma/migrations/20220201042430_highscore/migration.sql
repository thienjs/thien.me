-- CreateTable
CREATE TABLE "HighScore" (
    "id" SERIAL NOT NULL,
    "score" INTEGER,
    "playerId" INTEGER,

    CONSTRAINT "HighScore_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "HighScore" ADD CONSTRAINT "HighScore_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
