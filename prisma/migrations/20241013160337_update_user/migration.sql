-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'MARSHOT');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'USER';
