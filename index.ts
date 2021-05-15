require('dotenv').config({ path: './.env' })
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';

const originsEnv:string = process.env.CORS_ENABLED_ORIGINS || '';
const origins:string[] = originsEnv.split(",") || [];

const { PORT } = process.env;

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(cors({
    origin: origins,
    credentials: true,
  }));

app.listen(PORT,()=>console.log(`App running on http://localhost:${PORT}`))