import neo4j from 'neo4j-driver';

const driver = neo4j.driver(
  'bolt://192.168.0.131:7687'
);

export default driver;