import type { Prisma } from "@prisma/client";
import prisma from "../client";
import productionLines from "./production-lines";
import productionOrders from "./production-orders";
import products from "./products";
import machines from "./machines";
import qualityChecks from "./quality-checks";
import defects from "./defects";

export type ProductionLine = Prisma.ProductionLineCreateManyInput;
export type ProductionOrder = Prisma.ProductionOrderCreateManyInput;
export type Product = Prisma.ProductCreateManyInput;
export type Machine = Prisma.MachineCreateManyInput;
export type QualityCheck = Prisma.QualityCheckCreateManyInput;
export type Defect = Prisma.DefectCreateManyInput;

async function begin() {
	try {
		await prisma.$transaction([
			prisma.product.createMany({
				data: products,
			}),
			prisma.productionLine.createMany({
				data: productionLines,
			}),
			prisma.machine.createMany({
				data: machines,
			}),
			prisma.productionOrder.createMany({
				data: productionOrders,
			}),
			prisma.qualityCheck.createMany({
				data: qualityChecks,
			}),
			prisma.defect.createMany({
				data: defects,
			}),
		]);
		console.log("Seed data created successfully");
	} catch (error) {
		console.error("Error creating seed data:", error);
	} finally {
		await prisma.$disconnect();
	}
	prisma.$connect().then(() => {});
}

begin();
