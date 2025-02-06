import type { Machine } from ".";

const machines = [
	{
		id: 1,
		name: "Machine 1",
		identifier: "#M0E1-001",
		utilizationRate: 0.5,
		downtime: 1000 * 60 * 4.1, // 4.1 hours,
		productionLineId: 1
	},
	{
		id: 2,
		name: "Machine 2",
		identifier: "#M0E1-002",
		utilizationRate: 0.8,
		downtime: 1000 * 60 * 10.51,
		productionLineId: 1
	},
	{
		id: 3,
		name: "Machine 3",
		identifier: "Machine 3",
		utilizationRate: 0.2,
		downtime: 1000 * 60 * 3,
		productionLineId: 2
	},
] satisfies Machine[];

export default machines;
