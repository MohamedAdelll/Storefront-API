import { Router } from "express";
import * as orderControl from "../../controllers/orders.controllers";
import { validateID } from "../../helpers/validate.middleware";
import { authenticate } from "../../helpers/auth.middleware";

const routes = Router();

routes.route("/").get(authenticate, orderControl.Index);
routes
  .route("/active/:u_id")
  .get(
    authenticate,
    validateID("store_orders", "user_idf"),
    orderControl.getActiveOrdersByID
  );
routes
  .route("/all/:u_id")
  .get(
    authenticate,
    validateID("store_orders", "user_idf"),
    orderControl.getAllOrdersByID
  );
routes.route("/order").post(authenticate, orderControl.createOrder);
routes
  .route("/order/:order_id")
  .get(authenticate, validateID("store_orders", "order_id"), orderControl.Show)
  .put(
    authenticate,
    validateID("store_orders", "order_id"),
    orderControl.changeOrderStatusToComplete
  );

export default routes;
