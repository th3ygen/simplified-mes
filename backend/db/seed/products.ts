import type { Product } from ".";

const products = [
    {
        id: 1,
        name: "Product 1",
        identifier: "#PZ001-001",
    },
    {
        id: 2,
        name: "Product 2",
        identifier: "#PZ001-002",
    },
    {
        id: 3,
        name: "Product 3",
        identifier: "Product 3",
    },
] satisfies Product[];

export default products;