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
var orders_model_1 = __importDefault(require("../../main/models/orders.model"));
var products_model_1 = __importDefault(require("../../main/models/products.model"));
var users_model_1 = __importDefault(require("../../main/models/users.model"));
describe("Order Model", function () {
    var order, userID, productID;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var newUser, user, product, id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newUser = {
                        username: "hansmeier",
                        fName: "Hans",
                        lName: "Meier",
                        password: "password123",
                    };
                    return [4 /*yield*/, users_model_1.default.Create(newUser)];
                case 1:
                    user = _a.sent();
                    userID = user.id;
                    return [4 /*yield*/, products_model_1.default.Create({
                            name: "OrderSpec Product",
                            price: 299,
                            category: "JavaScript",
                        })];
                case 2:
                    product = _a.sent();
                    id = product.id;
                    productID = id;
                    order = {
                        products: [
                            {
                                productID: productID,
                                quantity: 5,
                            },
                        ],
                        userID: userID,
                        status: "active",
                    };
                    return [2 /*return*/];
            }
        });
    }); });
    it("should have an index method", function () {
        expect(orders_model_1.default.Index).toBeDefined();
    });
    it("should have a show method", function () {
        expect(orders_model_1.default.Show).toBeDefined();
    });
    it("should have a getAllOrdersByID method", function () {
        expect(orders_model_1.default.getAllOrdersByID).toBeDefined();
    });
    it("should have a changeOrderStatus method", function () {
        expect(orders_model_1.default.changeOrderStatusToComplete).toBeDefined();
    });
    it("should have a getActiveOrdersByID method", function () {
        expect(orders_model_1.default.getActiveOrdersByID).toBeDefined();
    });
    it("should have a create method", function () {
        expect(orders_model_1.default.createOrder).toBeDefined();
    });
    it("add method should add a order", function () { return __awaiter(void 0, void 0, void 0, function () {
        var createdOrder, showCreatedOrder;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, orders_model_1.default.createOrder(order)];
                case 1:
                    createdOrder = _a.sent();
                    return [4 /*yield*/, orders_model_1.default.Show(createdOrder.order_id)];
                case 2:
                    showCreatedOrder = _a.sent();
                    expect(showCreatedOrder).toBeDefined();
                    return [4 /*yield*/, orders_model_1.default.deleteOrder(createdOrder.order_id)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("index method should return a list of orders", function () { return __awaiter(void 0, void 0, void 0, function () {
        var createdOrder, showCreatedOrder, orderList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, orders_model_1.default.createOrder(order)];
                case 1:
                    createdOrder = _a.sent();
                    return [4 /*yield*/, orders_model_1.default.Show(createdOrder.order_id)];
                case 2:
                    showCreatedOrder = _a.sent();
                    return [4 /*yield*/, orders_model_1.default.Index()];
                case 3:
                    orderList = _a.sent();
                    expect(orderList[orderList.length - 1]).toEqual(showCreatedOrder);
                    return [4 /*yield*/, orders_model_1.default.deleteOrder(createdOrder.order_id)];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("show method should return the correct orders", function () { return __awaiter(void 0, void 0, void 0, function () {
        var createdOrder, orderFromDb;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, orders_model_1.default.createOrder(order)];
                case 1:
                    createdOrder = _a.sent();
                    return [4 /*yield*/, orders_model_1.default.Show(createdOrder.order_id)];
                case 2:
                    orderFromDb = _a.sent();
                    expect(orderFromDb.order_id).toEqual(createdOrder.order_id);
                    return [4 /*yield*/, orders_model_1.default.deleteOrder(createdOrder.order_id)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
