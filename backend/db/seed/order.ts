import { ProductionOrder } from ".";

const productionOrders = [
	{
		id: 1,
		targetQuantity: 1200,
		actualQuantity: 1145,
		startTime: new Date("2025-01-01"),
		endTime: new Date("2025-01-04"),
		status: "DONE",
		productionLineId: 1
	},
	{
		id: 2,
		targetQuantity: 2200,
		actualQuantity: 2102,
		startTime: new Date("2025-02-02"),
		endTime: new Date("2025-02-05"),
		status: "DONE",
		productionLineId: 2
	},
	{
		id: 3,
		targetQuantity: 1200,
		actualQuantity: 201,
		startTime: new Date("2025-03-04"),
		status: "PROGRESS",
		productionLineId: 1
	},
	{
		id: 4,
		targetQuantity: 2400,
		actualQuantity: 0,
		startTime: new Date("2025-03-10"),
		status: "PENDING",
		productionLineId: 2
	},
] satisfies ProductionOrder[];

export default productionOrders;
