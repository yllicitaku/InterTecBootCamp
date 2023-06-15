import { Router } from "express";
import { Car } from "../models/Car";
import { getNextSequence } from "../models/Counter";
import { OrderForm } from "../models/OrderForm";

const router: Router = Router();

router.post("/", async (req, res) => {
    try {
        req.body._id = await getNextSequence("orderFormId");
        const allCars = await Car.find();
        allCars.forEach((item: any) => {
            if (item.brand === req.body.brand) {
                req.body.carType = item.carType;
                req.body.carModel = item.carModel;
                req.body.gps = item.gps;
                req.body._4x4 = item._4x4;
                req.body.engCapacity = item.engCapacity;
                req.body.price = item.price;
                req.body.img = item.img[0];
                req.body.transmission = item.transmission;
                //DURATION CALCULATION
                const date1 = new Date(req.body.fromDate.toString());
                const date2 = new Date(req.body.toDate.toString());
                const diffTime = Math.abs(date2.getTime() - date1.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                req.body.duration = diffDays;
            }
        });
        const record = await OrderForm.insertMany(req.body);
        return res.status(201).json(record);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

router.get("/", async (req, res) => {
    const record = await OrderForm.find();
    return res.status(201).json(record);
});

router.delete(`/:id`, async (req, res) => {
    try {
        const record = await OrderForm.deleteOne({ _id: req.body._id });
        return res.status(201).json(req.body._id);
    } catch (error) {
        console.log(error);
        return res.status(500).send("RECORD DELETED");
    }
});

export default router;
