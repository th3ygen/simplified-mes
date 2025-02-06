import type { Product } from ".";

const products = [
	{
		id: 1,
		name: "Product 1",
		identifier: "PZ-K5-001",
	},
	{
		id: 2,
		name: "Product 2",
		identifier: "PZ-K2-002",
	},
	{
		id: 3,
		name: "Product 3",
		identifier: "PZ-K1-002",
	},
] satisfies Product[];

export default products;
