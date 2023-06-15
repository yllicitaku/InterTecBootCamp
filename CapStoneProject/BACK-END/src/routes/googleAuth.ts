import { Router } from "express";

const passport = require("passport");
require("../services/passport");
const router: Router = Router();

router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    })
);

router.get("/google/callback", passport.authenticate("google"), (req: any, res: any) => {
    // console.log(req.user);
    res.redirect("http://localhost:3000/dashboard");
});

export default router;
