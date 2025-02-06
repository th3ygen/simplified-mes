import type { QualityCheck } from ".";

const qualityChecks = [
	{
		id: 1,
		inspectorName: "John Doe",
		inspectionTime: new Date("2025-01-01"),
        status: "PASS",
		productionOrderId: 1
	},
	{
		id: 2,
		inspectorName: "John Doe",
		inspectionTime: new Date("2025-01-01"),
        status: "FAIL",
		productionOrderId: 2
	},
] satisfies QualityCheck[];

export default qualityChecks;
