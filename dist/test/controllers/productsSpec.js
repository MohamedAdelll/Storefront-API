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
var supertest_1 = __importDefault(require("supertest"));
var auth_middleware_1 = require("../../main/helpers/auth.middleware");
var server_1 = __importDefault(require("../../server"));
var request = supertest_1.default(server_1.default);
describe("Test Products Controller", function () {
    var product = {
        name: "CodeMaster 3000",
        price: 999,
        category: "JavaScript",
    };
    var token, userID, product_id;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, newProduct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = auth_middleware_1.genToken(product.name);
                    return [4 /*yield*/, request
                            .post("/api/v1/products")
                            .send(product)
                            .set("Authorization", "Bearer " + token)];
                case 1:
                    res = _a.sent();
                    newProduct = res.body;
                    product_id = newProduct.data.id;
                    return [2 /*return*/];
            }
        });
    }); });
    it("GET // Gets all products", function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .get("/api/v1/products")
                        .set("Authorization", "Bearer " + token)];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it("GET // Gets a product by id", function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .get("/api/v1/products/" + product_id)
                        .set("Authorization", "Bearer " + token)];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it("GET // Gets product by category", function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .get("/api/v1/products/category/" + product.category)
                        .set("Authorization", "Bearer " + token)];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it("DELETE // Deletes a product by id", function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, newProduct, product_id, res1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .post("/api/v1/products")
                        .send(product)
                        .set("Authorization", "Bearer " + token)];
                case 1:
                    res = _a.sent();
                    newProduct = res.body;
                    product_id = newProduct.data.id;
                    return [4 /*yield*/, request
                            .delete("/api/v1/products/" + product_id)
                            .set("Authorization", "Bearer " + token)];
                case 2:
                    res1 = _a.sent();
                    expect(res1.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
