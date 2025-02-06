import prisma from "../../db/client";

const resolvers = {
	async machine(parent: any, { id }: { id: string }) {
		return await prisma.machine.findUnique({ where: { id: parseInt(id) } });
	},
	async machines() {
		return await prisma.machine.findMany();
	},
};

export default resolvers;
