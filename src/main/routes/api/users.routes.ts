import { Router } from "express";
import * as userControl from "../../controllers/users.controller";
import { authenticate } from "../../helpers/auth.middleware";
import { validateID } from "../../helpers/validate.middleware";

const routes = Router();

routes.route("/").get(authenticate, userControl.Index).post(userControl.create);
routes
  .route("/:id")
  .get(authenticate, validateID("store_users"), userControl.Show)
  .delete(authenticate, validateID("store_users"), userControl.Delete);

export default routes;
