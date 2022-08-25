"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorMiddleware = function (error, res, statusG) {
    if (statusG === void 0) { statusG = 500; }
    var message = error.message || "Whoops!! something went wrong";
    res.status(statusG).json({ status: "fail", message: message });
};
exports.default = errorMiddleware;
