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
var ProductModel = /** @class */ (function () {
    function ProductModel() {
    }
    ProductModel.prototype.Index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var client, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        client = _a.sent();
                        return [4 /*yield*/, client.query("SELECT product_id as id, name, price, category FROM store_products;")];
                    case 2:
                        result = _a.sent();
                        client.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error("Couldn't retreive products");
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductModel.prototype.Show = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var client, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        client = _a.sent();
                        return [4 /*yield*/, client.query("Select product_id as id, name, price, category FROM store_products WHERE product_id='" + id + "';")];
                    case 2:
                        result = _a.sent();
                        client.release();
                        // if (!result.rows.length) throw new Error("No products with this ID");
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error("Couldn't show product with ID=" + id + " " + error_2);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductModel.prototype.Create = function (p) {
        return __awaiter(this, void 0, void 0, function () {
            var client, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        client = _a.sent();
                        return [4 /*yield*/, client.query("INSERT INTO store_products (name, price, category) values($1,$2,$3) returning name, price, category,product_id AS id; ", [p.name, p.price, p.category])];
                    case 2:
                        result = _a.sent();
                        client.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error("Couldn't create product with name=" + p.name);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductModel.prototype.getProductsByCategory = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            var client, result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        client = _a.sent();
                        return [4 /*yield*/, client.query("SELECT * FROM store_products WHERE category=$1; ", [category])];
                    case 2:
                        result = _a.sent();
                        client.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        error_4 = _a.sent();
                        throw new Error("Can't get products from category = " + category);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductModel.prototype.Delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var client, sql, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        client = _a.sent();
                        sql = "DELETE FROM store_products WHERE product_id='" + id + "'";
                        return [4 /*yield*/, client.query(sql)];
                    case 2:
                        _a.sent();
                        client.release();
                        return [3 /*break*/, 4];
                    case 3:
                        error_5 = _a.sent();
                        throw new Error("Cannot delete product with ID " + id);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ProductModel;
}());
exports.default = new ProductModel();
