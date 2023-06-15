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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("config"));
const Token_1 = __importDefault(require("../models/Token"));
const auth_1 = __importDefault(require("../middleware/auth"));
const Counter_1 = require("../models/Counter");
const router = (0, express_1.Router)();
router.post("/", [
    (0, express_validator_1.check)("email", "please include a valid email address").isEmail(),
    (0, express_validator_1.check)("password", "password length should be between 6 and 12 characters").isLength({ min: 6, max: 12 }),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const new_id = yield (0, Counter_1.getNextSequence)("userId");
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(http_status_codes_1.default.BAD_REQUEST).json({ erros: errors.array() });
    }
    const { email, password, name, surname } = req.body;
    try {
        let user = yield User_1.default.findOne({ email });
        if (user) {
            return res.status(http_status_codes_1.default.BAD_REQUEST).json({
                errors: [{ msg: "user already exists" }],
            });
        }
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashed = yield bcrypt_1.default.hash(password, salt);
        const userObj = {
            _id: new_id.toString(),
            name: name,
            surname: surname,
            email: email,
            password: hashed,
        };
        user = new User_1.default(userObj);
        user.save().then((success) => {
            if (success) {
                return res.status(http_status_codes_1.default.CREATED).json(req.body);
            }
        });
    }
    catch (error) {
        res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).json({
            msg: {
                errors: Object.assign({}, error),
            },
        });
    }
}));
router.get("/logout", auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header("x-auth-token");
    if (!token) {
        return res.status(http_status_codes_1.default.UNAUTHORIZED).json({ msg: "no token provided, access denied" });
    }
    try {
        const payload = jsonwebtoken_1.default.verify(token, config_1.default.get("KEY"));
        let tempToken = yield Token_1.default.findOne({ email: payload.userId });
        if (!tempToken) {
            return res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).json({ msg: "user not found" });
        }
        tempToken.deleteOne(() => {
            return res.status(http_status_codes_1.default.OK).render("home");
        });
    }
    catch (error) {
        console.log(JSON.stringify(error));
        return res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).json({ msg: "some error", error: error });
    }
}));
exports.default = router;
