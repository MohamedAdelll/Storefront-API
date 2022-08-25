import { Response, Request } from "express";
import { Error } from "../../types";

const errorMiddleware = (
  error: Error,
  res: Response,
  statusG: number = 500
) => {
  const message = error.message || "Whoops!! something went wrong";
  res.status(statusG).json({ status: "fail", message });
};

export default errorMiddleware;
