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
exports.authenticate = exports.Delete = exports.create = exports.Show = exports.Index = void 0;
var users_model_1 = __importDefault(require("../models/users.model"));
var Auth = __importStar(require("../helpers/auth.middleware"));
var error_middleware_1 = __importDefault(require("../helpers/error.middleware"));
var users_model_2 = __importDefault(require("../models/users.model"));
function Index(_req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var allUsers, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, users_model_1.default.Index()];
                case 1:
                    allUsers = _a.sent();
                    res.status(200).json({
                        status: "success",
                        data: allUsers,
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    error_middleware_1.default(error_1, res);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.Index = Index;
function Show(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, user, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    return [4 /*yield*/, users_model_1.default.Show(id)];
                case 1:
                    user = _a.sent();
                    res.status(200).json({
                        status: "success",
                        data: user,
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    error_middleware_1.default(error_2, res);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.Show = Show;
function create(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var newUser, user, token, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    newUser = req.body.newUser;
                    return [4 /*yield*/, users_model_1.default.Create(newUser)];
                case 1:
                    user = _a.sent();
                    token = Auth.genToken(user.id);
                    res.status(200).json({
                        status: "success",
                        data: user,
                        token: token,
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    error_middleware_1.default(error_3, res);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.create = create;
function Delete(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    return [4 /*yield*/, users_model_1.default.Delete(id)];
                case 1:
                    _a.sent();
                    res.status(200).json({
                        status: "success",
                        data: [],
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    error_middleware_1.default(error_4, res);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.Delete = Delete;
function authenticate(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var username, password, user, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    username = req.body.username;
                    password = req.body.password;
                    if (username === undefined || password === undefined)
                        return [2 /*return*/, res.status(400).send("Please fill in all required params!")];
                    return [4 /*yield*/, users_model_2.default.authenticate(username, password)];
                case 1:
                    user = _a.sent();
                    if (!user)
                        return [2 /*return*/, res.status(401).send("Wrong password for user " + username + ".")];
                    res.json(Auth.genToken(user.username));
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    error_middleware_1.default(error_5, res);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.authenticate = authenticate;
