import express from 'express';
import { configDotenv } from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import YAML  from 'yamljs';


import { routes } from './routes';
import { logger } from './utils/pino';
import path from 'path';


configDotenv();

const app = express()
const port:string|number = process.env.PORT|| 9000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const swaggerJSDoc = YAML.load("swagger.yaml");
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));


app.use(routes);


app.listen(port, ()=>{logger.info(`App is listning on port no. ${port}`);
})