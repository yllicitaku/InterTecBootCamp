import { Router, Response, Request } from "express";
import { check, validationResult } from "express-validator";
import HttpStatusCodes from "http-status-codes";
import User, { IUser, TUser } from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import TPayload from "../config/payload";
import config from "config";
import Token, { IToken } from "../models/Token";
import auth from "../middleware/auth";
import { getNextSequence } from "../models/Counter";

const router: Router = Router();

router.post(
    "/",
    [
        check("email", "please include a valid email address").isEmail(),
        check("password", "password length should be between 6 and 12 characters").isLength({ min: 6, max: 12 }),
    ],
    async (req: Request, res: Response) => {
        const new_id = await getNextSequence("userId");
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({ erros: errors.array() });
        }
        const { email, password, name, surname } = req.body;
        try {
            let user: IUser | null = await User.findOne({ email });
            if (user) {
                return res.status(HttpStatusCodes.BAD_REQUEST).json({
                    errors: [{ msg: "user already exists" }],
                });
            }
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(password, salt);

            const userObj: TUser = {
                _id: new_id.toString(),
                name: name,
                surname: surname,
                email: email,
                password: hashed,
            };
            user = new User(userObj);
            user.save().then((success) => {
                if (success) {
                    return res.status(HttpStatusCodes.CREATED).json(req.body);
                }
            });
        } catch (error: any) {
            res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
                msg: {
                    errors: {
                        ...error,
                    },
                },
            });
        }
    }
);

router.get("/logout", auth, async (req: Request, res: Response) => {
    const token = req.header("x-auth-token");
    if (!token) {
        return res.status(HttpStatusCodes.UNAUTHORIZED).json({ msg: "no token provided, access denied" });
    }
    try {
        const payload: TPayload | any = jwt.verify(token, config.get("KEY"));
        let tempToken: IToken | null = await Token.findOne({ email: payload.userId });
        if (!tempToken) {
            return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "user not found" });
        }
        tempToken.deleteOne(() => {
            return res.status(HttpStatusCodes.OK).render("home");
        });
    } catch (error) {
        console.log(JSON.stringify(error));
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "some error", error: error });
    }
});

export default router;
