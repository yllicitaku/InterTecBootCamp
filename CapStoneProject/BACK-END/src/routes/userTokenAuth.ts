import { Request, Response, Router } from "express";
import { check, validationResult } from "express-validator";
import HttpStatusCodes from "http-status-codes";
import User, { IUser } from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "config";
import Token, { IToken, TToken } from "../models/Token";
import TPayload from "../config/payload";

const router: Router = Router();

router.post(
    "/",
    [
        check("email", "please include a valid email address").isEmail(),
        check("password", "password length should be between 6 and 12 characters").isLength({ min: 6, max: 12 }),
    ],
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({ erros: errors.array() });
        }

        const { email, password } = req.body;
        console.log(email, password);
        try {
            let user: IUser | null = await User.findOne({ email });

            if (!user) {
                return res.status(HttpStatusCodes.BAD_REQUEST).json({
                    errors: [{ msg: "user doesnt exist, Invalid Email" }],
                });
            }
            const isValidPassword = await bcrypt.compare(password, user.password);

            if (!isValidPassword) {
                return res.status(HttpStatusCodes.UNAUTHORIZED).json({
                    msg: "invalid password",
                });
            }
            const payload: TPayload = {
                userId: user.email,
                appId: await config.get("APPID"),
            };
            jwt.sign(payload, config.get("KEY"), { expiresIn: config.get("VALIDITY") }, (error, token) => {
                if (error) throw error;
                user!.token = token;
                res.status(HttpStatusCodes.ACCEPTED).json({ user });

                const newToken: TToken = {
                    email: email,
                    token: token ? token : "",
                };
                let stoken: IToken = new Token(newToken);
                Token.insertMany(newToken).then((ret) => {
                    console.log(ret);
                });
            });
        } catch (error) {
            console.log(error);
            res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("server error");
        }
    }
);

export default router;
