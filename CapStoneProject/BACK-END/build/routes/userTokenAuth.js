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
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
const Token_1 = __importDefault(require("../models/Token"));
const router = (0, express_1.Router)();
router.post("/", [
    (0, express_validator_1.check)("email", "please include a valid email address").isEmail(),
    (0, express_validator_1.check)("password", "password length should be between 6 and 12 characters").isLength({ min: 6, max: 12 }),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(http_status_codes_1.default.BAD_REQUEST).json({ erros: errors.array() });
    }
    const { email, password } = req.body;
    console.log(email, password);
    try {
        let user = yield User_1.default.findOne({ email });
        if (!user) {
            return res.status(http_status_codes_1.default.BAD_REQUEST).json({
                errors: [{ msg: "user doesnt exist, Invalid Email" }],
            });
        }
        const isValidPassword = yield bcrypt_1.default.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(http_status_codes_1.default.UNAUTHORIZED).json({
                msg: "invalid password",
            });
        }
        const payload = {
            userId: user.email,
            appId: yield config_1.default.get("APPID"),
        };
        jsonwebtoken_1.default.sign(payload, config_1.default.get("KEY"), { expiresIn: config_1.default.get("VALIDITY") }, (error, token) => {
            if (error)
                throw error;
            res.status(http_status_codes_1.default.ACCEPTED).json({ token });
            const newToken = {
                email: email,
                token: token ? token : "",
            };
            let stoken = new Token_1.default(newToken);
            Token_1.default.insertMany(newToken).then((ret) => {
                console.log(ret);
            });
        });
    }
    catch (error) {
        console.log(error);
        res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).send("server error");
    }
}));
exports.default = router;
