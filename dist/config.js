"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE_PORT_TEST = exports.NODE_ENV = exports.TOKEN_SECRET_KEY = exports.DATABASE_NAME_TEST = exports.SALT_ROUNDS = exports.PEPPER = exports.DATABASE_HOST = exports.DATABASE_USER = exports.DATABASE_PORT = exports.DATABASE_NAME = exports.DATABASE_USER_PW = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.DATABASE_USER_PW = (_a = process.env, _a.DATABASE_USER_PW), exports.DATABASE_NAME = _a.DATABASE_NAME, exports.DATABASE_PORT = _a.DATABASE_PORT, exports.DATABASE_USER = _a.DATABASE_USER, exports.DATABASE_HOST = _a.DATABASE_HOST, exports.PEPPER = _a.PEPPER, exports.SALT_ROUNDS = _a.SALT_ROUNDS, exports.DATABASE_NAME_TEST = _a.DATABASE_NAME_TEST, exports.TOKEN_SECRET_KEY = _a.TOKEN_SECRET_KEY, exports.NODE_ENV = _a.NODE_ENV, exports.DATABASE_PORT_TEST = _a.DATABASE_PORT_TEST;
