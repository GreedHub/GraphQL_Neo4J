require('dotenv').config({ path: './.env' })
import { ApolloServer } from "apollo-server-express";
import * as Express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';
import { CourseSchema } from './schemas';
import { Neo4jDriver } from "./drivers";

const originsEnv:string = process.env.CORS_ENABLED_ORIGINS || '';
const origins:string[] = originsEnv.split(",") || [];

const { PORT } = process.env;

let app = Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



const server = new ApolloServer({schema:CourseSchema,context: { driver:Neo4jDriver }});
server.applyMiddleware({app});


app.listen(PORT,()=>console.log(`App running on http://localhost:${PORT}`))