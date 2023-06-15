import { Router } from "express";
import { getNextSequence } from "../models/Counter";
import { Car } from "../models/Car";

const router: Router = Router();

router.post("/", async (req, res) => {
    try {
        req.body._id = await getNextSequence("carId");
        const record = await Car.insertMany(req.body);
        return res.status(201).json(record);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.get("/", async (req, res) => {
    const record = await Car.find();

    return res.status(201).json(record);
});

export default router;
