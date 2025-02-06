import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import * as graphql from "./graphql";

async function init() {
	const app = express();

	const schema = await graphql.init();

	app.use(
		"/graphql",
		createHandler({
			schema,
			rootValue: {},
		})
	);

	app.listen(4000, () => {
		console.log("🚀 Server ready at http://localhost:4000/graphql");
		// console.log('🚀 Subscriptions ready at ws://localhost:4000/graphql');
	});
}

init();
