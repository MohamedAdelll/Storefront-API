import { NextFunction, Response, Request } from "express";
import db from "../../database";
import { User } from "../../types";
import errorMiddleware from "./error.middleware";

export async function validateUsername(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const newUser: User = req.body.newUser as unknown as User;
    if (
      !newUser.fName ||
      !newUser.lName ||
      !newUser.password ||
      !newUser.username
    )
      throw new Error("Some parameters not specified, check documentation");
    const client = await db.connect();
    const sql = `SELECT username FROM store_users WHERE username=$1`;
    const result = await client.query(sql, [newUser.username]);
    client.release();
    if (!result.rows[0]) return next();
    throw new Error("Username must be unique, try another one!");
  } catch (error) {
    errorMiddleware(error as Error, res);
  }
}

export function validateID(table: string, id_name: string = "id") {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const id: string =
        req.params.id || req.params.u_id || req.params.order_id;
      const client = await db.connect();
      const sql = `SELECT ${id_name} FROM ${table} WHERE ${id_name}='${id}';`;
      const result = await client.query(sql);
      client.release();
      if (!result.rows[0])
        throw new Error(`Invalid ID, no object found with the specified ID`);
      return next();
    } catch (error) {
      errorMiddleware(error as Error, res, 404);
    }
  };
}
