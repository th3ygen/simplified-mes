/*
  Warnings:

  - You are about to drop the column `productName` on the `ProductionOrder` table. All the data in the column will be lost.
  - You are about to drop the column `defectCount` on the `QualityCheck` table. All the data in the column will be lost.
  - You are about to drop the column `defectTypes` on the `QualityCheck` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[identifier]` on the table `Machine` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[identifier]` on the table `ProductionLine` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `identifier` to the `Machine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `identifier` to the `ProductionLine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `ProductionLine` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status` on the `QualityCheck` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "QualityCheckStatus" AS ENUM ('PASS', 'FAIL');

-- AlterTable
ALTER TABLE "Defect" ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Machine" ADD COLUMN     "identifier" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProductionLine" ADD COLUMN     "identifier" TEXT NOT NULL,
ADD COLUMN     "productId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ProductionOrder" DROP COLUMN "productName",
ALTER COLUMN "endTime" DROP NOT NULL;

-- AlterTable
ALTER TABLE "QualityCheck" DROP COLUMN "defectCount",
DROP COLUMN "defectTypes",
DROP COLUMN "status",
ADD COLUMN     "status" "QualityCheckStatus" NOT NULL;

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_identifier_key" ON "Product"("identifier");

-- CreateIndex
CREATE UNIQUE INDEX "Machine_identifier_key" ON "Machine"("identifier");

-- CreateIndex
CREATE UNIQUE INDEX "ProductionLine_identifier_key" ON "ProductionLine"("identifier");

-- AddForeignKey
ALTER TABLE "ProductionLine" ADD CONSTRAINT "ProductionLine_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
