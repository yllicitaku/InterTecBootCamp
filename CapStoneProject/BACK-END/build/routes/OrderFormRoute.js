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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Car_1 = require("../models/Car");
const Counter_1 = require("../models/Counter");
const OrderForm_1 = require("../models/OrderForm");
const router = (0, express_1.Router)();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.body._id = yield (0, Counter_1.getNextSequence)("orderFormId");
        const allCars = yield Car_1.Car.find();
        allCars.forEach((item) => {
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
        const record = yield OrderForm_1.OrderForm.insertMany(req.body);
        return res.status(201).json(record);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const record = yield OrderForm_1.OrderForm.find();
    return res.status(201).json(record);
}));
router.delete(`/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const record = yield OrderForm_1.OrderForm.deleteOne({ _id: req.body._id });
        return res.status(201).json(req.body._id);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send("RECORD DELETED");
    }
}));
exports.default = router;
