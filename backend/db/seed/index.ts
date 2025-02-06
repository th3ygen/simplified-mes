import type { Prisma } from "@prisma/client";
import prisma from "../client";
import productionLines from "./line";
import productionOrders from "./order";
import products from "./products";
import machines from "./machine";
import qualityChecks from "./quality";
import defects from "./defect";

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
