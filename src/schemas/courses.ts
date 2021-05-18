import { makeAugmentedSchema } from 'neo4j-graphql-js';

const typeDefs = `
type Course {
    name: String,
    id: Int
}
`;

const schema = makeAugmentedSchema({ typeDefs });

export default schema;