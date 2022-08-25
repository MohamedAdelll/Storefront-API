"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./main/routes"));
var app = express_1.default();
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
var address = "127.0.0.1:3000";
app.disable("x-powered-by");
app.use(cors_1.default());
app.use(express_1.default.json());
app.get("/", function (_req, res) {
    res.send("Hello World!");
});
app.use("/api/v1", routes_1.default);
////////////////////////////////////////////////////////////
app.use(function (_req, res) {
    res.status(404).json({
        message: "Oh ohh you are lost, read the API documentation to find your way back.",
    });
});
app.listen(3000, function () {
    console.log("starting app on: " + address);
});
exports.default = app;
