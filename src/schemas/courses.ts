import { makeAugmentedSchema } from 'neo4j-graphql-js';

const typeDefs = `
type Region {
    name: String,
    id: Int
}

type Device {
    id: String,
    name: String,
    latitude: String,
    longitude: String,
    ip: String
}

type Sensor {
    id: String,
    name: String,
}

type DeviceGroup {
    id: Int,
    name: String,
}

type Site {
    id: Int,
    name: String,
    latitude: String,
    longitude: String,
    street: String    
}
`;

const schema = makeAugmentedSchema({ typeDefs });

export default schema;