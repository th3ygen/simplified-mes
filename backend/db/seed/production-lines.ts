import type { ProductionLine } from ".";

const productionLines = [
	{
		id: 1,
        name: "Line 1",
		identifier: "PL-BB001",
		status: "IDLE",
        productId: 1
	},
	{
		id: 2,
        name: "Line 2",
		identifier: "PL-BB002",
		status: "IDLE",
        productId: 2
	},
] satisfies ProductionLine[];

export default productionLines;
