import { Router } from "express";
import { getNextSequence } from "../models/Counter";
import GUser from "../models/GUser";

const router: Router = Router();

router.get("/", async (req, res) => {
    const record = await GUser.find();

    return res.status(201).json(record);
});

export default router;
