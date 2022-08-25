import { Product } from "../../types";
import { Request, Response } from "express";
import productsModel from "../models/products.model";
import errorMiddleware from "../helpers/error.middleware";

export async function Create(req: Request, res: Response) {
  try {
    const { body }: { body: Product } = req;
    const data = await productsModel.Create(body);
    res.status(200).json({
      message: "success",
      data,
    });
  } catch (error) {
    errorMiddleware(error as Error, res);
  }
}

export async function Index(_req: Request, res: Response) {
  try {
    const data = await productsModel.Index();
    res.status(200).json({
      message: "success",
      data,
    });
  } catch (error) {
    errorMiddleware(error as Error, res);
  }
}

export async function Show(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = await productsModel.Show(id);
    res.status(200).json({
      message: "success",
      data,
    });
  } catch (error) {
    errorMiddleware(error as Error, res);
  }
}

export async function getProductsByCategory(req: Request, res: Response) {
  try {
    const { category } = req.params;
    const data = await productsModel.getProductsByCategory(
      category as unknown as string
    );
    res.status(200).json({
      message: "success",
      data,
    });
  } catch (error) {
    errorMiddleware(error as Error, res);
  }
}

export async function Delete(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await productsModel.Delete(id);
    res.status(200).json({
      status: "success",
      data: [],
    });
  } catch (error) {
    errorMiddleware(error as Error, res);
  }
}
