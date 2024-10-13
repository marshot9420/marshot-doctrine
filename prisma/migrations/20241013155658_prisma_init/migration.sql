-- CreateEnum
CREATE TYPE "SocialProvider" AS ENUM ('LOCAL', 'GOOGLE', 'KAKAO', 'NAVER');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT,
    "socialId" TEXT,
    "social" "SocialProvider" DEFAULT 'LOCAL',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
