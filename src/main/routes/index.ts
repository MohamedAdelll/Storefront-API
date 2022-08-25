import { Router } from "express";
import userRoutes from "./api/users.routes";
import productsRoutes from "./api/products.routes";
import ordersRoutes from "./api/orders.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/products", productsRoutes);
routes.use("/orders", ordersRoutes);

export default routes;
