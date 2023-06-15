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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
const Token_1 = __importDefault(require("../models/Token"));
function default_1(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = req.header("x-auth-token");
        console.log(token);
        if (!token)
            return res.status(http_status_codes_1.default.UNAUTHORIZED).json({ msg: "no token provided, access denied" });
        try {
            const payload = jsonwebtoken_1.default.verify(token, config_1.default.get("KEY"));
            if (payload.appId !== config_1.default.get("APPID")) {
                return res.status(http_status_codes_1.default.UNAUTHORIZED).json({ msg: "no token provided, invalid token" });
            }
            let dbtoken = yield Token_1.default.findOne({ email: payload.userId });
            if (!dbtoken) {
                return res.status(http_status_codes_1.default.UNAUTHORIZED).json({ msg: "no token in database" });
            }
            req.userId = payload.userId;
            console.log("done");
            next();
        }
        catch (error) {
            console.log(error);
            return res.status(http_status_codes_1.default.UNAUTHORIZED).json({ msg: "invalid token" });
        }
    });
}
exports.default = default_1;
