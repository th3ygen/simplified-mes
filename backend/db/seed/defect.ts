import type { Defect } from ".";

const defects = [
	{
		id: 1,
		type: "Misprint",
		severity: "LOW",
		description: "A misprint in the product",
		qualityCheckId: 1,
	},
	{
		id: 2,
		type: "Misprint",
		severity: "LOW",
		description: "A misprint in the product",
		qualityCheckId: 1,
	},
	{
		id: 3,
		type: "Dent",
		severity: "LOW",
		description: "A dent in the product",
		qualityCheckId: 1,
	},
	{
		id: 4,
		type: "Dent",
		severity: "LOW",
		description: "A dent in the product",
		qualityCheckId: 2,
	},
	{
		id: 5,
		type: "Leakage",
		severity: "HIGH",
		description: "A leakage in the product",
		qualityCheckId: 2,
	},
	{
		id: 6,
		type: "Leakage",
		severity: "HIGH",
		description: "A leakage in the product",
		qualityCheckId: 2,
	},
	{
		id: 7,
		type: "Leakage",
		severity: "HIGH",
		description: "A leakage in the product",
		qualityCheckId: 2,
	},
] satisfies Defect[];

export default defects;
