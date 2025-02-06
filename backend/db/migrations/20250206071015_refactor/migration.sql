/*
  Warnings:

  - A unique constraint covering the columns `[identifier]` on the table `ProductionOrder` will be added. If there are existing duplicate values, this will fail.
  - The required column `identifier` was added to the `ProductionOrder` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Machine" ALTER COLUMN "utilizationRate" DROP NOT NULL,
ALTER COLUMN "downtime" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProductionOrder" ADD COLUMN     "identifier" TEXT NOT NULL,
ALTER COLUMN "targetQuantity" DROP NOT NULL,
ALTER COLUMN "actualQuantity" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Material" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "stock" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,

    CONSTRAINT "Material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MaterialToProductionLine" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_MaterialToProductionLine_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_MaterialToProductionLine_B_index" ON "_MaterialToProductionLine"("B");

-- CreateIndex
CREATE UNIQUE INDEX "ProductionOrder_identifier_key" ON "ProductionOrder"("identifier");

-- AddForeignKey
ALTER TABLE "_MaterialToProductionLine" ADD CONSTRAINT "_MaterialToProductionLine_A_fkey" FOREIGN KEY ("A") REFERENCES "Material"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MaterialToProductionLine" ADD CONSTRAINT "_MaterialToProductionLine_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductionLine"("id") ON DELETE CASCADE ON UPDATE CASCADE;
