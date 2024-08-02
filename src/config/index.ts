import { configDotenv } from "dotenv";
configDotenv();

export const {DATABASE_URL, PORT} = process.env;