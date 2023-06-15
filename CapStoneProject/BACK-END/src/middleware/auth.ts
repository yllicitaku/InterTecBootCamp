import { Response, NextFunction } from "express";
import HttpStatusCodes from "http-status-codes";
import jwt from "jsonwebtoken";
import config from "config";
import TPayload from "../config/payload";
import Token, { IToken } from "../models/Token";

export default async function (req: any, res: Response, next: NextFunction) {
    const token = req.header("x-auth-token");
    console.log(token);

    if (!token) return res.status(HttpStatusCodes.UNAUTHORIZED).json({ msg: "no token provided, access denied" });
    try {
        const payload: TPayload | any = jwt.verify(token, config.get("KEY"));
        if (payload.appId !== config.get("APPID")) {
            return res.status(HttpStatusCodes.UNAUTHORIZED).json({ msg: "no token provided, invalid token" });
        }
        let dbtoken: IToken | null = await Token.findOne({ email: payload.userId });
        if (!dbtoken) {
            return res.status(HttpStatusCodes.UNAUTHORIZED).json({ msg: "no token in database" });
        }
        req.userId = payload.userId;
        console.log("done");
        next();
    } catch (error) {
        console.log(error);
        return res.status(HttpStatusCodes.UNAUTHORIZED).json({ msg: "invalid token" });
    }
}
