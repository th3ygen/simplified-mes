import { loadSchema } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import path from "path";

export const load = async () => {
	const schemaFile = "schema.graphql";

	const schemaPath = path.join(__dirname, schemaFile);
	const schema = await loadSchema(schemaPath, {
		loaders: [new GraphQLFileLoader()],
	});
	
	return schema;
};
