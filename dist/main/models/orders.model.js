"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../../database"));
var OrderModel = /** @class */ (function () {
    function OrderModel() {
    }
    OrderModel.prototype.Index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var client, sql, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        client = _a.sent();
                        sql = "SELECT * FROM store_orders";
                        return [4 /*yield*/, database_1.default.query(sql)];
                    case 2:
                        result = _a.sent();
                        client.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error("Can't get all orders");
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OrderModel.prototype.Show = function (o_id) {
        return __awaiter(this, void 0, void 0, function () {
            var client, sql, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        client = _a.sent();
                        sql = "SELECT * FROM store_orders WHERE order_id = $1;";
                        return [4 /*yield*/, client.query(sql, [o_id])];
                    case 2:
                        result = _a.sent();
                        client.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error("Can't get order with ID=" + o_id);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OrderModel.prototype.getActiveOrdersByID = function (u_id) {
        return __awaiter(this, void 0, void 0, function () {
            var client, sql, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        client = _a.sent();
                        sql = "SELECT * FROM store_orders WHERE user_idf = $1 AND status = 'active';";
                        return [4 /*yield*/, client.query(sql, [u_id])];
                    case 2:
                        result = _a.sent();
                        client.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error("Can't get active orders by user with ID=" + u_id);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OrderModel.prototype.getAllOrdersByID = function (u_id) {
        return __awaiter(this, void 0, void 0, function () {
            var client, sql, result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        client = _a.sent();
                        sql = "SELECT * FROM store_orders WHERE user_idF = $1;";
                        return [4 /*yield*/, database_1.default.query(sql, [u_id])];
                    case 2:
                        result = _a.sent();
                        client.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        error_4 = _a.sent();
                        throw new Error("Can't get active orders by user with ID=" + u_id);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OrderModel.prototype.createOrder = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var products, userID, status_1, client, sql, result, order_id, productsArr, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        products = order.products, userID = order.userID, status_1 = order.status;
                        if (!products || !userID || !status_1)
                            throw new Error("Some parameters are missing e.g: products, userID or the status!");
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        client = _a.sent();
                        sql = "INSERT INTO store_orders (user_idf,status) values($1,$2) RETURNING *;";
                        return [4 /*yield*/, client.query(sql, [userID, status_1.toLowerCase()])];
                    case 2: return [4 /*yield*/, (_a.sent()).rows[0]];
                    case 3:
                        result = _a.sent();
                        order_id = result.order_id;
                        return [4 /*yield*/, this._createProductsInOrder(client, order_id, products)];
                    case 4:
                        productsArr = _a.sent();
                        client.release();
                        return [2 /*return*/, {
                                order_id: order_id,
                                products: productsArr,
                                userID: userID,
                                status: status_1,
                            }];
                    case 5:
                        error_5 = _a.sent();
                        throw new Error("Can't create order for user with ID=" + order.userID + " " + error_5);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    OrderModel.prototype.changeOrderStatusToComplete = function (order_id) {
        return __awaiter(this, void 0, void 0, function () {
            var client, result, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        client = _a.sent();
                        return [4 /*yield*/, client.query("UPDATE store_orders SET status = 'complete' WHERE order_id=$1 RETURNING *;", [order_id])];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        error_6 = _a.sent();
                        throw new Error("Can't change status of order with ID=" + order_id + " " + error_6);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OrderModel.prototype._createProductsInOrder = function (client, order_id, products) {
        return __awaiter(this, void 0, void 0, function () {
            var productsArr, _i, products_1, prodObj, sql, product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productsArr = [];
                        _i = 0, products_1 = products;
                        _a.label = 1;
                    case 1:
                        if (!(_i < products_1.length)) return [3 /*break*/, 5];
                        prodObj = products_1[_i];
                        sql = "INSERT INTO order_products (order_idf,product_idf,product_quantity) values($1,$2,$3) RETURNING product_idf,product_quantity;";
                        return [4 /*yield*/, client.query(sql, [order_id, prodObj.productID, prodObj.quantity])];
                    case 2: return [4 /*yield*/, (_a.sent()).rows[0]];
                    case 3:
                        product = _a.sent();
                        productsArr.push(product);
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/, productsArr];
                }
            });
        });
    };
    OrderModel.prototype.deleteOrder = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var client, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        client = _a.sent();
                        return [4 /*yield*/, client.query("DELETE FROM order_products WHERE order_idf='" + id + "';")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, client.query("DELETE FROM store_orders WHERE order_id='" + id + "';")];
                    case 3:
                        _a.sent();
                        client.release();
                        return [2 /*return*/, []];
                    case 4:
                        error_7 = _a.sent();
                        throw new Error("Cannot delete user with ID " + id);
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return OrderModel;
}());
exports.default = new OrderModel();
