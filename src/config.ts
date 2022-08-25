import dotenv from "dotenv";

dotenv.config();

export const {
  DATABASE_USER_PW,
  DATABASE_NAME,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_HOST,
  PEPPER,
  SALT_ROUNDS,
  DATABASE_NAME_TEST,
  TOKEN_SECRET_KEY,
  NODE_ENV,
  DATABASE_PORT_TEST,
} = process.env;
