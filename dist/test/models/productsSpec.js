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
var products_model_1 = __importDefault(require("../../main/models/products.model"));
describe("Test Product Model", function () {
    var product = {
        name: "CodeMaster",
        price: 42,
        category: "JavaScript",
    };
    it("should have an index method", function () {
        expect(products_model_1.default.Index).toBeDefined();
    });
    it("should have a show method", function () {
        expect(products_model_1.default.Show).toBeDefined();
    });
    it("should have a add method", function () {
        expect(products_model_1.default.Create).toBeDefined();
    });
    it("should have a delete method", function () {
        expect(products_model_1.default.Delete).toBeDefined();
    });
    it("add method should add a product", function () { return __awaiter(void 0, void 0, void 0, function () {
        var createdProduct, createdProductShow;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, products_model_1.default.Create(product)];
                case 1:
                    createdProduct = _a.sent();
                    return [4 /*yield*/, products_model_1.default.Show(createdProduct.id)];
                case 2:
                    createdProductShow = _a.sent();
                    expect(createdProductShow.id).toBe(createdProduct.id);
                    return [4 /*yield*/, products_model_1.default.Delete(createdProduct.id)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("index method should return a list of products", function () { return __awaiter(void 0, void 0, void 0, function () {
        var createdProduct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, products_model_1.default.Create(product)];
                case 1:
                    createdProduct = _a.sent();
                    expect(createdProduct.category).toEqual(product.category);
                    return [4 /*yield*/, products_model_1.default.Delete(createdProduct.id)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("show method should return the correct product", function () { return __awaiter(void 0, void 0, void 0, function () {
        var createdProduct, showCreatedProduct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, products_model_1.default.Create(product)];
                case 1:
                    createdProduct = _a.sent();
                    return [4 /*yield*/, products_model_1.default.Show(createdProduct.id)];
                case 2:
                    showCreatedProduct = _a.sent();
                    expect(showCreatedProduct.id).toEqual(createdProduct.id);
                    return [4 /*yield*/, products_model_1.default.Delete(createdProduct.id)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("delete method should remove the product", function () { return __awaiter(void 0, void 0, void 0, function () {
        var createdProduct, showCreatedProduct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, products_model_1.default.Create(product)];
                case 1:
                    createdProduct = _a.sent();
                    return [4 /*yield*/, products_model_1.default.Delete(createdProduct.id)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, products_model_1.default.Show(createdProduct.id)];
                case 3:
                    showCreatedProduct = _a.sent();
                    expect(showCreatedProduct).toBeUndefined();
                    return [2 /*return*/];
            }
        });
    }); });
});
