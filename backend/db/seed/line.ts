import type { ProductionLine } from ".";

const productionLines = [
	{
		id: 1,
        name: "Line 1",
		identifier: "#A001E1",
		status: "IDLE",
        productId: 1
	},
	{
		id: 2,
        name: "Line 2",
		identifier: "#A001E2",
		status: "IDLE",
        productId: 2
	},
] satisfies ProductionLine[];

export default productionLines;
