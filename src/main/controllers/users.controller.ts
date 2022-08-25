import { User } from "../../types";
import UserModel from "../models/users.model";
import { Request, Response } from "express";
import * as Auth from "../helpers/auth.middleware";
import errorMiddleware from "../helpers/error.middleware";
import usersModel from "../models/users.model";

export async function Index(_req: Request, res: Response) {
  try {
    const allUsers = await UserModel.Index();
    res.status(200).json({
      status: "success",
      data: allUsers,
    });
  } catch (error) {
    errorMiddleware(error as Error, res);
  }
}

export async function Show(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await UserModel.Show(id);
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    errorMiddleware(error as Error, res);
  }
}

export async function create(req: Request, res: Response) {
  try {
    const { newUser }: { newUser: User } = req.body;
    const user = await UserModel.Create(newUser);
    const token = Auth.genToken(user.id as unknown as string);
    res.status(200).json({
      status: "success",
      data: user,
      token,
    });
  } catch (error) {
    errorMiddleware(error as Error, res);
  }
}

export async function Delete(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await UserModel.Delete(id);
    res.status(200).json({
      status: "success",
      data: [],
    });
  } catch (error) {
    errorMiddleware(error as Error, res);
  }
}

export async function authenticate(req: Request, res: Response) {
  try {
    const username = req.body.username as unknown as string;
    const password = req.body.password as unknown as string;

    if (username === undefined || password === undefined)
      return res.status(400).send("Please fill in all required params!");

    const user: User | null = await usersModel.authenticate(username, password);

    if (!user)
      return res.status(401).send(`Wrong password for user ${username}.`);

    res.json(Auth.genToken(user.username));
  } catch (error) {
    errorMiddleware(error as Error, res);
  }
}
