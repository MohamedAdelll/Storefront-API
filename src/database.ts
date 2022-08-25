import { Pool } from "pg";
import * as dbConfig from "./config";

let dbPort: number, dbName: string;

if (dbConfig.NODE_ENV === "dev") {
  dbPort = dbConfig.DATABASE_PORT_TEST as unknown as number;
  dbName = dbConfig.DATABASE_NAME_TEST as unknown as string;
} else {
  dbPort = dbConfig.DATABASE_PORT as unknown as number;
  dbName = dbConfig.DATABASE_NAME as unknown as string;
}

const db = new Pool({
  user: dbConfig.DATABASE_USER,
  password: dbConfig.DATABASE_USER_PW,
  host: dbConfig.DATABASE_HOST,
  port: dbPort,
  database: dbName,
});

export default db;
