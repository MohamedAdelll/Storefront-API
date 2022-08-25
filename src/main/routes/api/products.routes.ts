import { Router } from "express";
import * as productControl from "../../controllers/products.controllers";
import { authenticate } from "../../helpers/auth.middleware";
import { validateID } from "../../helpers/validate.middleware";

const routes = Router();

routes
  .route("/")
  .get(productControl.Index)
  .post(authenticate, productControl.Create);
routes
  .route("/:id")
  .get(validateID("store_products", "product_id"), productControl.Show)
  .delete(validateID("store_products", "product_id"), productControl.Delete);
routes.route("/category/:category").get(productControl.getProductsByCategory);

export default routes;
