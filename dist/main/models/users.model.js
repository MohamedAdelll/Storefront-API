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
var database_1 = __importDefault(require("../../database"));
var bcrypt = __importStar(require("bcrypt"));
var config_1 = require("../../config");
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    UserModel.prototype.Index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var client, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        client = _a.sent();
                        return [4 /*yield*/, client.query("SELECT ID, username ,f_name as fName,l_name as lName FROM store_users;")];
                    case 2:
                        result = _a.sent();
                        client.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error("Cannot retreive users data " + error_1);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserModel.prototype.Show = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var client, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        client = _a.sent();
                        return [4 /*yield*/, client.query("SELECT ID,username, f_name as fName,l_name as lName FROM store_users WHERE ID=$1;", [id])];
                    case 2:
                        result = _a.sent();
                        client.release();
                        // if (!result.rows.length) throw new Error();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error("Cannot get user with ID:" + id);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserModel.prototype.Create = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var hash, client, sql, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, bcrypt.hash(config_1.PEPPER + u.password, +config_1.SALT_ROUNDS)];
                    case 1:
                        hash = _a.sent();
                        return [4 /*yield*/, database_1.default.connect()];
                    case 2:
                        client = _a.sent();
                        sql = "INSERT INTO store_users (f_name,l_name,u_password,username) VALUES ('" + u.fName + "','" + u.lName + "','" + hash + "','" + u.username + "') returning id,username,f_name as fName, l_name as lName;";
                        return [4 /*yield*/, client.query(sql)];
                    case 3:
                        result = _a.sent();
                        client.release();
                        return [2 /*return*/, result.rows[0]];
                    case 4:
                        error_3 = _a.sent();
                        throw new Error("Cannot create new user with name " + u.fName);
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    UserModel.prototype.Delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var client, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        client = _a.sent();
                        return [4 /*yield*/, client.query("DELETE FROM store_users WHERE id='" + id + "'")];
                    case 2:
                        _a.sent();
                        client.release();
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        throw new Error("Cannot delete user with ID " + id);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserModel.prototype.authenticate = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var client, sql, rows, user, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        client = _a.sent();
                        sql = "SELECT * FROM store_users WHERE username=($1)";
                        return [4 /*yield*/, client.query(sql, [username])];
                    case 2:
                        rows = (_a.sent()).rows;
                        client.release();
                        if (!rows.length)
                            return [2 /*return*/, null];
                        user = rows[0];
                        if (bcrypt.compareSync(password + config_1.PEPPER, user.u_password))
                            return [2 /*return*/, user];
                        return [2 /*return*/, null];
                    case 3:
                        err_1 = _a.sent();
                        throw new Error("Could not find user " + username + ". " + err_1);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UserModel;
}());
exports.default = new UserModel();
