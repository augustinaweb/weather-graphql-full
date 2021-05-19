import {
	GraphQLSchema,
	GraphQLList,
	GraphQLObjectType,
	GraphQLString
} from 'graphql';

//const BASE_URL = 'localhost://';

const CityType = new GraphQLObjectType({
	name: 'City',
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		country: { type: GraphQLString },
		coord: { type: GraphQLObjectType },
		weather: { type: GraphQLObjectType }
	})
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		city: {
			type: CityType,
			args: {
				id: { type: GraphQLString },
				name: { type: GraphQLString }
			},
			resolve(parent, args) {
				//code to get data from db
			}
		}
	}
});

export default new GraphQLSchema({
	query: RootQuery
});
