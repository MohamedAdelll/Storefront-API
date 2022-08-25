import { TOKEN_SECRET_KEY as jwtSecretKey } from "../../config";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const genToken = (id: string): string =>
  jwt.sign(id, jwtSecretKey as unknown as string);

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) return genErrorMessage(res);
  const bearer = authorization.split(" ")[0].toLowerCase();
  const token = authorization.split(" ")[1];
  if (!token || bearer !== "bearer") return genErrorMessage(res);
  try {
    const decode = jwt.verify(token, jwtSecretKey as unknown as string);
    if (decode) return next();
  } catch (error) {
    return genErrorMessage(res);
  }
}

function genErrorMessage(res: Response) {
  res
    .status(401)
    .json({ message: "Unauthorized to access this endpoint", status: "fail" });
}
