"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const middleware_1 = __importDefault(require("./middleware"));
const services_1 = __importDefault(require("./services"));
const errorHandlers_1 = __importDefault(require("./middleware/errorHandlers"));
process.on('uncaughtException', (e) => {
    console.log(e);
    process.exit(1);
});
process.on('unhandledRejection', e => {
    console.log(e);
    process.exit(1);
});
const router = express_1.default();
utils_1.applyMiddleware(middleware_1.default, router);
utils_1.applyRoutes(services_1.default, router);
utils_1.applyMiddleware(errorHandlers_1.default, router);
const { port = 3000 } = process.env;
const server = http_1.default.createServer(router);
server.listen(port, () => console.log(`Server is running on  http://localhost:${port}...`));
/*
const sum = (a:number, b: number) => a + b;

setInterval(() => console.log(sum(2, 4)), 2000); */ 
//# sourceMappingURL=server.js.map