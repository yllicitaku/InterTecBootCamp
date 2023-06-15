import mongoose, { Document, model, Schema } from "mongoose";

const orderFormSchema: Schema = new Schema({
    _id: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
    },
    brand: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    fromDate: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    toDate: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    carType: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    carModel: {
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
    img: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    price: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    duration: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
});

orderFormSchema.set("timestamps", true);

export type TOrderForm = {
    _id: string;
    brand: string;
    formDate: string;
    toDate: string;
};

export interface IOrderForm extends Document {
    _id: string;
    brand: string;
    formDate: string;
    toDate: string;
}

export const OrderForm = model<IOrderForm>("OrderForm", orderFormSchema);
