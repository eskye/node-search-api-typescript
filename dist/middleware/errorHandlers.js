"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorHandler = __importStar(require("../utils/errorHandlers"));
exports.handle404Error = (router) => {
    router.use((req, res) => {
        ErrorHandler.notFoundError();
    });
};
exports.handleClientErrors = (router) => {
    router.use((err, req, res, next) => {
        ErrorHandler.clientError(err, res, next);
    });
};
exports.handleServerErrors = (router) => {
    router.use((err, req, res, next) => {
        ErrorHandler.serverError(err, res, next);
    });
};
exports.default = [exports.handle404Error, exports.handleClientErrors, exports.handleServerErrors];
//# sourceMappingURL=errorHandlers.js.map