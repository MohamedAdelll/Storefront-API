"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = exports.genToken = void 0;
var config_1 = require("../../config");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var genToken = function (id) {
    return jsonwebtoken_1.default.sign(id, config_1.TOKEN_SECRET_KEY);
};
exports.genToken = genToken;
function authenticate(req, res, next) {
    var authorization = req.headers.authorization;
    if (!authorization)
        return genErrorMessage(res);
    var bearer = authorization.split(" ")[0].toLowerCase();
    var token = authorization.split(" ")[1];
    if (!token || bearer !== "bearer")
        return genErrorMessage(res);
    try {
        var decode = jsonwebtoken_1.default.verify(token, config_1.TOKEN_SECRET_KEY);
        if (decode)
            return next();
    }
    catch (error) {
        return genErrorMessage(res);
    }
}
exports.authenticate = authenticate;
function genErrorMessage(res) {
    res
        .status(401)
        .json({ message: "Unauthorized to access this endpoint", status: "fail" });
}
