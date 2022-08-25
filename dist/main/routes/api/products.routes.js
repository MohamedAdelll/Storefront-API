"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var productControl = __importStar(require("../../controllers/products.controllers"));
var auth_middleware_1 = require("../../helpers/auth.middleware");
var validate_middleware_1 = require("../../helpers/validate.middleware");
var routes = express_1.Router();
routes
    .route("/")
    .get(productControl.Index)
    .post(auth_middleware_1.authenticate, productControl.Create);
routes
    .route("/:id")
    .get(validate_middleware_1.validateID("store_products", "product_id"), productControl.Show)
    .delete(validate_middleware_1.validateID("store_products", "product_id"), productControl.Delete);
routes.route("/category/:category").get(productControl.getProductsByCategory);
exports.default = routes;
