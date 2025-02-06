import * as resolvers from "./resolvers";
import * as typeDefs from "./types";
import { addResolversToSchema } from "@graphql-tools/schema";

export async function init() {
	const schema = await typeDefs.load();

	const re = {
		Date: resolvers.Date,
		Query: { ...resolvers.machineResolvers },
	};

	return addResolversToSchema({ schema, resolvers: re });
}

export { resolvers, typeDefs };
