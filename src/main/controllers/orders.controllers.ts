// import { Order } from "../../types";
import OrdersModel from "../models/orders.model";
import { Request, Response } from "express";
import errorMiddleware from "../helpers/error.middleware";
import ordersModel from "../models/orders.model";
import { Order } from "../../types";

export async function getActiveOrdersByID(req: Request, res: Response) {
  try {
    const { u_id } = req.params;
    const orders = await OrdersModel.getActiveOrdersByID(u_id);
    res.status(200).json({
      message: "success",
      data: orders,
    });
  } catch (error) {
    errorMiddleware(error as Error, res);
  }
}

export async function getAllOrdersByID(req: Request, res: Response) {
  try {
    const { u_id } = req.params;
    const orders = await OrdersModel.getAllOrdersByID(u_id);
    res.status(200).json({
      message: "success",
      data: orders,
    });
  } catch (error) {
    errorMiddleware(error as Error, res);
  }
}

export async function createOrder(req: Request, res: Response) {
  try {
    const order: Order = req.body.order;
    const result = await ordersModel.createOrder(order);
    res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (error) {
    errorMiddleware(error as Error, res);
  }
}

export async function changeOrderStatusToComplete(req: Request, res: Response) {
  try {
    const { order_id } = req.params;
    const result = await ordersModel.changeOrderStatusToComplete(order_id);
    res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (error) {
    errorMiddleware(error as Error, res);
  }
}

export async function Index(_req: Request, res: Response) {
  try {
    const result = await ordersModel.Index();
    res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (error) {
    errorMiddleware(error as Error, res);
  }
}

export async function Show(req: Request, res: Response) {
  try {
    const { order_id } = req.params;
    const result = await ordersModel.Show(order_id);
    res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (error) {
    errorMiddleware(error as Error, res);
  }
}
