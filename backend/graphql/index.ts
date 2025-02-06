import * as resolvers from "./resolvers";
import * as typeDefs from "./types";
import { addResolversToSchema } from "@graphql-tools/schema";

export async function init() {
	const schema = await typeDefs.load();

	return addResolversToSchema({
		schema,
		resolvers: {
			Date: resolvers.Date,
			Query: { ...resolvers.machineResolvers, ...resolvers.productionOrderResolvers },
		},
	});
}

export { resolvers, typeDefs };
