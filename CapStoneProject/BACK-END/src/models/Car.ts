import mongoose, { Document, model, mongo, Schema } from "mongoose";

const CarSchema: Schema = new Schema({
    _id: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
    },
    carType: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    carModel: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    brand: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    gps: {
        type: mongoose.Schema.Types.Boolean,
        required: true,
    },
    _4x4: {
        type: mongoose.Schema.Types.Boolean,
        required: true,
    },
    transmission:{
        type: mongoose.Schema.Types.String,
        required: true,
    },
    engCapacity: {
        type: mongoose.Schema.Types.Number,
        required: true,
        default: 1.9,
    },
    img: [
        {
            type: mongoose.Schema.Types.String,
            required: true,
        },
    ],
    price: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
});

CarSchema.set("timestamps", true);

export type TCar = {
    _id: string;
    carType: string;
    carModel: string;
    brand: string;
    gps: boolean;
    _4x4: boolean;
    transmission:string;
    engCapacity: number;
    img: string[];
    price: number;
};

export interface ICar extends Document {
    _id: string;
    carType: string;
    carModel: string;
    brand: string;
    gps: boolean;
    _4x4: boolean;
    transmission:string;
    engCapacity: number;
    img: string[];
    price: number;
}

export const Car = model<ICar>("Cars", CarSchema);
