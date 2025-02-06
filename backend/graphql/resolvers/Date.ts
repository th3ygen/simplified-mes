import { GraphQLScalarType } from "graphql";

const DataScalarType = new GraphQLScalarType({
	name: "Date",
	description:
		"A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the full `date-time` format defined in RFC 3339, section 5.6.",
	parseValue(value) {
		if (typeof value !== "string") {
			throw new Error(`Value is not a string: ${value}`);
		}
		return new Date(value); // value from the client
	},
	serialize(value) {
		if (!(value instanceof Date)) {
			throw new Error(`Value is not a date: ${value}`);
		}
		return value.toISOString(); // value sent to the client
	},
});

export default DataScalarType;
