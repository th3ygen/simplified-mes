import prisma from "../../db/client";

const resolvers = {
	async productionOrder(parent: any, { id }: { id: string }) {
		return await prisma.productionOrder.findUnique({
			where: { id: parseInt(id) },
		});
	},
	async productionOrders() {
		return await prisma.productionOrder.findMany();
	},
	async createProductionOrder(
		parent: any,
		{
			product,
			target,
			startDate,
		}: { product: string; target: number; startDate: Date }
	) {
		const selectedProduct = await prisma.product.findUnique({
			where: { id: parseInt(product) },
			include: { productionLines: true },
		});

		if (!selectedProduct) {
			throw new Error("Product not found");
		}

		const count = await prisma.productionOrder.count();

		const date = new Date(startDate || Date.now());

		return await prisma.productionOrder.create({
			data: {
                id: count + 1,
				identifier: "PO-SB00" + (count + 1),
				targetQuantity: target,
				startTime: date,
				productionLineId: selectedProduct.productionLines[0].id,
			},
		});
	},
};

export default resolvers;
